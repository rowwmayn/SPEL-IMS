# Create and switch to a new branch

`git checkout -b nextjs-setup`

##Breaking that down:

1. git checkout -b <name> — creates a new branch called nextjs-setup and switches to it in one command (-b = "branch," creates it)
2. Without -b, checkout just switches to an existing branch

`git branch` -> This lists all your local branches — the one with a * next to it is where you currently are. Paste back both outputs.


`git push -u origin nextjs-setup` -> *The -u origin nextjs-setup both pushes it and sets up tracking (so future pushes on this branch can just be git push), same reason we used -u the very first time on main.*