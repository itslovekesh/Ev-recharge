import cloudinary from 'cloudinary';

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: 'dhplqrrpm',
  api_key: '753292232134431',
  api_secret: 'OmG8xiw-Wz-chaEgoim7DRWsNac',
});

// Test an upload
cloudinary.uploader.upload('./test.jpeg', { folder: 'test_folder' })
  .then(result => {
    console.log("Upload successful:", result);
  })
  .catch(error => {
    console.error("Error uploading:", error);
  });