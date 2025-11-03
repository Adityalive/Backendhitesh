import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
})

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null
        console.log("Uploading file:", localFilePath)
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    })

    // ✅ Safe delete after upload
    try {
      if (fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath)
      }
    } catch (deleteErr) {
      console.warn("Failed to delete file after upload:", deleteErr.message)
    }

    return response

  } catch (error) {
    // ✅ Safe delete on error
    try {
      if (fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath)
      }
    } catch (deleteErr) {
      console.warn("Failed to delete file after failed upload:", deleteErr.message)
    }

    console.error("Cloudinary upload failed:", error.message)
    return null
  }
}

export { uploadOnCloudinary }