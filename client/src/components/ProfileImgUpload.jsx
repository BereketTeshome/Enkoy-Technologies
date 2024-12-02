import React, { useState } from "react";
import axios from "axios";

const ProfileImgUpload = ({ setProfileImg }) => {
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
        "http://localhost:3000/upload/image",

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProfileImg(response.data.fileUrl);
      setFileUrl(response.data.fileUrl); // Extract and save the file URL
      setUploadStatus("Image uploaded successfully!");
    } catch (error) {
      console.error(error);
      setUploadStatus("Failed to upload image.");
    }
  };

  return (
    <div className="p-2 pt-3 border rounded-md shadow-md bg-gray-50">
      {/* Styled file input */}
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <label
            htmlFor="image-file-input" // Unique ID for the file input
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition text-sm"
          >
            Choose
          </label>
          <input
            id="image-file-input" // Unique ID
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden" // Hide default input
          />
          <span className="text-gray-600 text-sm truncate w-48">
            {selectedFile ? selectedFile.name : "No file chosen"}
          </span>
        </div>

        {/* Upload button */}
        <button
          onClick={handleUpload}
          type="button"
          className="px-5 py-2 text-white bg-[#ffa216] rounded hover:bg-[#ff8c00] transition text-sm"
        >
          Upload
        </button>
      </div>

      {/* Upload status message */}
      <p
        className={`my-2 text-sm ${
          uploadStatus.includes("successfully")
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {uploadStatus}
      </p>

      {/* Display uploaded image preview */}
      {fileUrl && (
        <div className="mt-4">
          <p className="text-gray-600 text-sm">Uploaded Image:</p>
          <img
            src={fileUrl}
            alt="Uploaded preview"
            className="mt-2 w-20 h-20 object-cover border shadow-sm rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default ProfileImgUpload;
