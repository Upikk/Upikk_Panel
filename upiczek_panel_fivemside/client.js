onNet("clientScreenshot", (wh) => {
  exports["screenshot-basic"].requestScreenshotUpload(
    wh,
    "files[]",
    function (res) {
      const parsed = JSON.parse(res);
      emitNet("ScreenshotEvent", parsed.attachments[0].url);
    }
  );
});
