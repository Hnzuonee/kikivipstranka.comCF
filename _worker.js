export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // /p/<hash> → 302 OnlyFans
    if (url.pathname.startsWith("/p/")) {
      const hash = url.pathname.split("/").pop();
      return Response.redirect(
        "https://onlyfans.com/kristynka.cengerova?b=" + hash,
        302
      );
    }
    // statické soubory
    return env.ASSETS.fetch(request);
  }
};
