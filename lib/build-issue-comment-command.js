module.exports = function buildIssueCommentCommand(subparsers) {
  var issueCommentCommand = subparsers.addParser('issue-comment', {
    addHelp: true,
    description: 'Issue a code review comment to a pull request'
  });

  issueCommentCommand.addArgument(
    [ '--user' ],
    {
      required: true,
      help: 'The owner of the repository'
    }
  );

  issueCommentCommand.addArgument(
    [ '--repo' ],
    {
      required: true,
      help: 'The repository name.'
    }
  );

  issueCommentCommand.addArgument(
    [ '--number' ],
    {
      type: 'int',
      required: true,
      help: 'The pull request number.'
    }
  );

  issueCommentCommand.addArgument(
    [ 'body' ],
    {
      nargs: '+',
      help: 'The text of the comment'
    }
  );
  return issueCommentCommand;

};
