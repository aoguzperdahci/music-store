import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import MenuBar from './Components/MenuBar';
import Footer from './Components/Footer';
import MainCategoryPage from './Pages/MainCategoryPage';
import MainPage from './Pages/MainPage';
import SubCategoryPage from './Pages/SubCategoryPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import BCarousel from './Components/BCarousel';


function App() {
  return (
    <BrowserRouter>

    <MenuBar/>

      <Routes>

        <Route path="/" element={<MainPage />}/>

        <Route path="/:mainCategory" element={<MainCategoryPage />}/>

        <Route path="/:mainCategory/:subCategory" element={<SubCategoryPage />}/>

        <Route path="/products/:id" element={<ProductDetailPage />}/>

      </Routes>

      <BCarousel/>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
