var GithubApiWrapper = require('./github-api-wrapper');

function PullRequestHotline() {
  this.api = new GithubApiWrapper();
}

_.assign(PullRequestHotline.prototype, {
  issueCommenter: function (params) {
    // return this.api.issueComment(params)
    return new IssueCommenter(params);
  },

  codeReviewCommenter: function (params) {
    return new CodeReviewCommenter(params)
  }
});

module.exports = PullRequestHotline;
