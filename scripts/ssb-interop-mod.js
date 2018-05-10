

document.addEventListener("DOMContentLoaded", function () {
  const root = '%SLACK_ROOT%';

  if (%SLACK_DEV_TOOLS%) {
    require('electron').remote.getCurrentWebContents().openDevTools({
      mode: '%SLACK_DEV_TOOLS_MODE%'
    });
  }

  // Then get its webviews
  let webviews = document.querySelectorAll(".TeamView webview");

  // Fetch css
  const css = require('fs').readFileSync(require('path').join(root, '%SLACK_CSS_FILENAME%')).toString();

  // Insert a style tag into the wrapper view
  let s = document.createElement('style');
  s.type = 'text/css';
  s.innerHTML = css;
  document.head.appendChild(s);

  // Wait for each webview to load
  webviews.forEach(webview => {
    webview.addEventListener('ipc-message', message => {
      if (message.channel == 'didFinishLoading') {
        // Finally add the CSS into the webview
        let script = `
              let s = document.createElement('style');
              s.type = 'text/css';
              s.id = 'slack-custom-css';
              s.innerHTML = \`${css}\`;
              document.head.appendChild(s);`;
        webview.executeJavaScript(script);
      };
    });
  });
}); // %SLACK_DISCORD_THEME%