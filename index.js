const scrape = require('website-scraper');
const websiteUrl = 'https://www.sorrowbot.com';

scrape({
    urls: [websiteUrl],
    urlFilter: function (url) {
        return url.indexOf(websiteUrl) === 0;
    },
    recursive: true,
    maxDepth: 50,
    prettifyUrls: true,
    filenameGenerator: 'bySiteStructure',
    directory: 'akashsuu'
}).then((data) => {
    console.log("ho gai bhai teri web site clone moj mar");
}).catch((err) => {
    console.log("bkl link to dal le sahi se", err);
});
