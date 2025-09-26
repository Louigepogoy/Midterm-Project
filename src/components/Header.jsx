export default function Header({ cartCount, onOpenCart }) {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
          🛍️ LSR Shop
        </h1>

        
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-l-lg text-gray-800 outline-none"
          />
          <button className="bg-yellow-400 text-black font-semibold px-4 rounded-r-lg hover:bg-yellow-300 transition">
            Search
          </button>
        </div>

        {/* Cart Button */}
        <button
          onClick={onOpenCart}
          className="relative flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 transition"
        >
          <span>Cart</span>
          {/* Badge */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
}
