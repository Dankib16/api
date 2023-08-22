import express from 'express';
import cors from 'cors';

import { router } from './controllers';
import { errorHandler } from './middlewares/errorHandler';
import { authenticateRequestMiddleware } from './middlewares/authenticateRequest';

const app = express();

app.use(cors());
app.use(express.json());
app.use(authenticateRequestMiddleware, router);
app.use(errorHandler);

export default app;
