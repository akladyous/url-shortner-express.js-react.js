import express from 'express';
export const shortUrlRoute = express.Router();
import { shortUrlController } from '../controllers/url/shortUrlController.js'

shortUrlRoute.get('/:shorturl', shortUrlController);

