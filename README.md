# pull-request-hotline

## Command Line Utility
```
$ pull-request-hotline -h
usage: pull-request-hotline [-h] [-v] {issue-comment,code-review} ...

Simple command line utility for commenting on pull requests

Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --version         Show program's version number and exit.

commands:
  Valid commands are "issue-comment" and "code-review". You can request help
  on a particular command with "pull-request-hotline [command] -h"

  {issue-comment,code-review}
```

### Issue Comment
```
$ pull-request-hotline issue-comment -h
usage: pull-request-hotline issue-comment [-h] --user USER --repo REPO
                                          --number NUMBER
                                          body [body ...]

Issue a code review comment to a pull request

Positional arguments:
  body             The text of the comment

Optional arguments:
  -h, --help       Show this help message and exit.
  --user USER      The owner of the repository
  --repo REPO      The repository name.
  --number NUMBER  The pull request number.
```

### Code Review Comment
```
pull-request-hotline code-review -h
usage: pull-request-hotline code-review [-h] --user USER --repo REPO --number
                                        NUMBER [--path PATH]
                                        [--position POSITION]
                                        [--commit_id COMMIT_ID]
                                        body [body ...]

Issue a code review comment to a pull request

Positional arguments:
  body                  The text of the comment

Optional arguments:
  -h, --help            Show this help message and exit.
  --user USER           The owner of the repository
  --repo REPO           The repository name.
  --number NUMBER       The pull request number.
  --path PATH           The relative path of the file to comment on.
  --position POSITION   The relative path of the file to comment on.
  --commit_id COMMIT_ID
                        The SHA of the commit to comment on.
```
