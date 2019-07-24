'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

url = url.replace('bots', 'odds');
url = (url.substring(0, 4) + ':' + url.slice(5));

// V2
// url = url.substring(0, 4) + ':' + url.substring(5, url.length - 4) + 'odds';

console.log(url);