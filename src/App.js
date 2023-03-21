import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header'
import Footer from './component/Footer'
import Page404 from './component/Page404'
import Home from './component/Home'
import About from './component/About'
import Service from './component/Service'
import HouseCleaning from './component/service/House-Cleaning'
import Carpet from './component/service/Carpet'
import Showdata from './component/Showdata';

function App() {
  return (
    <>
     <BrowserRouter>
      <Header />
      
      <Routes>
         <Route path="*" element={<Page404 />} />
      {/*<Route path="*" element={<Navigate to="/" />} />*/}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="house-cleaning" element={<HouseCleaning />}></Route>
        <Route path="carpet" element={<Carpet />}></Route>
        <Route path="showdata" element={<Showdata />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
