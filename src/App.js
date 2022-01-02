import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import MenuBar from './Components/MenuBar';
import Footer from './Components/Footer';
import MainCategoryPage from './Pages/MainCategoryPage';
import MainPage from './Pages/MainPage';
import SubCategoryPage from './Pages/SubCategoryPage';


function App() {
  return (
    <BrowserRouter>

    <MenuBar/>


      <Routes>

        <Route path="/" element={<MainPage />}>
        </Route>

        <Route path="/:mainCategory" element={<MainCategoryPage />}>
        </Route>

        <Route path="/:mainCategory/:subCategory" element={<SubCategoryPage />}>
        </Route>

      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;
