---
sidebar_position: 2
description: ''
---

# GitHub

## npm Command Was Not Found

If you're using nvm and a self-hosted runner, and it says it cannot find npm,
it's probably because `nvm` doesn't install node environment in the `/usr/local/bin/` directory,
so runner cannot find it.

To fix this, create a soft link for each command that is being used:

```shell
sudo ln -s "$NVM_DIR/versions/node/$(node_version)/bin/node" "/usr/local/bin/node"
sudo ln -s "$NVM_DIR/versions/node/$(node_version)/bin/npm" "/usr/local/bin/npm"
sudo ln -s "$NVM_DIR/versions/node/$(node_version)/bin/pm2" "/usr/local/bin/pm2"
```

## Job Successfully Runs But pm2 Doesn't Start The Process

I don't know why, but it seems GitHub runner sometimes doesn't install correctly, and it leads to missing environment variables.
In this case, `HOME` is missing, so pm2 instantiates a new daemon with wrong variables.

Use this command To check variables used by runner:

```shell
strings /proc/$(pgrep -f Runner.Listener)/environ
```

If you don't see `HOME` in the result, then you found the problem.

To fix this, first uninstall runner and then install it and explicitly tell it what user to use:

```shell
./svc.sh uninstall
./svc.sh install root
./svc.sh start
```
