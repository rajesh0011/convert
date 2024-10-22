import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';
import BrandName from './BrandName';

const ImgToPdf = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to array
    const largeFiles = files.filter(file => file.size > MAX_FILE_SIZE);

    if (largeFiles.length > 0) {
      setErrorMessage(`Some files are too large. Max file size is ${MAX_FILE_SIZE / (1024 * 1024)} MB.`);
    } else {
      setSelectedFiles(files);
      setErrorMessage('');
    }
  };

  const [file, setFile] = useState(null);
// Function to handle file input
const handleFiles = (event) => {
    const uploadedFile = event.target.files[0]; // Get the first file from the input
    setFile(uploadedFile); // Set the file in the state
  };

   // Handle drag-and-drop file upload
   const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files); // Get files from the drag event
    handleFiles(files);
  };

  // Convert image(s) to PDF
  const handleConvert = async () => {
    if (selectedFiles.length === 0) {
      setErrorMessage('Please select image(s) to convert.');
      return;
    }

    const pdf = new jsPDF('p', 'mm', 'a4');

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];

      // Create a FileReader to read the image
      const reader = new FileReader();
      reader.onload = function (e) {
        const imgData = e.target.result;

        const img = new Image();
        img.src = imgData;

        img.onload = () => {
          const imgWidth = pdf.internal.pageSize.getWidth();
          const imgHeight = (img.height * imgWidth) / img.width;

          // Add the image to the PDF
          if (i > 0) pdf.addPage(); // Add new page for each image
          pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
          if (i === selectedFiles.length - 1) {
            pdf.save('converted.pdf');
          }
        };
      };

      reader.readAsDataURL(file); // Read image as Data URL
    }
  };

  // Prevent default behavior when dragging files over the drop area
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="container py-5">
        <div className="text-center">
          <h1 className="d-inline-flex">img converter by <BrandName name={"convert"} /></h1>
          <h4>A free online tool to convert <span>jpeg, jpg, png, gif, bmp and webp</span> files to pdf and <span className="text-warning">image to pdf</span></h4>
        </div>

        <div className="selectbox">
          <div className="inputselect">
            <input
              type="file"
              accept="image/jpeg, image/jpg, image/png, image/gif, image/bmp, image/webp"
              multiple
              onChange={handleFileChange}
            />
          </div>
          <p>select .jpeg, .jpg, .png, .gif, .bmp and .webp file(s) here</p>
          <p>Up to 10 images, max 10 MB each</p>
        </div>

        <button onClick={handleConvert} className='btn btn-warning mt-3'>Convert to PDF</button>

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default ImgToPdf;