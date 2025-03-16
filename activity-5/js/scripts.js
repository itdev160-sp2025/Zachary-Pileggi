// Package data

var data = [
    {
        name: 'Path-Intellisense',
        description:'Path Intellisense is a plugin that autocompletes file names.',
        author: 'Christian Kohler',
        downloads: 15659854,
        stars: 122,
        selector: 'p1'
    },
    {
        name: 'Rainbow-Brackets',
        description: 'Rainbow Brackets provides rainbow colors for round, square and squiggly brackets.',
        author: '2gua',
        downloads: 2429739,
        stars: 85,
        selector: 'p2'
    }
];

//constructor function for packaging objects
function Package(data){
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.downloads = data.downloads
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    }
}

// Utility functions

//return today's date
var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
}

var getEl = function(id) {
    return document.getElementById(id);
}


var writePackageInfo = function(package) {

    var selector = package.selector,
    nameEL = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + '-author')
    downloadEl = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');

    nameEL.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
}

var init = function() {
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var PathIntellisense = new Package(data[0]);
    writePackageInfo(PathIntellisense);

    var RainbowBrackets = new Package(data[1]);
    writePackageInfo(RainbowBrackets);
}

init();