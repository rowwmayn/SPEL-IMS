# What's even is NEXT JS ?
-> Plain **React** is boring and only handles the frontend whereas NEXTJS can be thought of as React with wings because it can handle frontend, backend and file based routing.

**NextJS basically has:**
**File-based routing** — the folder structure is the URL structure (a file at app/products/page.js automatically becomes the page at yoursite.com/products, no router config needed)
**Server Components** — some of your code runs on the server, not the browser. This matters enormously for us: server-side code can talk directly to Postgres (raw SQL, no API layer needed for simple reads), while client-side code can't touch the database at all for security reasons
**API routes** — you can write backend endpoints in the same project, no separate server needed
**Built-in build/bundling** — handles the webpack/bundler complexity for you

`npx create-next-app@latest .` -> The dot ( . ) at the end means creating the project in the current directory.
*Folder names must be all lowercase and can't have spaces in them.*

## File-based routing — the core idea!
Everything lives under the app/ folder. The folder structure literally is your URL structure:
`app/
  page.js               →  yoursite.com/
  layout.js             →  wraps every page (shared nav, fonts, etc.)
  products/
    page.js             →  yoursite.com/products
    [id]/
      page.js           →  yoursite.com/products/123   (dynamic segment)`

**page.js** — the actual content of a route. If a folder has no page.js, it's not a visitable URL, just an organizational folder.
**layout.js** — wraps around page.js and any nested routes below it. Define your nav bar once in the root layout.js, and it appears on every page automatically without re-importing it everywhere.
**[id]** — square brackets mean "dynamic segment." A folder named [id] matches any value in that URL position (/products/123, /products/abc, etc.), and Next.js gives you that value as a parameter inside the page.

*By default, every component in the App Router is a Server Component. It runs only on the server, never ships its code to the browser, and — critically for us — can directly run raw SQL queries, because it has server-side access (environment variables, database drivers, filesystem). The browser never sees your database credentials or your SQL.*

*Client Components are the "normal React" you might be picturing — they run in the browser, can use useState, onClick, useEffect, respond to user interaction. You opt into this explicitly by adding "use client" as the very first line of a file.*

