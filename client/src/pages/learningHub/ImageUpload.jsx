import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Check if a file is selected and ensure it's an image
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setUploadStatus("");
    } else {
      setSelectedFile(null);
      setUploadStatus("Please select a valid image file!");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a valid image file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setFileUrl(response.data.fileUrl); // Extract and save the file URL
      setUploadStatus("Image uploaded successfully!");
    } catch (error) {
      console.error(error);
      setUploadStatus("Failed to upload image.");
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*" // Accept only image files
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload</button>
      <p>{uploadStatus}</p>
      {fileUrl && (
        <p>
          Image URL:{" "}
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            {fileUrl}
          </a>
        </p>
      )}
    </div>
  );
};

export default ImageUpload;
