fetch(
  "/markdown",
  { cache: "no-cache" }
).then(
  (response) => response.text()
).then((html) => {
    document.getElementById('markdown').innerHTML = html;
  }
);