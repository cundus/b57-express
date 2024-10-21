import express, { Response, Request } from "express";
import dotenv from "dotenv";
import router from "./src/routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(5000, () => {
   console.log("SERVERNYA DAH JALAN NEEEHH");
});
