var _ = require('lodash');
var debug = require('debug')('pull-request-hotline:githup-api');
var Promise = require('bluebird');
var Github = require('github');

var functionsToWrap = [
  { name: 'getPull', module: 'pullrequests', fn: 'get' }
  { name: 'getPullFiles', module: 'pullrequests', fn: 'getFiles' }
  { name: 'createIssueComment', module: 'issues', fn: 'createComment' }
  { name: 'createPullComment', module: 'pullrequests', fn: 'createComment' }
];

var _wrapApiFunctionsInPromises = function (wrapped, api) {
  functionsToWrap.forEach(function(wrapper) {
    wrapped[wrapper.name] = function (params) {
      var fnAsync = Promise.promisify(api[wrapper.module][wrapper.fn]);
      return fnAsync(params);
    }
  });
}

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

  _wrapApiFunctionsInPromises(this, this.api);
}

module.exports = GithubApiWrapper;
