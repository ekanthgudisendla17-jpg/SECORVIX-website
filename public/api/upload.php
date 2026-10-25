<?php
// Image upload for cover images and images inside articles.
//   POST upload.php  multipart/form-data with "file"

declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

require_method('POST');
require_admin();

$file = $_FILES['file'] ?? null;
if (!$file || !is_array($file) || ($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
    $tooBig = in_array($file['error'] ?? 0, [UPLOAD_ERR_INI_SIZE, UPLOAD_ERR_FORM_SIZE], true);
    fail($tooBig ? 'That image is too large for the server. Please use an image under 8 MB.' : 'The upload did not complete. Please try again.');
}
if ($file['size'] > 8 * 1024 * 1024) {
    fail('Please use an image under 8 MB.');
}

$types = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp', 'image/gif' => 'gif'];
$mime = '';
if (class_exists('finfo')) {
    $mime = (string) (new finfo(FILEINFO_MIME_TYPE))->file($file['tmp_name']);
} else {
    $info = @getimagesize($file['tmp_name']);
    $mime = $info ? (string) $info['mime'] : '';
}
if (!isset($types[$mime])) {
    fail('Please upload a JPG, PNG, WebP or GIF image.');
}

$sub = gmdate('Y/m');
$dir = UPLOAD_DIR . '/' . $sub;
if (!is_dir($dir) && !mkdir($dir, 0755, true)) {
    fail('Could not create the uploads folder on the server.', 500);
}

$name = bin2hex(random_bytes(10)) . '.' . $types[$mime];
if (!move_uploaded_file($file['tmp_name'], $dir . '/' . $name)) {
    fail('Could not save the image on the server.', 500);
}
@chmod($dir . '/' . $name, 0644);

json_response(['url' => '/uploads/' . $sub . '/' . $name]);
