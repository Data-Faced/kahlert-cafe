import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const fbImages = [
    "/tkc-home-fb-1.jpg",
    "/tkc-home-fb-2.jpg",
    "/tkc-home-fb-3.jpeg",
    "/tkc-home-fb-4.jpg",
    "/tkc-home-fb-5.jpeg",
    "/tkc-home-fb-6.jpg",
    "/tkc-home-fb-7.jpg",
    "/tkc-home-fb-8.jpeg",
  ];

  return (
    <div className="min-h-screen bg-white text-stone-900">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/tkc-header-logo.png" alt="The Kahlert Café" width={180} height={60} priority />
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
            <Link href="/" className="hover:text-[#0F6397]">HOME</Link>
            <Link href="/menu" className="hover:text-[#0F6397]">MENU</Link>
            <Link href="/about" className="hover:text-[#0F6397]">ABOUT</Link>
            <Link href="/contact" className="hover:text-[#0F6397]">CONTACT</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://order.toasttab.com/online/kalhert-cafe-53-loveton-circle" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block bg-[#0F6397] hover:bg-[#0d5580] text-white px-4 py-2 text-sm font-semibold">ORDER ONLINE</a>
            <button className="lg:hidden text-[#0F6397] text-2xl">☰</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-white" style={{backgroundImage: "url(/tkc-hero-bg.jpeg)", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative z-10 container mx-auto px-4 max-w-2xl">
          <div className="w-12 h-0.5 bg-white mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Welcome to<br />The Kahlert Café</h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            At The Kahlert Café, every purchase supports meaningful employment and opportunity for people with intellectual and developmental disabilities. We’re proud to serve great coffee and food with an even greater purpose - brewing confidence, connection, and a more inclusive community with every cup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://order.toasttab.com/online/kalhert-cafe-53-loveton-circle" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0F6397] px-6 py-3 font-semibold text-center hover:bg-stone-100">ORDER ONLINE</a>
            <Link href="/about" className="border-2 border-white text-white px-6 py-3 font-semibold text-center hover:bg-white/10">OUR MISSION</Link>
          </div>
        </div>
      </section>

      {/* Inclusive Café Open */}
      <section className="py-16 bg-stone-50 text-center">
        <div className="container mx-auto px-4">
          <div className="w-16 h-0.5 bg-[#0F6397] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F6397] mb-3">Inclusive Café Now Open in Sparks, MD</h2>
          <p className="text-lg text-stone-700 mb-8">Watch the Kahlert’s Café’s Exciting Ribbon Cutting Celebration</p>
          <div className="relative max-w-4xl mx-auto mb-8 aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/6xeW8So7ya8"
              title="Kahlert Café Ribbon Cutting Celebration"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://order.toasttab.com/online/kalhert-cafe-53-loveton-circle" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0F6397] border border-[#0F6397] px-8 py-3 font-semibold hover:bg-blue-50">ORDER ONLINE</a>
            <Link href="/about" className="border-2 border-stone-400 text-stone-700 px-8 py-3 font-semibold hover:bg-stone-100">ABOUT US</Link>
          </div>
        </div>
      </section>

      {/* Farm-to-Able */}
      <section className="bg-stone-900 text-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative aspect-[4/3]">
            <Image src="/tkc-home-food-1.jpg" alt="Farm-to-table food" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <div className="w-12 h-0.5 bg-white mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Unique Farm-to-Able Culinary Experience</h2>
            <p className="text-lg leading-relaxed mb-8">
              Savor fresh, locally sourced meals, artisanal baked goods, and specialty coffee at The Kahlert Café. Our inclusive community café in Sparks, Maryland serves delicious food while creating meaningful job training and employment opportunities for adults with intellectual and developmental disabilities.
            </p>
            <Link href="/menu" className="inline-block border-2 border-white px-6 py-3 font-semibold hover:bg-white hover:text-stone-900">BROWSE MENU</Link>
          </div>
        </div>
      </section>

      {/* Crafted with Love */}
      <section className="bg-stone-900 text-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-0.5 bg-white mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Crafted with Love and Purpose</h2>
            <p className="text-lg leading-relaxed mb-8">
              More than just a café, The Kahlert Café is a welcoming space of inclusion and opportunity right here in Sparks, MD. Discover how we empower adults with disabilities through hands-on culinary training while building community one delicious dish at a time.
            </p>
            <Link href="/about" className="inline-block border-2 border-white px-6 py-3 font-semibold hover:bg-white hover:text-stone-900">MORE ABOUT US</Link>
          </div>
          <div className="relative aspect-[4/3]">
            <Image src="/tkc-home-food-2.jpg" alt="Team in the kitchen" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Where Inclusion Comes to Life */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-16 h-0.5 bg-[#0F6397] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F6397] text-center mb-4">Where Inclusion Comes to Life</h2>
          <p className="text-center mb-2"><a href="https://www.facebook.com/profile.php?id=61588407959697" target="_blank" rel="noopener noreferrer" className="text-[#0F6397] font-semibold hover:underline">Follow Us on Facebook!</a></p>
          <p className="text-center text-stone-600 max-w-2xl mx-auto mb-10">
            Step inside and see the dedicated team, farm-to-table flavors, and genuine connections that make The Kahlert Café a place of purpose, growth, and belonging in Sparks, Maryland.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {fbImages.map((src, i) => (
              <div key={i} className="relative aspect-square">
                <Image src={src} alt={`Team photo ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://www.facebook.com/profile.php?id=61588407959697" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0F6397] text-white px-8 py-3 font-semibold hover:bg-[#0d5580]">FOLLOW THE KAHLERT CAFE</a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20" style={{backgroundImage: "url(/tkc-cta-bg.jpeg)", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 max-w-lg">
          <div className="bg-white p-8 md:p-10">
            <div className="w-12 h-0.5 bg-[#0F6397] mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F6397] mb-6">An Inclusive Culinary Experience.<br />Visit us or order online.</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://order.toasttab.com/online/kalhert-cafe-53-loveton-circle" target="_blank" rel="noopener noreferrer" className="bg-[#0F6397] text-white px-6 py-3 font-semibold text-center hover:bg-[#0d5580]">ORDER ONLINE</a>
              <Link href="/contact" className="border-2 border-stone-300 text-stone-700 px-6 py-3 font-semibold text-center hover:bg-stone-50">CONTACT</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 py-12 text-sm">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <Image src="/tkc-header-logo.png" alt="The Kahlert Café" width={160} height={50} className="mb-2" />
            <p className="text-stone-600">A Richcroft Farm-to-Able Enterprise</p>
          </div>
          <div>
            <p className="font-semibold mb-2">ORDER ONLINE</p>
            <p><Link href="/menu" className="hover:underline">MENU</Link></p>
            <p><Link href="/about" className="hover:underline">ABOUT</Link></p>
          </div>
          <div>
            <p className="font-semibold mb-2">CONTACT</p>
            <p><Link href="/privacy" className="hover:underline">PRIVACY POLICY</Link></p>
            <p><Link href="/terms" className="hover:underline">TERMS & CONDITIONS</Link></p>
          </div>
          <div>
            <p className="font-semibold mb-2">HOURS & LOCATION</p>
            <p className="text-[#0F6397]">OPEN: MON - FRI (8AM - 3PM)</p>
            <p className="text-red-600">CLOSED: SAT & SUN</p>
            <p className="mt-2">53 Loveton Circle, Suite #112<br />Sparks, MD 21152</p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-6 border-t border-stone-300 flex flex-col md:flex-row justify-between items-center text-stone-500">
          <p>© 2026 The Kahlert Café – A Richcroft Farm-to-Able Enterprise. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61588407959697" className="hover:text-[#0F6397]">f</a>
            <a href="#" className="hover:text-[#0F6397]">in</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
