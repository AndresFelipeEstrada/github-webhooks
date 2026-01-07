import { GitHubStarPayload } from "../../interfaces";

export class GitHubService {
  onStar = (payload: GitHubStarPayload): string => {
    let message: string;

    const { sender, action, repository } = payload;

    return (message = `User ${sender.login} ${action} star on ${repository.full_name}`);
  };
}
