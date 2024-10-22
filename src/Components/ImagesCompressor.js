import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import imageCompression from 'browser-image-compression';
import BrandName from './BrandName';


const ImagesCompressor = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
  const [compressedImages, setCompressedImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFiles((prevFiles) => [
      ...prevFiles,
      ...acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })),
    ]);
  }, []);

  const handleCompress = async () => {
    const options = {
      maxSizeMB: 2, // Maximum file size in MB
      maxWidthOrHeight: 1920, // Maximum width or height
      useWebWorker: true, // Use a web worker for better performance
    };

    const compressedFiles = await Promise.all(
      selectedFiles.map(async (file) => {
        try {
          return await imageCompression(file, options);
        } catch (error) {
          console.error('Error compressing image:', error);
          return null;
        }
      })
    );

    setCompressedImages(compressedFiles.filter(Boolean));
  };

  const handleDownload = (compressedFile) => {
    const url = URL.createObjectURL(compressedFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = `compressed_${compressedFile.name}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });


  return (
     <div>

            <div className="container py-5">
                <div className="text-center">
                        <h1 className="d-inline-flex">images compressor by <BrandName name={"convert"} /></h1>
                        <h4>A free online tool to <span className='text-warning'>compress jpeg, jpg, png, gif, bmp and webp</span> images</h4>
                </div>
                <div className="selectbox">
                    <div className="">
                        <div {...getRootProps()} className='dropzone'>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop your images here, or click to select images</p>
                        </div>
                        <div className=''>
                            <p className='mt-4'>select .jpeg, .jpg, .png, .gif, .bmp and .webp file(s) here</p>
                            <p>Up to 100 images, max 100 MB each</p>
                        </div>
                        <div className='selected-images1'>
                            {selectedFiles.length > 0 && (
                                <div>
                                <h3>Selected Images:</h3>
                                <div className='row justify-content-center'>
                                    {selectedFiles.map((file) => (
                                    <div className='col-md-3' key={file.name}>
                                        <div className='selected-img-box'>
                                            <img src={file.preview} alt={file.name} />
                                            <span>{file.name}</span>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                                <button onClick={handleCompress} className='btn btn-warning mt-4'>
                                    Compress
                                </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className='compressed-images mt-4'>
                    {compressedImages.length > 0 && (
                        <div>
                            <h2>Compressed Images:</h2>
                            <ul>
                                {compressedImages.map((compressedFile, index) => (
                                <li key={index}>
                                   <span> {compressedFile.name}</span>
                                    <button onClick={() => handleDownload(compressedFile)} className='btn btn-warning'>
                                    Download
                                    </button>
                                </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    </div>

            </div>
        
      
    </div>
  );
};


  

export default ImagesCompressor
