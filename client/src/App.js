import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header.component';
import Footer from './components/Footer/Footer.component';
import Home from './Pages/Home/home.pages';
import { Route } from 'react-router';
import ProductPage from './Pages/ProductDetail/product.page';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/products/:id" exact component={ProductPage} />

      <Footer />
    </div>
  );
}

export default App;
