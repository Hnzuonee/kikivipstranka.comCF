export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // server‑side cloak: /p/<hash> → 302 to OnlyFans
    if (url.pathname.startsWith("/p/")) {
      const hash = url.pathname.split("/").pop();
      const dest = "https://onlyfans.com/kikibig?b=" + hash;
      return Response.redirect(dest, 302);
    }

    // everything else = static asset
    return env.ASSETS.fetch(request);
  }
};