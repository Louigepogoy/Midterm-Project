const currency = (n) => `₱${n.toFixed(2)}`;

export default function CheckoutModal({ open, onClose, cartItems, onConfirm }) {
  if (!open) return null;

  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose} // click overlay closes modal
    >
      <div
        className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-lg transform transition-all duration-300 scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-2xl font-bold">🛍️ Checkout</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center text-sm border-b pb-2"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 rounded object-cover"
                />
                <span>
                  {item.qty} × {item.title}
                </span>
              </div>
              <span className="font-medium">{currency(item.qty * item.price)}</span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-4 font-bold text-lg flex justify-between">
          <span>Total:</span>
          <span>{currency(total)}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-5">
          <button
            onClick={onConfirm}
            className="flex-1 p-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow hover:opacity-90 hover:scale-105 transition"
          >
            ✅ Confirm
          </button>
          <button
            onClick={onClose}
            className="flex-1 p-2 border rounded-lg hover:animate-pulse hover:bg-gray-100 transition"
          >
            ❌ Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
