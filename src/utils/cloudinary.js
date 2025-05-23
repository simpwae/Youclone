import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    let response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // console.log("file has been uploaded on cloudinary", response);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temprary file as the upload operation git failed
    return null;
  }
};

export {uploadOnCloudinary};