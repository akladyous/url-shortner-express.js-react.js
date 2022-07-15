import express from 'express';
import { signup } from '../controllers/users/signup.js';
import { signin } from '../controllers/users/signin.js';
import { signout } from '../controllers/users/signout.js';
import { updateUser } from "../controllers/users/updateUser.js"
export const usersRoute = express.Router();

usersRoute.get("/users", (req, res) => {
    res.status(200).send('<h1>users page</h1>')
});

usersRoute.post("/users/signup", signup)
usersRoute.post("/users/signin", signin)
usersRoute.delete('/users/signout', signout)
usersRoute.patch('/users/update/:userId', updateUser)

usersRoute.all("/users/*", (req, res, next) => {
    const error = new Error('Path not found')
    error.name = 'Route error'
    error.status = 404
    next(error);
})
