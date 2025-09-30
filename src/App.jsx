import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchAndFilters from "./components/SearchAndFilters";
import ProductGrid from "./components/ProductGrid";
import ProductModal from "./components/ProductModal";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";
import "./App.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    priceMin: "",
    priceMax: "",
    sort: "",
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // ✅ FULL FILTER FEATURE APPLIED HERE
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(filters.search.toLowerCase())
    )
    .filter((product) =>
      filters.category ? product.category === filters.category : true
    )
    .filter((product) =>
      filters.priceMin ? product.price >= parseFloat(filters.priceMin) : true
    )
    .filter((product) =>
      filters.priceMax ? product.price <= parseFloat(filters.priceMax) : true
    )
    .sort((a, b) => {
      if (filters.sort === "price-asc") return a.price - b.price;
      if (filters.sort === "price-desc") return b.price - a.price;
      return 0;
    });

  // ✅ PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert("✅ Added to cart!");
  };

  const handleBuyNow = (product) => {
    alert(`✅ Successful purchase of ${product.name}!`);
  };

  const handleOpenCart = () => setCartOpen(true);
  const handleCloseCart = () => setCartOpen(false);

  useEffect(() => {
    const sampleProducts = [
      { id: 1, 
        name: "Nike Shoes", 
        price: 2000, 
        category: "Shoes", 
        image: "h.webp"
       },
      { id: 2, name: "Adidas T-shirt", price: 500, category: "Clothing", image: "ss.jpg" },
      { id: 3, name: "Puma Hat", price: 300, category: "Accessories", image: "No-1-Baseball-Cap-by-PUMA.39302_1rf192.jpg" },
      { id: 4, name: "Levi's Jeans", price: 400, category: "Clothing", image: "1.jpg" },
      { id: 5, name: "Ray-Ban Sunglasses", price: 200, category: "Accessories", image: "2.webp" },
      { id: 6, name: "Converse Sneakers shoes", price: 850, category: "Shoes", image: "3.webp" },
      { id: 7, name: "New Balance shoes", price: 1500, category: "Shoes", image: "4.webp" },
      { id: 8, name: "Under Armor shoes", price: 1600, category: "Shoes", image: "5.jpg" },
      { id: 9, name: "One Piece tshirt", price: 600, category: "Clothing", image: "public/one piece 2.webp" },
      { id: 10, name: "One piece tshirt", price: 450, category: "Clothing", image: "public/one piece 1.webp" },
      { id: 11, name: "Jeans Men", price: 550, category: "Clothing", image: "public/jeans 1.jpg" },
      { id: 12, name: "Blue Denim Jeans", price: 450, category: "Clothing", image: "public/blue-denim-jeans-dg-jeans-58954859-2_2.webp" },
      { id: 13, name: "Jeans Gr140", price: 400, category: "Clothing", image: "public/jeans-gr140.jpg" },
      { id: 14, name: "Public Jeans", price: 600, category: "Clothing", image: "public/R.jpg" },
      { id: 15, name: "Sunglasses Summer", price: 450, category: "Clothing", image: "public/sunglasses summmer.webp" },
 { id: 16, name: "nd filter sunglasses", price: 400, category: "Clothing", image: "public/nd filter sunglasses.webp" }
    ];

    setProducts(sampleProducts);
    setCategories(["Shoes", "Clothing", "Accessories"]);
  }, []);

  return (
    <div>
      <Header
        cartCount={cart.length}
        onOpenCart={handleOpenCart}
        onSearch={(text) => setFilters((prev) => ({ ...prev, search: text }))}
      />

      <SearchAndFilters filters={filters} setFilters={setFilters} categories={categories} />

      <ProductGrid
        products={currentProducts}  // ✅ Show paginated products
        onProductClick={setSelectedProduct}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      <CartDrawer
  open={cartOpen}
  onClose={() => setCartOpen(false)}
  cartItems={cart}
  onRemove={(id) => setCart(prev => prev.filter(item => item.id !== id))}
  onCheckout={() => {
    setCartOpen(false);
    setCheckoutOpen(true);
  }}
/>

<CheckoutModal
  open={checkoutOpen}
  onClose={() => setCheckoutOpen(false)}
  cartItems={cart.map(item => ({
      ...item,
      title: item.name,          // ✅ Rename for consistency
      qty: item.qty || 1         // ✅ Default qty = 1 if not present
  }))}
  onConfirm={() => {
    alert("🎉 Order placed successfully!");
    setCart([]);
    setCheckoutOpen(false);
  }}
/>


    </div>
  );
}
