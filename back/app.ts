import * as express from "express";
const app: express.Express = express();
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import { limiter, setCache } from "./utils/limiter";
import helmet from "helmet";
import * as cors from "cors";

// Set security HTTP headers
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({ origin: `${process.env.FRONT_URL}`, credentials: true }));

app.use(setCache);
app.use("/", limiter);

// routers

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const err: Error = new Error(`Route ${req.originalUrl} is unavailable!`);
    res.status(404).json({
      status: err["status"],
      message: err["message"],
    });
  }
);

export default app;
