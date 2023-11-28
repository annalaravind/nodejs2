require("dotenv").config();

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// UPLOADING THE IMAGE //
// const allImages = [
//   "./Images/chrome.png",
//   "./Images/laughing.png",
//   "./Images/tiktok.png",
//   "./Images/facebook.png",
//   "./Images/instagram.png",
//   "./Images/whatsapp.png",
// ];
// const myFunction = () => {
//   for (let imgNames of allImages) {
//     let publicId = imgNames.split("/")[2].split(".")[0];
//     cloudinary.uploader
//       .upload(imgNames, {
//         public_id: publicId,
//         resource_type: "auto",
//       })
//       .then((result) => console.log(result))
//       .catch((error) => console.log(error));
//   }
// };
// myFunction();

// DELETING THE IMAGE //
// cloudinary.uploader.destroy("laughing").then((result) => console.log(result));

// DELETING THE MORE THAN ONE IMAGE //
// cloudinary.uploader.destroy(["whatsapp"]).then((result) => console.log(result));

// CHECKING THE INFO IN MY ACCOUNT //
// cloudinary.api
//   .resources()
//   .then((result) => {
//     let ok = result.resources;
//     ok.map((value) => {
//       console.log(value.display_name);
//     });
//   })
//   .catch((error) => console.log(error));

// DELETING ALL THE IMAGES AT ONCE //
// const myFunction = async () => {
//   let content = await cloudinary.api.resources();
//   try {
//     let names = await content.resources;
//     names.map((value) => {
//       try {
//         cloudinary.uploader
//           .destroy(value.display_name)
//           .then((result) => console.log(result))
//           .catch((error) => console.log(error));
//       } catch (error) {
//         console.log(error);
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// myFunction();

// ADDING TAGS //
// const myFunction = async () => {
//   let tagNames = ["ABC", "DEF", "GHI"];
//   let response = await cloudinary.api.update("laughing", { tags: tagNames });
//   console.log(response);
// };
// myFunction();

// CHECKING THE TAGS
// const myFunction = async () => {
//   let response = await cloudinary.api.resource("laughing");
//   console.log(response.tags);
// };
// myFunction();

// THERE IS A DIFFERENCE BETWEEN resource AND  resources IN CLOUDINARY //
// const myFunction = async () => {
//   let response = await cloudinary.api.resource("laughing"); // gets an error ( we need to pass the public_id )
//   console.log(response);
// };
// myFunction();
// const myFunction = async () => {
//   let response = await cloudinary.api.resources(); // get the details of every asset in an account
//   console.log(response);
// };
// myFunction();

// REMOVING THE TAGS //
// cloudinary.api
//   .update("laughing", { tags: [] })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// RESTORING THE ASSETS //
// cloudinary.api
//   .restore("laughing")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// TRANSFORMATION //
// const transformation = [
//   {
//     width: 200,
//     height: 200,
//     radius: "max",
//     gravity: "face",
//     crop: "thumb",
//   },
// ];

// cloudinary.api
//   .create_transformation("my_real_transformation", transformation)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// APPLING THE TRANSFORMATION FOR INSTAGRAM //
// console.log(
//   cloudinary.url("instagram", { transformation: ["my_real_transformation"] })
// );

// APPLTYING OVERLAY( WHATSAPP ON INSTAGRAM ) //
// const myFunction = async () => {
//   let response = await cloudinary.url("facebook.png", {
//     transformation: [
//       {
//         overlay: "whatsapp.png",
//         flags: "layer_apply",
//         gravity: "south_east",
//       },
//     ],
//   });
//   try {
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
// myFunction();

// UPLOAD_PRESET //////////////////
// INCOMING
// cloudinary.uploader
//   .upload("./Images/chrome.png", { upload_preset: "node_preset" })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// EAGER
// cloudinary.uploader
//   .upload("./Images/tiktok.png", {
//     transformation: [
//       {
//         width: 200,
//         height: 200,
//       },
//     ],
//   })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// EAGER_ASYNC
// cloudinary.uploader
//   .upload("./Images/laughing.png", {
//     eager: ["w_200", "h_200"],
//     eager_async: true,
//   })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
