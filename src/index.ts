import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from Node REST API! for Vercel test deployment" });
});

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "welcome to ping pong game" });
});

app.post("/echo", (req: Request, res: Response) => {
  res.json({ youSent: req.body });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
});
