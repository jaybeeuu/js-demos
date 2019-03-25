fetch(
  "/text",
  { cache: "no-cache" }
).then(
  (response) => response.text()
).then((html) => {
    document.getElementById('text').innerHTML = html;
  }
);