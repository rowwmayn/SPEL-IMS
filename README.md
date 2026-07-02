[x] We create a project directory and set it up on github.
[x] We create a env file in the root.
[x] We set up Postgres in Docker before touching NextJS.



## Github

##### `git remote add origin <url>` 
Tells your local git "there's a copy of this repo at this URL, call it origin" (that's just a conventional name, could be anything). This doesn't send any data yet, just registers the address.
##### `git push -u origin main`
Actually uploads your commits to GitHub. The -u sets origin main as the default target, so from now on you can just type git push without repeating the remote/branch.


## DOCKER

Think of it as a mini virtual box.

1. Create the *docker-compose.yml* file. (If you're good with Ai, you can use AI to write it for you) Just know that .yml file saves you time so that everytime you run Docker, you don't have to write a huge code.
2. Start docker desktop.
3. Run *docker compose up -d*.

