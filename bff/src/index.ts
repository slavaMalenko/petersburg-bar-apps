import express from "express";
import cors from "cors";
import { menuRouter } from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = ["http://localhost:1000"];
// Настройка CORS
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        callback(null, true);
      }
      if (allowedOrigins.indexOf(origin) !== -1) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use("/menu", menuRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
