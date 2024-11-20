const CHECK_INTERVAL = 60 * 1000;

let cachedFileName = null;
let intervalId = null;

async function checkForUpdates() {
  try {
    const response = await fetch("/index.html", { cache: "no-cache" });
    const html = await response.text();
    const match = html.match(
      /<script\s+type="module"\s+crossorigin\s+src="(.*?)"/
    );
    if (match && match[1]) {
      const newFileName = match[1];
      if (cachedFileName && cachedFileName !== newFileName) {
        clearInterval(intervalId);
        postMessage({ updated: true });
      } else if (!cachedFileName) {
        cachedFileName = newFileName;
      }
    }
  } catch (error) {
    clearInterval(intervalId);
    console.error("Error checking for updates:", error);
  }
}

self.onmessage = (event) => {
  if (event.data === "start") {
    intervalId = setInterval(checkForUpdates, CHECK_INTERVAL);
  }
  if (event.data === "stop") {
    clearInterval(intervalId);
  }
};
