# pull-request-hotline

## Usage
```
usage: pull-request-hotline [-h] [-v] -o OWNER -r REPO -p PULL [-f FILE]
                            [-s SHA]
                            message [message ...]

Simple command line utility for commenting on pull requests

Positional arguments:
  message               The text of the comment

Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --version         Show program's version number and exit.
  -o OWNER, --owner OWNER
                        The owner of the repository
  -r REPO, --repo REPO  The repository name.
  -p PULL, --pull PULL  The pull request number.
  -f FILE, --file FILE  The relative path of the file to comment on.
  -s SHA, --sha SHA     The SHA of the commit to comment on.
```
