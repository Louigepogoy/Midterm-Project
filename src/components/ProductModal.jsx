



export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="modal-image"
        />

        {/* Product Info */}
        <div className="modal-details">
          <h2>{product.name}</h2>
          <p className="category">{product.category}</p>
          <p className="price">₱{product.price}.00</p>
          <p className="description">
            This is a premium {product.category.toLowerCase()} from{" "}
            {product.name.split(" ")[0]} brand. Perfect for your style and comfort.
          </p>

          {/* Action Buttons */}
          <div className="modal-buttons">
            <button className="add-btn" onClick={() => onAddToCart(product)}>
              Add to Cart 🛒
            </button>
            <button className="close-btn2" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
