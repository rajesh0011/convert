import React from 'react';
// var Logo = require('../images/logo-convert.png');
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';


function Footer() {
  return (
    <div>
      <footer className="bg-dark footer">
    <div className="footer-top py-8">
        <div className="container">
            <div className="row gy-5">
                
                        <div className="col-lg-4">
                            <div className='ab-footer'>
                                <img src='./logo-convert.webp' className='f-logo' />
                                <p className='ab-pro text-light mt-3 text-opacity-75'>
                                Convert was born as a way to help developers, designers and students do more with less, grow faster and convert better. 
                                It is our way of helping quality products reach audiences they deserve.
                                </p>
                            </div>
                            
                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-3">
                            <h5 className="text-white footer-title-01">Tools</h5>
                            <ul className="list-unstyled footer-link-01 m-0">
                                <li><Link className="text-white text-opacity-75" to="/imagescompressor">Images Compressor</Link></li>
                                <li><Link className="text-white text-opacity-75" to="./jpgtowebp">Jpg to Webp</Link></li>
                                <li><Link className="text-white text-opacity-75" to="/convert">Text Converter</Link></li>
                                <li><Link className="text-white text-opacity-75" to="/imgtopdf">Img to Pdf</Link></li>
                                <li><Link className="text-white text-opacity-75" to="/imagetogif">Images to Gif</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="text-white footer-title-01">Get in touch</h5>
                            <ul className="list-unstyled footer-link-01 m-0">
                                <li><a className="text-white text-opacity-75" href="tel:7900099842">Call : 7900099842</a></li>
                                <li><a className="text-white text-opacity-75" href="https://wa.me/917900099842?text=Hi, I want to know more about this tool!">Chat on Whatsapp</a></li>
                                <li><a className="text-white text-opacity-75">Gurgaon, Haryana, India</a></li>
                          
                            </ul>
                        </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom small py-3 border-top border-white border-opacity-10">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center py-1">
                    <p className="m-0 text-white text-opacity-75">© 2024 Converter | All Rigts Reserved, Developed and Designed by <a className="text-reset" href="#">Rajesh Rathor</a>.</p>
                </div>
                
            </div>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer
