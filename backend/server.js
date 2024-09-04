import express from "express";
import connectMongoDB from "./connectingMongoDB/connectingMongoDB.js";
import { configDotenv } from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import cookieParser from 'cookie-parser';
import { v2 } from "cloudinary";
import serviceRoutes from './routes/service.routes.js';

configDotenv();
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET,
});


const app = express();

const Port=5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/service",serviceRoutes);

app.listen(Port, () => {
    console.log(`Server started at http://localhost:${Port}`);
    connectMongoDB();
  });