import express, { Request, Response } from "express";
const router = express.Router();

// Example POST /signin route with a message
router.post("/signin", (req: Request, res: Response) => {
  res.json({ message: "Sign in endpoint hit!", body: req.body });
});

export default router;
