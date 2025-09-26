import ProductCard from "./ProductCard";
import "./ProductGrid.css"; // custom styling

export default function ProductGrid({ products, onProductClick }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onProductClick={onProductClick}
          onAddToCart={() => {}} // if you want cart here
        />
      ))}
    </div>
  );
}
