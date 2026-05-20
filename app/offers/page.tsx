import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const offers = [
  "50% OFF on First Order",
  "Free Delivery Above ₹299",
  "Buy 1 Get 1 Free Pizza",
  "Flat ₹100 OFF on Burgers",
];

export default function Offers() {
  return (
    <main>
      <Navbar />

      <section className="px-6 lg:px-16 py-20">
        <h1 className="text-5xl font-bold mb-12">Exciting Offers </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div key={offer} className="bg-orange-100 p-10 rounded-3xl">
              <h2 className="text-3xl font-bold text-red-600">{offer}</h2>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
