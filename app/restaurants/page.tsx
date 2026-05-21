// app/restaurants/page.tsx
"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Clock3 } from "lucide-react";

const restaurants = [
  {
    name: "Burger King",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    rating: "4.5",
    time: "25 mins",
    cuisine: "Burgers, Fast Food",
    link: "https://burgerking.in/product-listing",
  },
  {
    name: "Pizza Hut",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    rating: "4.3",
    time: "30 mins",
    cuisine: "Pizza, Italian",
    link: "https://www.pizzahut.co.in/",
  },
  {
    name: "KFC",
    image: "https://images.unsplash.com/photo-1516685018646-549198525c1b",
    rating: "4.4",
    time: "20 mins",
    cuisine: "Chicken, Fast Food",
    link: "https://online.kfc.co.in/menu",
  },
  {
    name: "Aminia ",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
    rating: "4.7",
    time: "35 mins",
    cuisine: "Biryani, Indian",
    link: "https://www.aminia.co.in/aminia-menu",
  },
  {
    name: "Mocambo",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    rating: "4.6",
    time: "28 mins",
    cuisine: "Pasta, Italian",
    link: "https://www.zomato.com/kolkata/mocambo-park-street-area/menu",
  },
  {
    name: "Oudh 1950",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    rating: "4.2",
    time: "18 mins",
    cuisine: "Mixed Cuisine",
    link: "https://www.oudh1590.com/menu.php",
  },
];

export default function Restaurants() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <section className="px-6 lg:px-16 py-16">
        <h1 className="text-5xl font-bold">Restaurants</h1>

        <p className="text-gray-600 mt-4 text-lg">
          Discover top-rated restaurants near you.
        </p>
      </section>

      <section className="px-6 lg:px-16 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.name}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className=" h-60 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-black text-2xl font-bold">
                  {restaurant.name}
                </h2>

                <p className="text-gray-500 mt-2">{restaurant.cuisine}</p>

                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center gap-2 text-red-500">
                    <Star size={18} fill="orange" />
                    <span>{restaurant.rating}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock3 size={18} />
                    <span>{restaurant.time}</span>
                  </div>
                </div>

                <button
                  className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl transition"
                  onClick={() => window.open(restaurant.link, "_blank")}
                >
                  View Menu
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
