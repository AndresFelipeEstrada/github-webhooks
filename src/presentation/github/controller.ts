import { Request, Response } from "express";

export class GithubController {
  constructor() {}

  webHookHandler(req: Request, res: Response) {
    console.log("hecho desde github");

    res.json("Hecho");
  }
}
