
import React, { useState } from "react";
import BrandName from "./BrandName";

const Convert = () => {

    const [content, setContent] = useState("");

  // Function to convert the content to uppercase
  const handleUppercase = () => {
    setContent(content.toUpperCase());
  };

  // Function to convert the content to Lowercase
  const handleLowercase = () => {
    setContent(content.toLowerCase());
  };

  // Function to convert the content to Capitalized format
  const handleCapitalize = () => {
    const capitalizedContent = toCapitalize(content);
    setContent(capitalizedContent);
  };
  const toCapitalize = (str) => {
    return str
      .toLowerCase()  // Ensure the entire string is lowercase first
      .split(' ')     // Split the string into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize first letter of each word
      .join(' ');     // Join the words back with spaces
  };

  // Function to copy the content
  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      alert("Content copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  // Function to paste the copied content
  const handlePaste = () => {
    navigator.clipboard.readText().then((clipboardContent) => {
      setContent(clipboardContent);  // Set the content of the textarea to the clipboard content
    }).catch(err => {
      console.error("Failed to read clipboard contents: ", err);
    });
  };

  // Function to clear the content
  const handleClear = () => {
    setContent("");  // Clear the content by setting it to an empty string
  };



  return (
    <>
    <div className="container my-5">
    <div className='text-center'>
            <h1 className='d-inline-flex'>Text converter by <BrandName name={"convert"} /> </h1>

            <h3>A free online tool to convert <span className="text-warning">text</span> in any case</h3>
        </div>

      <div className="row justify-content-center">
        <div className="col-md-10">
          {/* Textarea to enter content */}
          <div className="textareabox my-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter your text here" className="w-100 form-control" rows="8"
          ></textarea>
          </div>
          {/* Button to convert to uppercase */}
            </div>
      </div>

      <div className="convert-btns">
          <button onClick={handleUppercase} className="btn btn-warning">Convert to Uppercase</button>
          <button onClick={handleLowercase} className="btn btn-warning ms-2">Convert to Lowercase</button>
          <button onClick={handleCapitalize} className="btn btn-warning ms-2">Convert to Capitalize</button>
          <button onClick={handleCopy} className="btn btn-warning ms-2">Copy Content</button>
          <button onClick={handlePaste} className="btn btn-warning ms-2">Paste Content</button>
          <button onClick={handleClear} className="btn btn-warning ms-2">Clear Content</button>
      </div>

      {/* Div to display the content */}
      <div>
        {/* <h3>Uppercase Content:</h3>
        <div>{content}</div> */}
      </div>
    </div>
      
    </>
  )
}

export default Convert
