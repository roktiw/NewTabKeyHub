
document.querySelector('.settings').addEventListener('click', function () {
    document.querySelectorAll('.key').forEach(key => {
        key.setAttribute('contenteditable', 'true');
    });
});

window.onload = function () {
    const keys = [
        ['1', 'q', 'a', 'z'],
        ['2', 'w', 's', 'x'],
        ['3', 'e', 'd', 'c'],
        ['4', 'r', 'f', 'v'],
        ['5', 't', 'g', 'b'],
        ['6', 'y', 'h', 'n'],
        ['7', 'u', 'j', 'm'],
        ['8', 'i', 'k', ','],
        ['9', 'o', 'l', '.'],
        ['0', 'p', ';', '/']
    ];
    var links = {
        '1': 'https://www.whatsapp.com',
        '2': 'https://www.gmail.com',
        '3': 'https://calendar.google.com/',
        '4': 'https://drive.google.com/',
        '5': 'https://www.todoist.com',
        '6': 'https://chatgpt.com/',
        '7': 'https://www.github.com',
        '8': 'https://www.jira.com',
        '9': 'https://www.audioteka.com',
        '0': 'https://www.tumblr.com',
        'q': 'https://www.quora.com',
        'w': 'https://www.wikipedia.org',
        'e': 'https://www.ebay.com',
        'r': 'https://www.reddit.com',
        't': 'https://www.twitter.com',
        'y': 'https://www.youtube.com',
        'u': 'https://www.uber.com',
        'i': 'https://www.instagram.com',
        'o': 'https://www.opera.com',
        'p': 'https://www.pinterest.com',
        'a': 'https://www.amazon.com',
        's': 'https://www.spotify.com',
        'd': 'https://www.dropbox.com',
        'f': 'https://www.facebook.com',
        'g': 'https://www.google.com',
        'h': 'https://www.hulu.com',
        'j': 'https://www.justwatch.com',
        'k': 'https://www.kickstarter.com',
        'l': 'https://www.linkedin.com',
        ';': 'https://www.semanticscholar.org',
        'z': 'https://www.zillow.com',
        'x': 'https://www.xbox.com',
        'c': 'https://www.cnn.com',
        'v': 'https://www.vimeo.com',
        'b': 'https://www.bing.com',
        'n': 'https://www.netflix.com',
        'm': 'https://www.microsoft.com',
        ',': 'https://www.comma.com',
        '.': 'https://www.dot.com',
        '/': 'https://www.slash.com'
    };

    var keyboard = document.querySelector('.keyboard');
    keys.forEach(function (rowKeys) {
        var row = document.createElement('div');
        row.className = 'row';
        rowKeys.forEach(function (key) {
            var keyElement = document.createElement('div');
            keyElement.className = 'key';
            keyElement.dataset.key = key.toUpperCase(); // Set the data-key attribute

            var letterElement = document.createElement('div');
            letterElement.className = 'letter';
            letterElement.textContent = key;
            keyElement.appendChild(letterElement);

            if (links[key]) {
                var infoContainer = document.createElement('div');
                infoContainer.className = 'info-container';

                var linkText = links[key].replace('http://www.', '').replace('https://www.', '');

                // Fetch and display the favicon
                var faviconElement = document.createElement('img');
                faviconElement.className = 'favicon';
                faviconElement.src = 'http://www.google.com/s2/favicons?domain=' + linkText;
                infoContainer.appendChild(faviconElement);

                var nameElement = document.createElement('div');
                nameElement.className = 'name';
                nameElement.textContent = linkText;
                infoContainer.appendChild(nameElement);

                keyElement.appendChild(infoContainer);

                keyElement.dataset.link = links[key];
                keyElement.title = links[key];
                keyElement.addEventListener('click', function () {
                    window.location = this.dataset.link;
                });
            }
            row.appendChild(keyElement);
        });
        keyboard.appendChild(row);
    });

    var link = keyElement.dataset.link;
    if (link) {
        window.location.href = link;
    }

    var settingsElement = document.getElementById('settings');
    if (settingsElement) {
        settingsElement.focus();
    }
};

document.addEventListener('keydown', function (event) {
    var key = event.key.toUpperCase();
    var keyElement = document.querySelector('.key[data-key="' + key + '"]');
    if (keyElement) {
        var link = keyElement.dataset.link;
        if (link) {
            window.location.href = link;
        }
    }
});