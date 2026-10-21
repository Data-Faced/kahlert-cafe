import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-900">
      {/* Header */}
      <header className="bg-stone-800 text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-stone-800 font-bold text-xl">☕</div>
            <h1 className="text-2xl font-bold tracking-tight">The Kahlert Café</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-amber-300">Home</Link>
            <Link href="/about" className="hover:text-amber-300">About</Link>
            <Link href="/menu" className="hover:text-amber-300">Menu</Link>
            <Link href="/contact" className="hover:text-amber-300">Contact</Link>
            <a href="https://order.toasttab.com/online/kalhert-cafe-53-loveton-circle" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-400 text-stone-900 px-4 py-2 rounded-full font-semibold">Order Online</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-stone-800 to-stone-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Welcome to The Kahlert Café</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
            At The Kahlert Café, every purchase supports meaningful employment and opportunity for people with intellectual and developmental disabilities.
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-amber-100">
            We’re proud to serve great coffee and food with an even greater purpose — brewing confidence, connection, and a more inclusive community with every cup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://order.toasttab.com/online/kalhert-cafe-53-loveton-circle" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-400 text-stone-900 px-8 py-4 rounded-full text-lg font-semibold shadow-lg">Order Online</a>
            <Link href="/menu" className="border-2 border-amber-400 hover:bg-amber-400 hover:text-stone-900 px-8 py-4 rounded-full text-lg font-semibold">Browse Menu</Link>
          </div>
        </div>
      </section>

      {/* Inclusive Café Open */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-stone-800">Inclusive Café Now Open in Sparks, MD</h3>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">Watch the Kahlert Café's Exciting Ribbon Cutting Celebration and join us in celebrating inclusion and opportunity.</p>
        </div>
      </section>

      {/* Farm-to-Able */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">A Unique Farm-to-Able Culinary Experience</h3>
            <p className="text-lg leading-relaxed mb-6">
              Savor fresh, locally sourced meals, artisanal baked goods, and specialty coffee at The Kahlert Café. Our inclusive community café in Sparks, Maryland serves delicious food while creating meaningful job training and employment opportunities for adults with intellectual and developmental disabilities.
            </p>
            <Link href="/menu" className="inline-block bg-stone-800 text-white hover:bg-stone-700 px-6 py-3 rounded-full font-semibold">Browse Menu</Link>
          </div>
          <div className="bg-stone-200 rounded-2xl h-64 md:h-80 flex items-center justify-center text-stone-500">
            [Farm-to-Table Image Placeholder]
          </div>
        </div>
      </section>

      {/* Crafted with Love */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-stone-200 rounded-2xl h-64 md:h-80 flex items-center justify-center text-stone-500">
            [Team / Community Image Placeholder]
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">Crafted with Love and Purpose</h3>
            <p className="text-lg leading-relaxed mb-6">
              More than just a café, The Kahlert Café is a welcoming space of inclusion and opportunity right here in Sparks, MD. Discover how we empower adults with disabilities through hands-on culinary training while building community one delicious dish at a time.
            </p>
            <Link href="/about" className="inline-block bg-amber-500 text-stone-900 hover:bg-amber-400 px-6 py-3 rounded-full font-semibold">More About Us</Link>
          </div>
        </div>
      </section>

      {/* Where Inclusion Comes to Life */}
      <section className="py-16 bg-stone-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Where Inclusion Comes to Life</h3>
          <p className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Step inside and see the dedicated team, farm-to-table flavors, and genuine connections that make The Kahlert Café a place of purpose, growth, and belonging in Sparks, Maryland.
          </p>
          <a href="https://www.facebook.com/profile.php?id=61588407959697" target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-500 text-stone-900 hover:bg-amber-400 px-8 py-3 rounded-full font-semibold">Follow Us on Facebook</a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-400 to-amber-500 text-stone-900 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-5xl font-bold mb-6">An Inclusive Culinary Experience.</h3>
          <p className="text-xl mb-8">Visit us or order online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://order.toasttab.com/online/kalhert-cafe-53-loveton-circle" target="_blank" rel="noopener noreferrer" className="bg-stone-800 text-white hover:bg-stone-700 px-8 py-4 rounded-full text-lg font-semibold">Order on Toast</a>
            <Link href="/contact" className="border-2 border-stone-800 hover:bg-stone-800 hover:text-white px-8 py-4 rounded-full text-lg font-semibold">Visit Us</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white text-xl font-bold mb-4">The Kahlert Café</h4>
            <p>A Farm-to-Able Richcroft Enterprise</p>
            <p className="mt-2">53 Loveton Circle, Suite 112<br />Sparks, MD 21152</p>
          </div>
          <div>
            <h4 className="text-white text-xl font-bold mb-4">Hours</h4>
            <p>Monday – Friday<br />8:00 AM – 3:00 PM</p>
            <p className="mt-2">Phone: (410) 785-3274</p>
          </div>
          <div>
            <h4 className="text-white text-xl font-bold mb-4">Connect</h4>
            <a href="https://www.facebook.com/profile.php?id=61588407959697" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">Facebook</a>
            <p className="mt-4 text-sm">© {new Date().getFullYear()} The Kahlert Café. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
