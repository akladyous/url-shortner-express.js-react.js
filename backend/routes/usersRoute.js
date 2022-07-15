import express from 'express';
import { signup } from '../controller/users/signup.js';
import { signin } from '../controller/users/signin.js';
import { signout } from '../controller/users/signout.js';
import { updateUser } from "../controller/users/updateUser.js"
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
