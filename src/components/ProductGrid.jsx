import ProductCard from "./ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({ products, onProductClick, onAddToCart, onBuyNow, totalPages, currentPage, setCurrentPage }) {
  return (
    <>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
            onClick={() => onProductClick(product)}
            onAddToCart={() => onAddToCart(product)}
            onBuyNow={() => onBuyNow(product)}   // ✅ Added
          />
        ))}
      </div>

      <div className="flex justify-center gap-2 my-6">
  {Array.from({ length: totalPages }, (_, i) => (
    <button
      key={i}
      onClick={() => setCurrentPage(i + 1)}
      className={`px-4 py-2 rounded-lg ${
        currentPage === i + 1 ? "bg-purple-600 text-white" : "bg-gray-200"
      }`}
    >
      {i + 1}
    </button>
  ))}
</div>

    </>
  );
}
