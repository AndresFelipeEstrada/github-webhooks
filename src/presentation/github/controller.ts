import { Request, Response } from "express";
import { GitHubService } from "../services/github.service";

export class GithubController {
  constructor(private readonly githubService = new GitHubService()) {}

  webHookHandler = (req: Request, res: Response) => {
    const githubEven = req.header("x-github-event") ?? null;
    const payload = req.body;
    let message: string;

    switch (githubEven) {
      case "star":
        message = this.githubService.onStar(payload);
        break;

      case "issues":
        message = this.githubService.onIssue(payload);
        break;

      default:
        ((message = "Unknown event"), githubEven);
        break;
    }
    console.log(message);

    res.status(202).send("Accepted");
  };
}
