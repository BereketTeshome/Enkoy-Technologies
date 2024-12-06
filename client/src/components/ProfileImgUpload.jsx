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
				"https://server.enkoytechnologies.com/upload/image",


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
			<div className="flex flex-wrap items-center justify-between gap-4">
				<div className="flex flex-wrap items-center w-full gap-4 md:w-auto">
					<label
						htmlFor="image-file-input"
						className="px-4 py-2 text-sm text-white transition bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
					>
						Choose
					</label>
					<input
						id="image-file-input"
						type="file"
						accept="image/*"
						onChange={handleFileChange}
						className="hidden"
					/>
					<span className="w-full text-sm text-gray-600 truncate md:w-48">
						{selectedFile ? selectedFile.name : "No file chosen"}
					</span>
				</div>

				{/* Upload button */}
				<button
					onClick={handleUpload}
					type="button"
					className="px-5 py-2 text-white bg-[#ffa216] rounded hover:bg-[#ff8c00] transition text-sm w-full md:w-auto"
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
					<p className="text-sm text-gray-600">Uploaded Image:</p>
					<img
						src={fileUrl}
						alt="Uploaded preview"
						className="object-cover w-20 h-20 mt-2 border rounded-full shadow-sm"
					/>
				</div>
			)}
		</div>
	);
};

export default ProfileImgUpload;
