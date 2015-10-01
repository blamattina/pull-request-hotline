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
  title:'subcommands',
  dest:"subcommand_name"
});


buildIssueCommentCommand(subparsers);
buildCodeReviewCommand(subparsers);

module.exports = parser;
