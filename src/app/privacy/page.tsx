import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for The Kahlert Café website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-[#0F6397] font-semibold hover:underline">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold text-[#0F6397] mb-2">Privacy Policy</h1>
        <p className="text-stone-500 mb-8">Last updated: October 21, 2026</p>

        <div className="prose prose-stone max-w-none space-y-6 text-stone-700">
          <p>
            The Kahlert Café (“we,” “us,” or “our”) operates the website at thekahlertcafe.com. This Privacy Policy explains how we collect, use, and protect information when you visit our website.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8">Information We Collect</h2>
          <p>
            We currently collect very little personal information. If you contact us through a form or email, we may receive your name, email address, and message. We do not sell or share your information with third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8">How We Use Information</h2>
          <p>
            Any information you provide is used only to respond to your inquiries or improve our website experience. Online ordering is handled by Toast, which has its own privacy practices.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8">Cookies and Analytics</h2>
          <p>
            This staging site does not currently use analytics or tracking cookies. If we add them in the future, we will update this policy.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8">Your Rights</h2>
          <p>
            You may contact us at any time to ask about information we hold or to request its removal.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8">Contact Us</h2>
          <p>
            The Kahlert Café<br />
            53 Loveton Circle, Suite #112<br />
            Sparks, MD 21152<br />
            Phone: (410) 785-3274
          </p>
        </div>
      </main>
    </div>
  );
}
