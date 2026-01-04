import { Request, Response } from "express";

export class GithubController {
  constructor() {}

  webHookHandler(req: Request, res: Response) {
    const githubEven = req.header("x-github-event") ?? null;
    const payload = req.body;
    console.log(JSON.stringify(payload));

    res.status(202).send("Accepted");
  }
}
