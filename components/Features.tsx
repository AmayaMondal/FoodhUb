import { Bike, Clock, Star } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-red-50 px-8 lg:px-20 py-20">
      <h2 className="text-4xl font-bold text-center mb-14 text-red-500">
        Why Choose Us?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-md">
          <Bike className="text-red-500 mb-4" size={40} />

          <h3 className="text-2xl font-semibold mb-3 text-black">
            Fast Delivery
          </h3>

          <p className="text-black">Food delivered in under 30 minutes.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-md">
          <Star className="text-red-500 mb-4" size={40} />

          <h3 className="text-2xl font-semibold mb-3 text-black">
            Best Quality
          </h3>

          <p className="text-black">Top-rated restaurants and meals.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-md">
          <Clock className="text-red-500 mb-4" size={40} />

          <h3 className="text-2xl font-semibold mb-3 text-black">
            24/7 Service
          </h3>

          <p className="text-black">Order anytime anywhere.</p>
        </div>
      </div>
    </section>
  );
}
