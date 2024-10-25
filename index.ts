import express, { Response, Request } from "express";
import dotenv from "dotenv";
import router from "./src/routes";
import rateLimit from "express-rate-limit";
dotenv.config();

const app = express();

// contoh per entri
// const limiter = rateLimit({
//    windowMs: 1 * 60 * 1000, // 5 minutes
//    limit: 2, // each IP can make up to 10 requests per `windowsMs` (5 minutes)
//    standardHeaders: true, // add the `RateLimit-*` headers to the response
//    legacyHeaders: false, // remove the `X-RateLimit-*` headers from the response
// });

// app.use(limiter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(5000, () => {
   console.log("SERVERNYA DAH JALAN NEEEHH");
});
