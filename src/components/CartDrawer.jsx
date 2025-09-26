
const currency = (n) => `₱${n.toFixed(2)}`;

export default function CartDrawer({ open, onClose, cartItems, onRemove, onCheckout }) {
  if (!open) return null;

  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-end z-50"
      onClick={onClose} // Close when clicking background
    >
      <div
        className="bg-white w-96 h-full p-6 shadow-lg flex flex-col transform transition-transform duration-300 translate-x-0"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-xl font-bold">🛒 Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto space-y-4">
          {cartItems.length === 0 && (
            <p className="text-gray-500 text-center mt-10">Your cart is empty 🛍️</p>
          )}

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-2 hover:bg-gray-50 p-2 rounded"
            >
              {/* Image + Info */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">
                    {item.qty} × {currency(item.price)}
                  </p>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => onRemove(item.id)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 border-t pt-3">
          <p className="font-bold text-lg flex justify-between">
            <span>Total:</span> <span>{currency(total)}</span>
          </p>
          <button
            onClick={onCheckout}
            className="w-full mt-3 p-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg font-semibold shadow hover:scale-105 transition"
          >
            ✅ Checkout
          </button>
          <button
            onClick={onClose}
            className="w-full mt-2 p-2 border rounded-lg hover:bg-gray-100 transition"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  );
}
