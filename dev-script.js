var slackDiscordThemeInjecting = false,
    injectSlackDiscordTheme = function () {
        $.ajax({
            url: 'https://raw.githubusercontent.com/Stijn-van-Nieulande/slack-discord-theme/master/out/main.css',
            success: function (css) {
                $("<style></style>").appendTo('head').html(css);
            }
        });
    };

document.addEventListener('DOMContentLoaded', function () {
    if (!slackDiscordThemeInjecting) {
        slackDiscordThemeInjecting = true;
        injectSlackDiscordTheme();
    }
});
jQuery(document).ready(function () {
    if (!slackDiscordThemeInjecting) {
        slackDiscordThemeInjecting = true;
        injectSlackDiscordTheme();
    }
});
