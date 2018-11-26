document.addEventListener('DOMContentLoaded', function () {
    $.ajax({
        url: 'https://raw.githubusercontent.com/Stijn-van-Nieulande/slack-discord-theme/master/out/main.css',
        success: function (css) {
            $("<style></style>").appendTo('head').html(css);
        }
    });
});
