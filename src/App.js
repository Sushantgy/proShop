import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import HomeScreen from "./screens/HomeScreen";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import ProductScreen from "./screens/ProductScreen";
// import CartScreen from "./screens/CartScreen";
// import LoginScreen from "./screens/LoginScreen";
// import RegisterScreen from "./screens/RegisterScreen";
// import ProfileScreen from "./screens/ProfileScreen";
// import ShippingScreen from "./screens/ShippingScreen";
// import PaymentScreen from "./screens/PaymentScreen";
// import PlaceOrderScreen from "./screens/PlaceOrderScreen";
// import OrderScreen from "./screens/OrderScreen";


const Footer = React.lazy(() => import("./components/Footer"));
const HomeScreen = React.lazy(() => import("./screens/HomeScreen"));
const Header = React.lazy(() => import("./components/Header"));
const LoginScreen = React.lazy(() => import("./components/Header"));
const RegisterScreen = React.lazy(() => import("./screens/RegisterScreen"));
const ShippingScreen = React.lazy(() => import("./screens/ShippingScreen"));
const PaymentScreen = React.lazy(() => import("./screens/PaymentScreen"));
const PlaceOrderScreen = React.lazy(() => import("./screens/PlaceOrderScreen"));
const ProfileScreen = React.lazy(() => import("./screens/ProfileScreen"));
const OrderScreen = React.lazy(() => import("./screens/OrderScreen"));
const Loader = React.lazy(() => import("./components/Loader"));
const CartScreen = React.lazy(() => import("./screens/CartScreen"));
const ProductScreen = React.lazy(() => import("./screens/ProductScreen"));

function App() {
  return (
    <Router>
      <>
        <Header />
        <main className="py-3">
          <Container>
            <Suspense fallback={<Loader />}>
              <Route path="/login" component={LoginScreen} />
              <Route path="/payment" component={PaymentScreen} />
              <Route path="/order/:id" component={OrderScreen} />
              <Route path="/placeorder" component={PlaceOrderScreen} />
              <Route path="/shipping" component={ShippingScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/profile" component={ProfileScreen} />
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/" component={HomeScreen} exact />
            </Suspense>
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;

// <Route path="/login" component={LoginScreen} />
// <Route path="/payment" component={PaymentScreen} />
// <Route path="/order/:id" component={OrderScreen} />
// <Route path="/placeorder" component={PlaceOrderScreen} />
// <Route path="/shipping" component={ShippingScreen} />
// <Route path="/register" component={RegisterScreen} />
// <Route path="/profile" component={ProfileScreen} />
// <Route path="/product/:id" component={ProductScreen} />
// <Route path="/cart/:id?" component={CartScreen} />
// <Route path="/" component={HomeScreen} exact />