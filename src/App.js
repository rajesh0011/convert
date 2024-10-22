import './App.css';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import JpgToWebp from './Components/JpgToWebp.js';
import Convert from './Components/Convert.js';
import ImgToPdf from './Components/ImgToPdf.js';
import ImageToGif from './Components/ImageToGif.js';
import ImagesCompressor from './Components/ImagesCompressor.js';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
// import Contact from './Components/Contact.js';

function App() {
  return (
    <>
    <div className="App">
      
          <Router>
          <Header></Header>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/jpgtowebp' element={<JpgToWebp />} />
                  <Route path='/convert-text' element={<Convert />} />
                  <Route path='/imgtopdf' element={<ImgToPdf />} />
                  <Route path='/imagetogif' element={<ImageToGif />} />
                  <Route path='/imagescompressor' element={<ImagesCompressor />} />
                  {/* <Route path='/contact' element={<Contact />} /> */}
              </Routes>
              <Footer></Footer>
          </Router>
      
      
      
    </div>
    </>
    
  );
}

export default App;
