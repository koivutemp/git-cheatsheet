export const gitCommands = [
    {
        command: "git init",
        explanation: "Initializes a new Git repository in the current directory."
    },
    {
        command: "git init <directory>",
        explanation: "Initializes a new Git repository in the specified directory."
    },
    {
        command: "git init --bare <directory>",
        explanation: "Creates a new bare repository, which does not contain a working directory and is used to store the Git history and track branches."
    },
    {
        command: "git init --template=<directory>",
        explanation: "Uses a custom template directory to initialize the repository, rather than the default template."
    },
    {
        command: "git init --separate-git-dir=<git-dir>",
        explanation: "Creates a new repository with the Git data stored in a separate location."
    },
    {
        command: "git init --shared[=<mode>]",
        explanation: "Creates a new repository with the specified level of access control for shared repositories."
    },
    {
        command: "git clone <repository>",
        explanation: "Clones an existing Git repository from a remote location."
    },
    {
        command: "git clone <repository> <directory>",
        explanation: "Clones the specified repository into the specified directory."
    },
    {
        command: "git clone <repository> <directory> --bare",
        explanation: "Clones the repository as a bare repository, without a working directory."
    },
    {
        command: "git clone <repository> <directory> --mirror",
        explanation: "Clones the repository as a mirror, including all branches and tags."
    },
    {
        command: "git clone <repository> <directory> --depth <depth>",
        explanation: "Clones the repository with a limited history, specified by the number of commits."
    },
    {
        command: "git clone <repository> <directory> --single-branch",
        explanation: "Clones only a single branch from the repository."
    },
    {
        command: "git clone <repository> <directory> --branch <branch>",
        explanation: "Clones a specific branch from the repository."
    },
    {
        command: "git clone <repository> <directory> --recursive",
        explanation: "Clones the repository and all submodules."
    },
    {
        command: "git add <file>",
        explanation: "Adds a specific file to the staging area."
    },
    {
        command: "git add . ",
        explanation: "Adds all modified and new files to the staging area."
    },
    {
        command: "git add -u",
        explanation: "Adds all modified and deleted files to the staging area."
    },
    {
        command: "git add -A",
        explanation: "Adds all modified, new, and deleted files to the staging area."
    },
    {
        command: "git add --ignore-removal <file>",
        explanation: "Adds a specific file to the staging area, even if it was deleted in the working directory."
    },
    {
        command: "git add --patch <file>",
        explanation: "Interactively selects which changes to add to the staging area."
    },
    {
        command: "git commit -m '<message>'",
        explanation: "Saves changes to the local repository with a commit message."
    },
    {
        command: "git commit --amend",
        explanation: "Modifies the most recent commit message."
    },
    {
        command: "git commit --amend --no-edit",
        explanation: "Modifies the most recent commit, but keeps the commit message the same."
    },
    {
        command: "git commit --amend -m '<new-message>'",
        explanation: "Modifies the most recent commit and updates the commit message."
    },
    {
        command: "git commit --amend -a",
        explanation: "Modifies the most recent commit and adds all modified and deleted files to the commit."
    },
    {
        command: "git commit --author='<name> <email>'",
        explanation: "Modifies the author of the most recent commit."
    },
    {
        command: "git push",
        explanation: "Pushes commits to a remote repository."
    },
    {
        command: "git push <remote> <branch>",
        explanation: "Pushes the specified branch to the specified remote repository."
    },
    {
        command: "git push <remote> --force",
        explanation: "Overwrites the remote repository with the local repository, even if the remote repository has newer commits."
    },
    {
        command: "git push <remote> --force-with-lease",
        explanation: "Overwrites the remote repository with the local repository, but only if the remote repository does not have any new commits."
    },
    {
        command: "git push <remote> --all",
        explanation: "Pushes all local branches to the specified remote repository."
    },
    {
        command: "git push <remote> --tags",
        explanation: "Pushes all local tags to the specified remote repository."
    },
    {
        command: "git push <remote> <branch> --set-upstream",
        explanation: "Sets the specified branch as the upstream branch for the local branch."
    },
    {
        command: "git pull",
        explanation: "Pulls in changes from a remote repository."
    },
    {
        command: "git pull <remote> <branch>",
        explanation: "Retrieves the specified branch from the specified remote repository and merges it into the current branch."
    },
    {
        command: "git pull <remote> --rebase",
        explanation: "Retrieves the changes from the remote repository and reapplies them on top of the current branch, rather than merging."
    },
    {
        command: "git pull --all",
        explanation: "Retrieves all branches from the remote repository and merges them into the current branch."
    },
    {
        command: "git pull --rebase --all",
        explanation: "Retrieves all branches from the remote repository and reapplies them on top of the current branch, rather than merging."
    },
    {
        command: "git pull --no-commit",
        explanation: "Retrieves the changes from the remote repository, but does not create a new commit."
    },
    {
        command: "git pull --squash",
        explanation: "Retrieves the changes from the remote repository and combines them into a single commit, rather than creating multiple commits."
    },
    {
        command: "git branch",
        explanation: "Lists all local branches in the current repository."
    },
    {
        command: "git branch <branch>",
        explanation: "Creates a new branch."
    },
    {
        command: "git branch -d <branch>",
        explanation: "Deletes the specified branch. The branch must be fully merged into the current branch."
    },
    {
        command: "git branch -D <branch>",
        explanation: "Deletes the specified branch, even if it has not been fully merged into the current branch."
    },
    {
        command: "git branch -m <old-branch> <new-branch>",
        explanation: "Renames the specified branch."
    },
    {
        command: "git branch --merged",
        explanation: "Lists all branches that have been fully merged into the current branch."
    },
    {
        command: "git branch --no-merged",
        explanation: "Lists all branches that have not been fully merged into the current branch."
    },
    {
        command: "git checkout <branch>",
        explanation: "Switches to a different branch."
    },
    {
        command: "git checkout -b <branch>",
        explanation: "Creates a new branch and switches to it."
    },
    {
        command: "git checkout -b <branch> <start-point>",
        explanation: "Creates a new branch based on a specific commit and switches to it."
    },
    {
        command: "git checkout -- <file>",
        explanation: "Discards changes to a specific file in the working directory."
    },
    {
        command: "git checkout . ",
        explanation: "Discards all changes in the working directory."
    },
    {
        command: "git merge <branch>",
        explanation: "Merges changes from one branch into the current branch."
    },
    {
        command: "git merge --no-ff <branch>",
        explanation: "Merges the specified branch into the current branch, creating a new commit even if the merge could be performed with a fast-forward."
    },
    {
        command: "git merge --squash <branch>",
        explanation: "Combines the changes from the specified branch into a single commit, rather than creating multiple commits."
    },
    {
        command: "git merge --abort",
        explanation: "Cancels the merge process."
    },
    {
        command: "git merge --no-commit",
        explanation: "Performs the merge, but does not create a new commit."
    },
    {
        command: "git merge --verify-signatures",
        explanation: "Checks the GPG signatures of the commits being merged."
    },
    {
        command: "git status",
        explanation: "Checks the status of the current repository."
    },
    {
        command: "git log",
        explanation: "Displays the commit history for the current repository."
    },
    {
        command: "git reflog",
        explanation: "Shows a list of recent commits, including those not yet included in the local branches."
    },
    {
        command: "git diff",
        explanation: "Shows differences between the current code and the last commit."
    },
    {
        command: "git reset <file>",
        explanation: "Unstages a file that has been added to the staging area."
    },

    {
        command: "git restore <file>",
        explanation: "Reverses changes to a specific file in the working directory or staging area."
    },
    {
        command: "git restore . ",
        explanation: "Reverses changes to all files in the working directory or staging area."
    },
    {
        command: "git restore --staged <file>",
        explanation: "Removes a file from the staging area, but does not modify the working directory."
    },
    {
        command: "git restore --staged . ",
        explanation: "Removes all files from the staging area, but does not modify the working directory."
    },
    {
        command: "git restore --source=<branch> <file>",
        explanation: "Reverts a file to the version in a specific branch, and adds the file to the staging area."
    },
    {
        command: "git restore --source=<branch> . ",
        explanation: "Reverts all files to the version in a specific branch, and adds all modified files to the staging area."
    },
    {
        command: "git stash",
        explanation: "Temporarily saves changes that have not been committed, so that you can switch branches."
    },
    {
        command: "git tag",
        explanation: "Lists all tags in the current repository."
    },
    {
        command: "git tag <tag>",
        explanation: "Adds a tag to the current commit."
    },
    {
        command: "git fetch",
        explanation: "Downloads new data from a remote repository, but does not integrate it into the local repository."
    },
    {
        command: "git rebase <branch>",
        explanation: "Integrates changes from the specified branch into the current branch."
    },
    {
        command: "git rebase --onto <new-base> <old-base> <branch>",
        explanation: "Integrates changes from a branch, but uses a different starting point than the default."
    },
    {
        command: "git rebase -i <commit>",
        explanation: "Opens an editor to select which commits to apply or skip during the rebase process."
    },
    {
        command: "git rebase -p",
        explanation: "Preserves merge commits during the rebase process."
    },
    {
        command: "git rebase --abort",
        explanation: "Cancels the rebase process."
    },
    {
        command: "git rebase --continue",
        explanation: "Continues the rebase process after conflicts have been resolved."
    },
    {
        command: "git cherry-pick <commit>",
        explanation: "Applies the changes from a specific commit to the current branch."
    },
    {
        command: "git blame <file>",
        explanation: "Shows who made each change to a specific file, and when the change was made."
    },
    {
        command: "git grep <pattern>",
        explanation: "Searches for a specific pattern in the current repository."
    }
]
