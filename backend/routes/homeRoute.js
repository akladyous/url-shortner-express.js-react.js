import express from "express";

export const homeRoute = express.Router();
homeRoute.get("/", (req, res) => {
    res.status(200).json({
        message: "home page"
    })
});

