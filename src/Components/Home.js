import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
        <section id="hero" class="hero section">
            <div class="container">
              <div class="row gy-4">
                <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1 data-aos="fade-up">We offer modern tools for saving your important time</h1>
                  
                  <div class="d-flex flex-column flex-md-row mt-4" data-aos="fade-up" data-aos-delay="200">
                    <a href="#tools" class="btn-get-started">Get Started <i class="bi bi-arrow-right"></i></a>
                    
                  </div>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                  <img src="./hero-img.png" class="img-fluid animated" alt="" />
                </div>
              </div>
            </div>
        </section>
        <section class="bg-light py-3 py-md-5 py-xl-8" id='tools'>
          <div class="container overflow-hidden">
            <div class="row gy-4 gy-md-5 gy-lg-0 justify-content-center">
              <div class="col-12 col-lg-12">
                <div class="row">
                  <div class="col-12 col-xl-11">
                    <h2 class="display-5 mb-3 mb-xl-4 text-uppercase">Tools</h2>
                    
                  </div>
                </div>
              </div>
              <div class="col-lg-12 overflow-hidden">
                <div class="row gy-4 justify-content-center">
                <div class="col-md-4">
                    <div class="card border-0 border-bottom border-dark shadow-sm">
                      <div class="card-body text-center p-4 p-xxl-5">
                        <img src='./images-compression.png' className='tool-icon' />
                        <h4 class="mb-4">Images Compressor</h4>
                        <p class="mb-4 text-secondary">Are you struggling with large image files taking up too much space? Do you need to send or upload images quickly without sacrificing quality? Look no further! With Images Compressor, you can easily compress and optimize your photos while maintaining the best possible resolution.</p>
                        <Link to="./imagescompressor" class="text-decoration-none link-warning">
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card border-0 border-bottom border-dark shadow-sm">
                      <div class="card-body text-center p-4 p-xxl-5">
                        <img src='./imgtowebp.png' className='tool-icon' />
                        <h4 class="mb-4">Jpg to Webp</h4>
                        <p class="mb-4 text-secondary">Looking to enhance your website's performance with faster loading times and optimized images? Convert your JPG files to WebP format effortlessly with our JPG to WebP Converter. WebP offers both lossless and lossy compression, ensuring that your images maintain their quality.</p>
                        <Link to="./jpgtowebp" class="text-decoration-none link-warning">
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card border-0 border-bottom border-dark shadow-sm">
                      <div class="card-body text-center p-4 p-xxl-5">
                        <img src='./text-convert.png' className='tool-icon' />
                        <h4 class="mb-4">Text Converter</h4>
                        <p class="mb-4 text-secondary">Need to quickly adjust the case of your text without manual effort? Whether you're dealing with large documents or just need a quick tweak, our Text Case Converter has got you covered! Easily transform your text into different cases with a single click.</p>
                        <Link to="./convert" class="text-decoration-none link-warning">
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card border-0 border-bottom border-dark shadow-sm">
                      <div class="card-body text-center p-4 p-xxl-5">
                        <img src='./JPG_to_PDF_icon.png' className='tool-icon' />
                        <h4 class="mb-4">Images to Pdf</h4>
                        <p class="mb-4 text-secondary">Need to convert your images into PDF documents quickly and easily? Our Image to PDF Converter is here to help! Whether you’re looking to create a professional portfolio, compile images for a presentation, or simply store your photos in a convenient format, this tool makes it simple.</p>
                        <Link to="./imgtopdf" class="text-decoration-none link-warning">
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card border-0 border-bottom border-dark shadow-sm">
                      <div class="card-body text-center p-4 p-xxl-5">
                      <img src='./Image-to-GIF.webp' className='tool-icon' />
                        <h4 class="mb-4">Images to Gif</h4>
                        <p class="mb-4 text-secondary">Want to bring your images to life? With our Images to GIF Converter, you can easily transform a series of images into a vibrant, animated GIF in just a few clicks. Perfect for social media posts, websites, or personal projects, this tool makes it simple to create eye-catching animations.</p>
                        <Link to="./imagetogif" class="text-decoration-none link-warning">
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>
      
    </>
  )
}

export default Home
