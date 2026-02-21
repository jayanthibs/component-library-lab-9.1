import "./App.css";
import AlertBox from "./components/AlertBox/AlertBox";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: "./src/assets/headphones.webp",
    inStock: true,
  };

  const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl: "./src/assets/avatar.jpg",
  };

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  return (
    <>
      {/* Rendering AlertBox with success type component */}
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>
      {/* Rendering AlertBox with warning type component */}
      <AlertBox
        type="warning"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>
      {/* Rendering AlertBox with error type component */}
      <AlertBox
        type="error"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>

      {/* Rendering AlertBox with info type component */}
      <AlertBox
        type="info"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>

      {/* Rendering UserProfileCard component */}

      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}
      >
        {/* <div className="text-sm text-gray-500">Last login: 2 hours ago</div> */}
      </UserProfileCard>

      {/* Rendering Product Display component */}

      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
      >
        {/* <div className="text-sm text-gray-500">Free shipping available</div> */}
      </ProductDisplay>

      {/*  components composition */}

      <div className="p-4">
        {showAlert && (
          <AlertBox
            type="success"
            message="Product added to cart!"
            onClose={() => setShowAlert(false)}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <UserProfileCard user={user} showEmail={true} showRole={true} />

          <ProductDisplay
            product={product}
            showDescription={true}
            showStockStatus={true}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </>
  );
}

export default App;
