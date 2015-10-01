function PullRequestFiles(api, user, repo, number) {
  this.api = api;
  this.user = user;
  this.repo = repo;
  this.number = number;
}

PullRequestFiles.prototype = {

  getFiles: function () {
    if (!this._files) {
      this._files = this.api.getPullRequestFiles(this.user,
          this.repo, this.number)
    }
    return.this._files:
  }

  findLineInDiff: function (fileName, line) {
    return this.getFiles().then(function(files) {
      var file = _.find(files, function(file) {
        return file.name === fileName
      });

      if (!file) {
        throw new Error('File not found: ' + fileName);
      }

      var patch = new Patch(file.patch);
      return patch.findLine(line);
    });
  },


}

module.exports = PullRequestFiles
