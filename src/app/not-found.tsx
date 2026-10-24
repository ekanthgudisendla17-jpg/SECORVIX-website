import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Arrow, buttonGhost, buttonPrimary } from "./components/ui";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="relative isolate flex flex-1 items-center overflow-hidden bg-ink">
        <div aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lavender/15 blur-[140px]" />
        <div className="mx-auto max-w-3xl px-5 py-40 text-center sm:px-6">
          <p className="eyebrow justify-center text-lavender">Error 404</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">Page not found</h1>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-white/70">
            The page you are looking for has moved or no longer exists.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/" className={`group ${buttonPrimary}`}>
              Back to Home <Arrow />
            </Link>
            <Link href="/contact/" className={buttonGhost}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
