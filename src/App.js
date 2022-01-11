import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import MenuBar from './Components/MenuBar';
import Footer from './Components/Footer';
import MainCategoryPage from './Pages/MainCategoryPage';
import MainPage from './Pages/MainPage';
import SubCategoryPage from './Pages/SubCategoryPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import LocationsPage from './Pages/LocationsPage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUsPage';


function App() {
  return (
    <BrowserRouter>

    <MenuBar/>

      <Routes>

        <Route path="/" element={<MainPage />}/>

        <Route path="/aboutus" element={<AboutUsPage />}/>

        <Route path="/contactus" element={<ContactUsPage />}/>

        <Route path="/:mainCategory" element={<MainCategoryPage />}/>

        <Route path="/:mainCategory/:subCategory" element={<SubCategoryPage />}/>

        <Route path="/products/:id" element={<ProductDetailPage />}/>

        <Route path="/locations" element={<LocationsPage />}/>

      </Routes>

      <Footer/> 

    </BrowserRouter>
  );
}

export default App;
