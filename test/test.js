'use strict';

var test = require('tape');
var timeAgo = require('../index');

test('test timeago-words', function (t) {

    var startTime = new Date();
    var aboutAMinuteAgo = new Date(startTime - 87000);
    var thirtyOneMinutesAgo = new Date(startTime - 1.86e+6);
    var aboutAnHourAgo = new Date(startTime - 5.0e+6);
    var dayAgo = new Date(startTime - 8.64e+7);
    var weekAgo = new Date(startTime - 6.048e+8);
    var monthAgo = new Date(startTime - 2.63e+9);
    var sixMonthsAgo = new Date(startTime - 1.578e+10);
    var yearAgo = new Date(startTime - 3.156e+10);
    var twoYearsAgo = new Date(startTime - 6.311e+10);
    var tenYearsAgo = new Date(startTime - 3.156e+11);

    t.isEqual(timeAgo(), 'less than a minute ago');
    t.isEqual(timeAgo(startTime), 'less than a minute ago');
    t.isEqual(timeAgo(aboutAMinuteAgo), 'about a minute ago');
    t.isEqual(timeAgo(thirtyOneMinutesAgo), '31 minutes ago');
    t.isEqual(timeAgo(aboutAnHourAgo), 'about an hour ago');
    t.isEqual(timeAgo(dayAgo), 'a day ago');
    t.isEqual(timeAgo(weekAgo), '7 days ago');
    t.isEqual(timeAgo(monthAgo), 'about a month ago');
    t.isEqual(timeAgo(sixMonthsAgo), '6 months ago');
    t.isEqual(timeAgo(yearAgo), 'about a year ago');
    t.isEqual(timeAgo(twoYearsAgo), '2 years ago');
    t.isEqual(timeAgo(tenYearsAgo), '10 years ago');

    t.end();
});


test('test timeago-words bad data', function (t) {

    var startTime = 'foo';

    t.throws(function () {
        timeAgo(startTime);
    }, Error);

    t.end();
});


test('test timeago-words future', function (t) {

    var startDate = new Date();
    var twentyFourHoursFromNow = new Date(startDate.getTime() + 8.63e+7);
    var oneDayFromNow = new Date(startDate.getTime() + 8.65e+7);

    t.isEqual(timeAgo(twentyFourHoursFromNow), 'about 24 hours from now');
    t.isEqual(timeAgo(oneDayFromNow), 'a day from now');

    t.end();
});
