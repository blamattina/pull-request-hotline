module.exports = function buildCodeReviewCommentCommand(subparsers) {
  var codeReviewCommentCommand = subparsers.addParser('code-review', {
    addHelp: true,
    description: 'Issue a code review comment to a pull request'
  });

  codeReviewCommentCommand.addArgument(
    [ '--user' ],
    {
      required: true,
      help: 'The owner of the repository'
    }
  );

  codeReviewCommentCommand.addArgument(
    [ '--repo' ],
    {
      required: true,
      help: 'The repository name.'
    }
  );

  codeReviewCommentCommand.addArgument(
    [ '--number' ],
    {
      type: 'int',
      required: true,
      help: 'The pull request number.'
    }
  );

  codeReviewCommentCommand.addArgument(
    [ '--path' ],
    {
      required: true,
      help: 'The relative path of the file to comment on.'
    }
  );

  codeReviewCommentCommand.addArgument(
    [ '--position' ],
    {
      type: 'int',
      required: true,
      help: 'The line index in the diff to comment on.'
    }
  );

  codeReviewCommentCommand.addArgument(
    [ '--commit_id' ],
    { help: 'The SHA of the commit to comment on.' }
  );

  codeReviewCommentCommand.addArgument(
    [ 'body' ],
    {
      nargs: '+',
      help: 'The text of the comment'
    }
  );
  return codeReviewCommentCommand;

};
