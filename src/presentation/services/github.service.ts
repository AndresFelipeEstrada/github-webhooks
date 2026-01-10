import type { GitHubIssuePayload, GitHubStarPayload } from "../../interfaces";

export class GitHubService {
  onStar = (payload: GitHubStarPayload): string => {
    let message: string;

    const { sender, action, repository } = payload;

    return (message = `User ${sender.login} ${action} star on ${repository.full_name}`);
  };

  onIssue = (payload: GitHubIssuePayload): string => {
    let message: string;
    const { action, issue } = payload;

    if (action === "opened") {
      return (message = `An issue was opened with this title ${issue.title}`);
    }

    if (action === "closed") {
      return (message = `An issue was closed by ${issue.user.login}`);
    }

    if (action === "reopened") {
      return (message = `An issue was reopened by ${issue.user.login}`);
    }

    return `Unhandled action for the issue event ${action}`;
  };
}
