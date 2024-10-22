import React, { useState } from 'react';
import gifshot from 'gifshot';
import { useDropzone } from 'react-dropzone';
import BrandName from './BrandName';

const ImageToGif = () => {
    const [images, setImages] = useState([]);
    const [gifUrl, setGifUrl] = useState(null);
  
    const onDrop = (acceptedFiles) => {
      const fileArray = acceptedFiles.map(file => URL.createObjectURL(file));
      setImages(prevImages => prevImages.concat(fileArray));
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: 'image/*',
      multiple: true,
      maxFiles: 10, // Limit the number of files
      maxSize: 10485760, // Limit file size to 10 MB per file
    });

    const createGif = () => {
      gifshot.createGIF(
        {
          images: images,
          interval: 0.8, // Adjust interval between frames
          gifWidth: 500,
          gifHeight: 500,
        },
        (obj) => {
          if (!obj.error) {
            setGifUrl(obj.image);
          }
        }
      );
    };
  
    return (
        <div>
            <div className="container py-5">
                <div className="text-center">
                    <h1 className="d-inline-flex">img converter by <BrandName name={"convert"} /></h1>
                    <h4>A free online tool to convert <span>jpeg, jpg, png, gif, bmp and webp</span> files to Gif and <span className="text-warning">images to Gif</span></h4>
                </div>

                <div className="selectbox">
                    <div 
                        {...getRootProps({ className: 'dropzone' })}
                        className={`dropzone ${isDragActive ? 'active' : ''}`}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                            <p>Drop the files here...</p> :
                            <p>Drag 'n' drop your files here, or click to select files</p>
                        }
                    </div>
                    <div>
                    <p>select .jpeg, .jpg, .png, .gif, .bmp and .webp file(s) here</p>
                    <p>Up to 10 images, max 10 MB each</p>
                    </div>

                    {images.length > 0 && ( // Conditionally show "Selected Images" if there are images
                        <div className='selected-images'>
                            <h3 className='mt-4'>Selected Images</h3>
                            <div className='images-box'>
                                {images.map((image, index) => (
                                    <img key={index} src={image} alt={`frame-${index}`} width="100" />
                                ))}
                            </div>
                        </div>
                    )}

{images.length > 0 && ( // Conditionally show the "Create GIF" button if images are selected
                    <button onClick={createGif} className='btn btn-warning mt-3'>Create GIF</button>
                )}
                </div>
            
                

                {gifUrl && (
                    <div className='mt-4'>
                        <h3>Generated GIF</h3>
                        <img src={gifUrl} alt="Generated GIF" className='generated-gif' />
                        <div className='download-gif'>
                            <a href={gifUrl} download="generated.gif">
                                <button className='btn btn-warning mt-4'>Download GIF</button>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageToGif;