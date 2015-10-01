
function PullRequest(api, user, repo, number) {
  this.api = api;
  this.user = user;
  this.repo = repo;
  this.number = number;
  this.pullRequestFiles = new PullRequestFiles(api, this.user, this.repo, this.number);
}

PullRequest.prototype = {

  getPullRequest: function() {
    if (!this._pullRequest) {
      this._pullRequest = this.api.getPullRequest(this.user,
        this.repo, this.number);
    }
    return this._pullRequest;
  },

  getHead: function() {
    return.this.getPullRequest().then(function(pullRequest) {
      return pullRequest.head
    }
  },

  commentOnDiff: function(commit, file, position, message) {
    return api.commentOnDiff({
      user: this.user,
      repo: this.repo,
      number: this.number,
      commit_id: this.commit,
      path: this.path,
      position: this.position,
      body: message
    });
  },

  commentOnLine: function(file, line, message) {
    var getHeadAsync = this.getHead();
    var findLineInDiffAsync = this.pullRequestFiles.findLineInDiff(file, line)

    return Promise.all(getHeadAsync, findLineInDiff).then(function(values) {
      var head = values[0],
          position = values[1];
      return this.commentOnDiff(head.sha, file, position, message);
    }.bind(this))
  }
}

module.exports = PullRequest;
