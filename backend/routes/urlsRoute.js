import express from "express";
import { generateUrl } from "../controllers/url/generateUrl.js";
export const urlsRoute = express.Router();

urlsRoute.post("/url", generateUrl);

urlsRoute.all("/url/*", (req, res, next) => {
    const error = new Error("Path not found");
    error.name = "Route error";
    error.status = 404;
    next(error);
});
