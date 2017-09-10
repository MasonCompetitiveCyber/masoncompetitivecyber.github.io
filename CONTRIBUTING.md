# On Contributing

SRCTWeb welcomes all the help it can get. Even if you don't feel like you can be helpful the more technical aspects, we definitely need designers, technical writers, and testers.

There are many things that can be done with this project (see the "To Do" section), but sometimes it's the small things that count, so don't be afraid of contributing just a small spelling mistake.

If you need help at all please contact and SRCT member. We want people to contribute, so if you are struggling, or just want to learn we are more than willing to help.

The project lead for this project is **Daniel Bond**. *dbond2@gmu.edu*

Please visit the [SRCT Wiki](http://wiki.srct.gmu.edu/) for more information on this and other SRCT projects, along with other helpful links and tutorials.

## git

First take a look at [github flow](https://guides.github.com/introduction/flow/)
as this page gives a good starting point on understanding how to work with `git`
in an open source repo.

**Note:**

You will need to be a member before making any contributions. Join the slack #srctweb channel and ask nicely.

### Branches

Each branch off of the development branch serves one and only one purpose: to
add, modify, or remove features/bugs from Go. Our list of tasks can be found on
the issues page.

If you decide to take on an issue for SRCTWeb you will need to work in a branch off
of the current development branch.

Replace `##` with the issue number that you are working on, and replace
`shortdescription` with a few words (<=4) that in brief describe what the branch
does.

This can be done with the following chain of `git` commands within `srctweb/`:

    git pull
    git checkout current_development_branch
    git checkout -B ##-shortdescription

**Example:**

    git pull
    git checkout 2.2-dev
    git checkout -B 102-readme-updates

If you are working on something that does not have an issue please open a new
issue before creating your branch.

### Commits & Their Messages

It is important to commit more often than not such that if we run into issues we
can narrow down which commit started to cause issues.

Commit messages should follow the format:

#### Title -

Should fill in the blank:

    This commit ______

Additionally, if you are closing an issue include:

    (Closes #issue_number_here)

Example commit title:

    Complete the about page + TOS (Closes #36)

#### Description -

Bullet points of some highlights from the commit.

They don't have to be super serious (see any of my commits) though just a tad bit of info is nice.

Example commit description:

    - mostly talk about how great SRCT is
    - plus a short blurb on how we can ban you

[Example full commit](https://git.gmu.edu/srct/go/commit/db89af2e4ffd06a6044d3301a3f7a45ced74799a)

### Merging to the current development branch

Once you've finished work in a branch you will need to push your commits to gitlab.

    git push origin ##-branchname

`origin` is gitlab.

Open a [merge request](https://git.gmu.edu/srct/go/merge_requests/new)
to start the process of getting your code into the repo. Your code wil be reviewed
by another member before being merged. Your code must pass our tests and include
in the description:

    Closes #issue_number_here

[Example pull request](https://git.gmu.edu/srct/go/merge_requests/25)