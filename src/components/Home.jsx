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

  useEffect(() => {
    const sampleProducts = [
      { id: 1, name: "Nike Shoes", price: 700, category: "Shoes", image: "h.webp" },
      { id: 2, name: "Adidas T-shirt", price: 500, category: "Clothing", image: "ss.jpg" },
      { id: 3, name: "Puma Hat", price: 300, category: "Accessories", image: "No-1-Baseball-Cap-by-PUMA.39302_1rf192.jpg" },
      { id: 4, name: "Levi's Jeans", price: 400, category: "Clothing", image: "1.jpg" },
      { id: 5, name: "Ray-Ban Sunglasses", price: 200, category: "Accessories", image: "2.webp" },
      { id: 6, name: "Converse Sneakers", price: 850, category: "Shoes", image: "3.webp" },
      { id: 7, name: "New Blance", price: 850, category: "Shoes", image: "4.webp" },
      { id: 8, name: "Under Armor", price: 850, category: "Shoes", image: "5.jpg" }
    ];

    setProducts(sampleProducts);
    setCategories(["Shoes", "Clothing", "Accessories"]);
  }, []);

  // ✅ Filtering logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      filters.search === "" ||
      product.name.toLowerCase().includes(filters.search.toLowerCase());

    const matchesCategory =
      filters.category === "" || product.category === filters.category;

    const matchesPriceMin =
      filters.priceMin === "" || product.price >= Number(filters.priceMin);

    const matchesPriceMax =
      filters.priceMax === "" || product.price <= Number(filters.priceMax);

    return matchesSearch && matchesCategory && matchesPriceMin && matchesPriceMax;
  });

  return (
    <div>
      <Header onCartClick={() => setCartOpen(true)} cartCount={cart.length} />
      <SearchAndFilters filters={filters} setFilters={setFilters} categories={categories} />

      <ProductGrid
        products={filteredProducts}
        onProductClick={setSelectedProduct}
        onAddToCart={(item) => setCart([...cart, item])}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(item) => setCart([...cart, item])}
        />
      )}

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      <CheckoutModal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} cart={cart} />
    </div>
  );
}
