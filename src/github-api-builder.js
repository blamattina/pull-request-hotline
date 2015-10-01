var _ = require('lodash');
var debug = require('debug')('pull-request-hotline:githup-api');
var Promise = require('bluebird');
var Github = require('github');

function ensureEnvVariables() {
  if (!process.env.GITHUB_USERNAME && !process.env.GITUB_ACCESS_TOKEN) {
    throw new Error(
      'Missing environment variables: GITHUB_USERNAME, GITHUB_ACCESS_TOKEN'
    );
  }
}

function GithubApiWrapper() {
  debug('Creating Github API wrapper.');
  ensureEnvVariables();

  var options = {
    version: "3.0.0"
  };

  if (process.env.GITHUB_ENTERPRISE_HOSTNAME) {
    options.host = process.env.GITHUB_ENTERPRISE_HOSTNAME;
    options.pathPrefix = '/api/v3';
    debug('Using Github Host: ' + options.host);
  }

  this.api = new Github(options);
  debug('Authenticating as: ' + process.env.GITHUB_USERNAME);
  this.api.authenticate({
    type: 'basic',
    username: process.env.GITHUB_USERNAME,
    password: process.env.GITHUB_ACCESS_TOKEN
  });
}

GithubApiWrapper.prototype = {

  codeReviewComment: function (message) {
    var codeReviewCommentAsync = Promise.promisify(
        this.api.pullRequests.createComment
    );
    return codeReviewCommentAsync(message);
  },

  issueComment: function (message) {
    var issueCommentAsync = Promise.promisify(
        this.api.issues.createComment
    );
    return issueCommentAsync(message);
  },

};

module.exports = GithubApiWrapper;
