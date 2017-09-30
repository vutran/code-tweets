function code(text) {
    return text.replace(/`(.*?)`/g, '<code>$1</code>');
}

function parse(items) {
    tweets.forEach(tweet => {
        tweet.innerHTML = code(tweet.innerHTML);
    });
}

const tweets = document.querySelectorAll(
    '.tweet .js-tweet-text-container .js-tweet-text'
);

parse(tweets);
