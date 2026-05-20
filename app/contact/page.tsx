import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main>
      <Navbar />

      <section className="px-6 lg:px-16 py-20">
        <h1 className="text-5xl font-bold mb-12">Contact Us </h1>

        <div className="max-w-2xl space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-4 rounded-2xl outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-4 rounded-2xl outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full border p-4 rounded-2xl outline-none"
          />

          <button className="bg-red-500 text-white px-7 py-4 rounded-2xl">
            Send Message
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
