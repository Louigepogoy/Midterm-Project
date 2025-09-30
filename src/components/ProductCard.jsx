export default function ProductCard({ product, onProductClick, onAddToCart, onBuyNow }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        onClick={() => onProductClick(product)}
      />
      <h3>{product.name}</h3>
      <p>₱{product.price}.00</p>

      {/* ✅ Single Buy Now Button */}
      <button 
        className="buy-now-btn" 
        onClick={() => onBuyNow(product)}  // Make sure it passes the product!
        style={{ background: "#ff6600", color: "#fff", marginTop: "5px" }}
      >
        Buy Now
      </button>

      <button onClick={() => onProductClick(product)}>View</button>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
