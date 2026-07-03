# What's even is NEXT JS ?
-> Plain **React** is boring and only handles the frontend whereas NEXTJS can be thought of as React with wings because it can handle frontend, backend and file based routing.

**NextJS basically has:**
**File-based routing** — the folder structure is the URL structure (a file at app/products/page.js automatically becomes the page at yoursite.com/products, no router config needed)
**Server Components** — some of your code runs on the server, not the browser. This matters enormously for us: server-side code can talk directly to Postgres (raw SQL, no API layer needed for simple reads), while client-side code can't touch the database at all for security reasons
**API routes** — you can write backend endpoints in the same project, no separate server needed
**Built-in build/bundling** — handles the webpack/bundler complexity for you

`npx create-next-app@latest .` -> The dot ( . ) at the end means creating the project in the current directory.