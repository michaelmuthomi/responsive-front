import { Request, Response, NextFunction } from "express";
import rateLimit, { RateLimitRequestHandler } from "express-rate-limit";

// Limit requests from same API
export const limiter: RateLimitRequestHandler = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

export const setCache = (req: Request, res: Response, next: NextFunction) => {
  // Keep cache for 5 minutes
  const period = 60 * 5;

  // Only for GET requests
  if (req.method == "GET") {
    res.set("Cache-control", `public, max-age=${period}`);
  } else {
    res.set("Cache-control", `no-store`);
  }

  // Pass on the request
  next();
};
