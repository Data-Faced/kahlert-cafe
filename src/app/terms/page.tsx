import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for The Kahlert Café website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold text-[#0F6397] mb-2">Terms & Conditions</h1>
        <p className="text-stone-500 mb-8">Last updated: October 21, 2026</p>

        <div className="prose prose-stone max-w-none space-y-6 text-stone-700">
          <p>
            Welcome to The Kahlert Café website. By using this site, you agree to the following terms.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8">Use of the Website</h2>
          <p>
            This website is provided for informational purposes about The Kahlert Café, our menu, hours, and mission. You may not use the site for any unlawful purpose or in a way that could damage or impair the site.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8">Online Ordering</h2>
          <p>
            Online ordering is processed through Toast. When you place an order, you are subject to Toast’s terms and the policies of The Kahlert Café regarding availability, pricing, and pickup.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8">Accuracy of Information</h2>
          <p>
            We strive to keep menu items, hours, and other information accurate, but details may change. Please confirm hours and availability with the café if needed.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8">Intellectual Property</h2>
          <p>
            All content on this site, including text, images, and logos, is owned by The Kahlert Café or its partners and may not be used without permission.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8">Contact</h2>
          <p>
            Questions about these terms can be directed to:<br />
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
