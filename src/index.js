import dotenv from "dotenv";
dotenv.config({path: "./env"});

import connectDB from "./db/index.js";

connectDB();

// const app = express();

// async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`);
//     app.on("error", (error) => {
//       console.log("Error", error);
//       throw error;
//     });
//     app.listen(5000, () => {
//       console.log("Server is running on port 5000");
//     });
//   } catch (error) {
//     console.log("Error", error);
//     throw error;
//   }
// };
