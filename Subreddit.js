// Create a function that returns the subreddit.

// Examples
// subReddit("https://www.reddit.com/r/osugame/") ➞ "osugame"
// subReddit("https://www.reddit.com/r/javascript/") ➞ "javascript"
// subReddit("https://www.reddit.com/r/reactjs/") ➞ "reactjs"

function subReddit(link) {
    return link.slice(link.indexOf("/r/") + 3, link.length - 1)
}

const answer = subReddit("https://www.reddit.com/r/programmerhumor/");
console.log(answer);