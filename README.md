# NextAuth unstable_getServerSession in Pages

This repository demonstrates a common error encountered when using `unstable_getServerSession` from NextAuth.js within Next.js pages.

The error occurs because `unstable_getServerSession` is intended for use within API routes, not pages.  Attempting to use it in a page leads to the error "Cannot use 'unstable_getServerSession' outside a route handler".

The solution involves refactoring the code to fetch the session data within an API route and then fetching that data from the page.