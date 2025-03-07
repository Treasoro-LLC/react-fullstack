// src/index.ts
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { add } from '@react-fullstack/utils';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  const result = add(5, 10);
  console.log(`Calling [util/add] 5+10: ${result}`);
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
