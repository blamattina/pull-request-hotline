var ArgumentParser = require('argparse').ArgumentParser;
var pkg = require('../package.json');
var buildIssueCommentCommand = require('./build-issue-comment-command');
var buildCodeReviewCommand = require('./build-code-review-command');

var parser = new ArgumentParser({
    version: pkg.version,
    addHelp:true,
    description: pkg.description
});

var subparsers = parser.addSubparsers({
  title: 'commands',
  description: 'Valid commands are "issue-comment" and "code-review".\
                You can request help on a particular command with\
                "%(prog)s [command] -h"',
  dest: 'commandName'
})

buildIssueCommentCommand(subparsers);
buildCodeReviewCommand(subparsers);

module.exports = parser;
