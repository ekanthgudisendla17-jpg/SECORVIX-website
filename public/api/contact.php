<?php
// Contact form: emails each enquiry to the SECORVIX inbox.
//   POST contact.php  { firstName, lastName, email, phone, company, interest, message, website }

declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

require_method('POST');
$in = request_json();

// Honeypot field: real visitors never see or fill it.
if (str_field($in, 'website', 200) !== '') {
    json_response(['ok' => true]);
}

if (rate_count('contact', 3600) >= 5) {
    fail('You have sent several enquiries recently. Please try again later or email us directly.', 429);
}

$oneLine = function (string $value): string {
    return trim(preg_replace('/[\r\n\t]+/', ' ', $value) ?? '');
};

$first = $oneLine(str_field($in, 'firstName', 80));
$last = $oneLine(str_field($in, 'lastName', 80));
$email = $oneLine(str_field($in, 'email', 200));
$phone = $oneLine(str_field($in, 'phone', 30));
$company = $oneLine(str_field($in, 'company', 150));
$interest = $oneLine(str_field($in, 'interest', 80));
$message = str_field($in, 'message', 5000);

if ($first === '' || $last === '' || $company === '' || $interest === '' || $message === '') {
    fail('Please fill in every field.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail('Please enter a valid email address.');
}
$digits = preg_replace('/\D/', '', $phone) ?? '';
if (!preg_match('/^[0-9+()\-\s]{7,20}$/', $phone) || strlen($digits) < 7 || strlen($digits) > 15) {
    fail('Please enter a valid phone number.');
}

$c = config();
$subject = 'Website enquiry: ' . $interest . ' - ' . $company;
$body = "New enquiry from secorvix-ai.com\n\n"
    . "Name:      {$first} {$last}\n"
    . "Email:     {$email}\n"
    . "Phone:     {$phone}\n"
    . "Company:   {$company}\n"
    . "Interest:  {$interest}\n\n"
    . "Message:\n{$message}\n\n"
    . '-- Sent ' . gmdate('j M Y, H:i') . " UTC\n";

$headers = implode("\r\n", [
    'From: SECORVIX Website <' . $c['mail_from'] . '>',
    'Reply-To: ' . $first . ' ' . $last . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: SECORVIX contact form',
]);

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$sent = @mail($c['contact_email'], $encodedSubject, $body, $headers, '-f' . $c['mail_from']);
if (!$sent) {
    // Some hosts reject the envelope-sender flag; retry without it.
    $sent = @mail($c['contact_email'], $encodedSubject, $body, $headers);
}

if (!$sent) {
    fail('Sorry, your message could not be sent. Please email us at ' . $c['contact_email'] . '.', 500);
}

rate_record('contact', 3600);
json_response(['ok' => true]);
