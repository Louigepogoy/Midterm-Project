import "./ProductCard.css";
export default function ProductCard({ product, onProductClick, onAddToCart }) {
  return (
    <div className="product-card">
      {/* Show the product image */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image"
      />

      <h3>{product.name}</h3>
      <p className="price">₱{product.price}.00</p>
      <p className="category">{product.category}</p>

      <div className="buttons">
        <button className="view-btn" onClick={() => onProductClick(product)}>
          View
        </button>
        <button className="add-btn" onClick={() => onAddToCart(product)}>
          Add
        </button>
        <button className="buy-btn" onClick={() => BuyToCart(product)}>
          buy
        </button>
      </div>
    </div>
  );
}
