# SRCTWeb -- the homepage of Mason SRCT

Our own little site on the world wide web.

A static site built with [Jekyll](https://jekyllrb.com/).

# Setup instructions for local development

## 1) Install `git` on your system

`git` is the version control system used for SRCT projects.

### On Linux Based Systems

**with apt:**

Open a terminal and run the following command:

    sudo apt update

This retrieves links to the most up-to-date and secure versions of your packages.

Next, with:

    sudo apt install git

you install `git` onto your system.

### On macOS

We recommend that you use the third party Homebrew package manager for macOS,
which allows you to install packages from your terminal just as easily as you
could on a Linux based system. You could use another package manager (or not
use one at all), but Homebrew is highly reccomended.

To get homebrew, run the following command in a terminal:

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)

**Note**: You do NOT need to use `sudo` when running any Homebrew commands, and
it likely won't work if you do.

Next, to make sure Homebrew is up to date, run:

    brew update

Finally we can install git with:

    brew install git

### On Windows

We recommend that if you are on Windows 10 AE (Anniversary Edition) or above to make use of the
Windows Subsystem for Linux (WSL). The following link should get you up and running:

[https://msdn.microsoft.com/en-us/commandline/wsl/install_guide](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide)

#### Contributing with Windows

If you are not on Windows 10 or would rather prefer to not use the WSL you may download Git for
Windows here:

[https://git-scm.com/download/win](https://git-scm.com/download/win)

I have also successfully ran the project with Docker on Windows, though you need
access to Hyper-V which is only available on **"Professional"** versions of Windows.

## 2) Clone the srctweb codebase

Now, we're going to clone down a copy of the SRCTWeb codebase from [git.gmu.edu](https://git.gmu.edu/srct/srctweb),
the SRCT code respository with SSH.

**a)** Configure your ssh keys by following the directions at:

**[git.gmu.edu/help/ssh/README](https://git.gmu.edu/help/ssh/README)**

**b)** Now, on your computer, navigate to the directory in which you want to download the project (ie. perhaps one called `~/development/SRCT`), and run

    git clone git@git.gmu.edu:srct/srctweb.git

## 3) Get SRCTWeb up and running with the method of your choice

Now that we have cloned down the repo you can

    cd srctweb/

and get to working on setting up a development environment!

### Docker

Installing Docker on your system:

* For macOS go here: https://docs.docker.com/docker-for-mac/
* For Windows go here: https://docs.docker.com/docker-for-windows/
* For your specific linux disro go here: https://docs.docker.com/engine/installation/
  * Additionally, you will need to install docker-compose: https://docs.docker.com/compose/install/

Run:

    docker-compose up

If that doesn't work, try:

    sudo docker-compose up

You should see that the server is running by going to [http://localhost:4000](http://localhost:4000) in your browser. Any changes you make to your local file system will be mirrored in the server.

# Contrubuting

Please read `CONTRIBUTING.md` for specific information and best practices on how
to contribute to the project.
