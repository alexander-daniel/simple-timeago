# simple-timeago  [![Build Status](https://travis-ci.org/alexander-daniel/simple-timeago.svg?branch=master)](https://travis-ci.org/alexander-daniel/simple-timeago)
Create simple human-readable fuzzy-timestamps

# example
```javascript
var timeAgo = require('simple-timeago');

var startTime = new Date();
var thirtyOneMinutesAgo = new Date(startTime - 1.86e+6);

console.log(timeAgo(thirtyOneMinutesAgo));
// 31 minutes ago
```

# methods
```javascript
var timeAgo = require('simple-timeago');
```

## timeAgo(since, until)
- `since` - `Date` object to calculate time-since from.
- `until` - `Date` object to calculate time-since to. (Optional, defaults to *now* (`new Date()`))

Returns a `string` of fuzzy time.

# install
```bash
npm install simple-timeago
```

# test
```bash
npm test
```

# license
MIT
