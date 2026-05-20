import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-20 gap-10">
      <div className="max-w-xl">
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
          Delicious Food <br />
          Delivered Fast
        </h1>

        <p className="text-gray-600 mt-6 text-lg">
          Order food from your favorite restaurants near you.
        </p>

        <div className="flex items-center bg-gray-100 rounded-2xl p-3 mt-8 shadow-md">
          <Search className="text-grey-500" />

          <input
            type="text"
            placeholder="Search food..."
            className="bg-transparent outline-none px-3 w-full text-black placeholder:text-black"
          />

          <button className="bg-red-500 text-white px-5 py-3 rounded-xl">
            Search
          </button>
        </div>

        <div className="flex gap-4 mt-6">
          <button className="bg-black border border-white text-white px-6 py-3 rounded-xl">
            Download App
          </button>

          <button className="bg-black border border-white text-white px-6 py-3 rounded-xl">
            Explore
          </button>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        alt="Food"
        className="rounded-3xl shadow-2xl max-w-lg"
      />
    </section>
  );
}
