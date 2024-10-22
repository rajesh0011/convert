import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import imageCompression from 'browser-image-compression';
import BrandName from './BrandName';

const JpgToWebp = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [convertedImages, setConvertedImages] = useState([]);

  // Function to handle file drop
  const onDrop = (acceptedFiles) => {
    const images = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setSelectedImages(images);
  };

  // Dropzone setup
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/jpeg, image/jpg, image/png',
    onDrop,
    multiple: true,
  });

  // Convert each image to WebP
  const convertToWebP = () => {
    selectedImages.forEach((image) => {
      const img = new Image();
      img.src = image.preview;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        // Convert to WebP
        const webpImage = canvas.toDataURL('image/webp');
        setConvertedImages((prev) => [...prev, { name: image.name, src: webpImage }]);
      };
    });
  };

  // Download the converted WebP image
  const downloadImage = (image) => {
    const link = document.createElement('a');
    link.href = image.src;
    link.download = image.name.replace(/\.[^/.]+$/, '') + '.webp'; // Replace original extension with .webp
    link.click();
  };

  return (
    <div>
      <div className='container py-5'>
        <div className='text-center'>
          <h1 className='d-inline-flex'>
            WebP converter by <BrandName name={"convert"} />
          </h1>
          <h3>
            A free online tool to convert <span>JPG and PNG</span> files to WebP and{' '}
            <span>WebP images - to JPG</span>
          </h3>
        </div>
            <div className='selectbox'>
              <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`} style={{ border: '2px dashed gray', padding: '20px', textAlign: 'center' }}>
                <input {...getInputProps()} />
                {isDragActive ? <p>Drop the files here...</p> : <p>Drag and drop files here, or click to select images</p>}
                
              </div>
              <div className=''>
                <p>Accepts .jpeg, .jpg, .png, .gif, .bmp and jfif files</p>
                <p>Up to 10 images, max 3 MB each</p>
              </div>

              <div className='selected-images1 mt-4'>
                {selectedImages.length > 0 && (
                  <>
                    <h3>Selected Images:</h3>
                    <div className='images-box mt-3'>
                      <div className='row justify-content-center'>
                      {selectedImages.map((image, index) => (
                        <div key={index} style={{ marginBottom: '20px' }} className='col-md-3'>
                          <img src={image.preview} alt={`Selected ${index}`} />
                          <span>{image.name}</span>
                        </div>
                      ))}
                      </div>
                    </div>
                    <button onClick={convertToWebP} className='btn btn-warning mt-3'>
                      Convert to WebP
                    </button>
                  </>
                )}
              </div>

              </div>

        {convertedImages.length > 0 && (
          <div className='compressed-images mt-4'>
            <h3>Converted WebP Images:</h3>
            <ul>
                {convertedImages.map((image, index) => (
                  <li key={index}>
                    {/* <img src={image.src} alt={`WebP ${index}`} style={{ maxWidth: '200px', maxHeight: '200px' }} /> */}
                    {/* <span>{image.name}</span> */}
                    <span>{image.name.replace(/\.[^/.]+$/, '')}.webp</span>
                    <br />
                    <button onClick={() => downloadImage(image)} className='btn btn-warning'>
                      Download 
                      {/* {image.name.replace(/\.[^/.]+$/, '')}.webp */}
                    </button>
                  </li>
                ))}
              </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default JpgToWebp;