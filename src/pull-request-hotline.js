var _ = require('lodash');
var configurationValidator = require('./configuration-validator');
var GithubApiWrapper = require('./github-api-builder');

function PullRequestHotline() {
  this.api = new GithubApiWrapper();
}

_.assign(PullRequestHotline.prototype, {
  issueComment: function (message) {
    return this.api.issueComment(message)
  },

  codeReviewComment: function (message) {
    return this.api.codeReviewComment(message)
  }
});

module.exports = PullRequestHotline;
