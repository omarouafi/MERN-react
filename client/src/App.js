import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header.component';
import Footer from './components/Footer/Footer.component';
import Home from './Pages/Home/home.pages';
import { Route } from 'react-router';
import ProductPage from './Pages/ProductDetail/product.page';
import Cart from './Pages/Cart/cart.page';
import Login from "./Pages/Login/login.component";
import Register from './Pages/Register/register.page';
import Profile from './Pages/Profile/profile.page';
import Shipping from './Pages/Shipping/shipping.page';
import Payment from './Pages/Payment/payment.page';
import PlaceOrder from './Pages/PlaceOrder/order.page';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/cart/:id?" exact component={Cart} />
      <Route path="/register" exact component={Register} />
      <Route path="/payment" exact component={Payment} />
      <Route path="/placeorder" exact component={PlaceOrder} />
      <Route path="/shipping" exact component={Shipping} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/login" exact component={Login} />
      <Route path="/products/:id" exact component={ProductPage} />
      <Route path="/" exact component={Home} />

      <Footer />
    </div>
  );
}

export default App;
