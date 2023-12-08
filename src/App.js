import './App.css';
import Blog from './components/Blog/Blog';
import Navbar from './components/Navbar';
import About from './components/about/About';
import Myfooter from './components/footer/Myfooter';
import Home from './components/home/Home';
import Newsletter from './components/newsletter/Newsletter';
import Product from './components/product/Product';
import Services from './components/services/Services';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Product/>
    <Blog/>
    <Newsletter/>
    <Myfooter/>
    </>
  );
}

export default App;
