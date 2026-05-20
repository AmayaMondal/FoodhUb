const foods = [
  {
    name: "Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    name: "Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
  },
];

export default function PopularFoods() {
  return (
    <section className="px-8 lg:px-20 py-20">
      <h2 className="text-4xl font-bold text-center mb-14">Popular Dishes</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {foods.map((food) => (
          <div
            key={food.name}
            className="rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img
              src={food.image}
              alt={food.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-semibold">{food.name}</h3>

              <button className="mt-4 bg-orange-500 text-white px-5 py-2 rounded-xl">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
