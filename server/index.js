import express from "express";
import mongoose from "mongoose";
import itemRoutes from "./routes/itemRoute";

const app = express();
const PORT = 5500;

app.use(express.json());
app.use("/items", itemRoutes);

mongoose
  .connect("mongodb://localhost:27017/your-database-name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((error) => console.error("MongoDB connection error:", error));
