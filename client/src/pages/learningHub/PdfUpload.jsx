import React, { useState } from "react";
import axios from "axios";

const PdfUpload = ({ setPdfUrl }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [pdf, setPdf] = useState("");
  const [uploadLoading, setUploadLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Validate if the file is a PDF
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setUploadStatus("");
    } else {
      setSelectedFile(null);
      setUploadStatus("Please select a valid PDF file!");
    }
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a valid PDF file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setUploadLoading(true);
      const response = await axios.post(
        "https://server.enkoytechnologies.com/upload/pdf",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadLoading(false);
      // Save the uploaded file's URL
      const uploadedFileUrl = response.data.fileUrl;
      setPdf(uploadedFileUrl);
      if (setPdfUrl) setPdfUrl(uploadedFileUrl); // Check if setPdfUrl is defined
      setUploadStatus("PDF uploaded successfully!");
    } catch (error) {
      console.error(error);
      setUploadStatus("Failed to upload PDF.");
    }
  };

  return (
    <div className="p-6 space-y-4 border rounded-md shadow-md bg-gray-50">
      <div className="flex items-center gap-4 justify-between">
        {/* File input */}
        <div className="flex items-center gap-4">
          <label
            htmlFor="pdf-file-input"
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Choose File
          </label>
          <input
            id="pdf-file-input"
            type="file"
            accept=".pdf" // Restrict file selection to PDF
            onChange={handleFileChange}
            className="hidden"
          />
          <span className="text-gray-600 text-sm truncate w-48">
            {selectedFile ? selectedFile.name : "No file chosen"}
          </span>
        </div>

        {/* Upload button */}
        <button
          onClick={!uploadLoading && handleUpload}
          type="button"
          className="px-5 py-2 text-white bg-[#ffa216] rounded hover:bg-[#ff8c00] transition"
        >
          {uploadLoading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {/* Upload status */}
      <p
        className={`my-2 text-sm ${
          uploadStatus.includes("successfully")
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {uploadStatus}
      </p>
      {/* Uploaded file link */}
      {pdf && (
        <div className="mt-4">
          <p className="text-gray-600 text-sm">Uploaded PDF:</p>
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default PdfUpload;
