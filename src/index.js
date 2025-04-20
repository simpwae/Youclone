import dotenv from "dotenv";
dotenv.config({ path: "./env" });
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    let PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("DB connection Failed !!", error);
  });

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
