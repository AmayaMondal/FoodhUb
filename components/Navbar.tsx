import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 shadow-sm">
      <h1 className="text-3xl font-bold text-red-500">FoodhUb</h1>

      <div className="flex gap-4 font-medium text-sm">
        <Link href="/">Home</Link>
        <Link href="/restaurants">Restaurants</Link>
        <Link href="/offers">Offers</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      <button className="bg-red-500 text-white px-5 py-2 rounded-xl">
        Sign In
      </button>
    </nav>
  );
}
