export default function Header({ cartCount, onOpenCart, onSearch }) {
  return (
    <header className="w-full bg-black text-white p-6 text-center custom-header">

      {/* ✅ Centered Logo Only */}
      <div className="flex justify-center mb-4">
        <img src="public/logo.png" alt="LJR Shop Logo" className="h-16 w-auto" />
      </div>

      {/* 🔍 Search & Cart Row */}
      <div className="flex justify-center items-center gap-6 header-row">

        {/* Search Bar */}
        <div className="flex bg-white rounded overflow-hidden shadow-md w-64 search-bar">
          <input
            type="text"
            placeholder="Search products..."
            className="px-3 py-2 text-black outline-none w-full"
            onChange={(e) => onSearch(e.target.value)}
          />
          <button className="bg-gray-300 hover:bg-gray-400 px-4 transition">Search</button>
        </div>

        {/* Cart Button */}
        <button
          onClick={onOpenCart}
          className="relative bg-white text-black px-4 py-2 rounded shadow-md hover:bg-gray-200 transition cart-btn"
        >
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

      </div>
    </header>
  );
}
