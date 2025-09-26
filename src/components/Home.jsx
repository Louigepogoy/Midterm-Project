import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchAndFilters from "./components/SearchAndFilters";
import ProductGrid from "./components/ProductGrid";
import ProductModal from "./components/ProductModal";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";

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
      {
        id: 1,
        name: "Nike Shoes",
        price: 120,
        category: "Shoes",
        image: "https://via.placeholder.com/150"
      },
      {
        id: 2,
        name: "Adidas T-shirt",
        price: 40,
        category: "Clothing",
        image: "https://via.placeholder.com/150"
      },
      {
        id: 3,
        name: "Puma Hat",
        price: 25,
        category: "Accessories",
        image: "https://via.placeholder.com/150"
      }
    ];

    setProducts(sampleProducts);
    setCategories(["Shoes", "Clothing", "Accessories"]);
  }, []);

  return (
    <div>
      <Header onCartClick={() => setCartOpen(true)} />
      <SearchAndFilters
        filters={filters}
        setFilters={setFilters}
        categories={categories}
      />
      <ProductGrid
        products={products}
        onProductClick={setSelectedProduct}
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

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cart={cart}
      />
    </div>
  );
}
