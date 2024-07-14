
import express from "express"
import errorMiddleware from "./middlewares/errorMiddleware";
import { MainRoutes } from "./routes";
import logger from 'morgan'
import cors from "cors";

const app = express()


app.use(cors());
//use sesssion middleware

app.use(express.json());
app.use(logger("dev"));

app.use('/api/v1',MainRoutes )

app.use(errorMiddleware);




export default app
