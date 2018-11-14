import { Router, Request, Response, NextFunction } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello, World!");
});

router.get("/:name", (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.params;
  res.send(`Hello, ${name}`);
});

export const Welcome: Router = router;
