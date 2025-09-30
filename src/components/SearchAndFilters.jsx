import { useEffect, useState } from "react";

export default function SearchAndFilters({ categories, filters, setFilters }) {
  const [localFilters, setLocalFilters] = useState(filters);

  const applyFilters = () => {
    setFilters(localFilters);
  };

  return (
    // ✅ Fully centered container
   <div className="w-full min-h-screen flex justify-center items-center bg-gray-700">
  <aside className="w-full md:w-72 p-5 bg-gradient-to-b from-purple-50 to-white rounded-xl shadow-md border">


        
        {/* ✅ Centered Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
  <span className="text-purple-600 text-lg">⚙️</span>
  <h2 className="text-lg font-semibold text-gray-800 text-center">Filters</h2>
</div>


        {/* ✅ Live Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, search: e.target.value }))
            }
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            📂 Category
          </label>
          <select
            value={localFilters.category}
            onChange={(e) =>
              setLocalFilters((f) => ({ ...f, category: e.target.value }))
            }
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
          >
            <option value="">All</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            💰 Price Range
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              value={localFilters.priceMin || ""}
              onChange={(e) =>
                setLocalFilters((f) => ({ ...f, priceMin: e.target.value }))
              }
              className="w-1/2 border rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            <input
              type="number"
              placeholder="Max"
              value={localFilters.priceMax || ""}
              onChange={(e) =>
                setLocalFilters((f) => ({ ...f, priceMax: e.target.value }))
              }
              className="w-1/2 border rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
            />
          </div>
        </div>

        {/* Sort */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ↕️ Sort By
          </label>
          <select
            value={localFilters.sort}
            onChange={(e) =>
              setLocalFilters((f) => ({ ...f, sort: e.target.value }))
            }
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
          >
            <option value="">Default</option>
            <option value="price-asc">⬇️ Price: Low → High</option>
            <option value="price-desc">⬆️ Price: High → Low</option>
            <option value="rating">⭐ Rating</option>
          </select>
        </div>

        {/* Apply Button */}
        <button
          onClick={applyFilters}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-200"
        >
          ✅ Apply Filters
        </button>
      </aside>
    </div>
  );
}
