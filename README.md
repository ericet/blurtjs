[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ericet/blurtjs/-/blob/master/LICENSE)

# Blurt.js
Blurt.js the Official JavaScript API for Blurt blockchain

# Documentation

- [Install](https://github.com/ericet/blurtjs/-/tree/master/doc#install)
- [Browser](https://github.com/ericet/blurtjs/-/tree/master/doc#browser)
- [Config](https://github.com/ericet/blurtjs/-/tree/master/doc#config)
- [Database API](https://github.com/ericet/blurtjs/-/tree/master/doc#api)
    - [Subscriptions](https://github.com/ericet/blurtjs/-/tree/master/doc#subscriptions)
    - [Tags](https://github.com/ericet/blurtjs/-/tree/master/doc#tags)
    - [Blocks and transactions](https://github.com/ericet/blurtjs/-/tree/master/doc#blocks-and-transactions)
    - [Globals](https://github.com/ericet/blurtjs/-/tree/master/doc#globals)
    - [Keys](https://github.com/ericet/blurtjs/-/tree/master/doc#keys)
    - [Accounts](https://github.com/ericet/blurtjs/-/tree/master/doc#accounts)
    - [Authority / validation](https://github.com/ericet/blurtjs/-/tree/master/doc#authority--validation)
    - [Votes](https://github.com/ericet/blurtjs/-/tree/master/doc#votes)
    - [Content](https://github.com/ericet/blurtjs/-/tree/master/doc#content)
    - [Witnesses](https://github.com/ericet/blurtjs/-/tree/master/doc#witnesses)
- [Login API](https://github.com/ericet/blurtjs/-/tree/master/doc#login)
- [Follow API](https://github.com/ericet/blurtjs/-/tree/master/doc#follow-api)
- [Broadcast API](https://github.com/ericet/blurtjs/-/tree/master/doc#broadcast-api)
- [Broadcast](https://github.com/ericet/blurtjs/-/tree/master/doc#broadcast)
- [Auth](https://github.com/ericet/blurtjs/-/tree/master/doc#auth)


Here is full documentation:
https://github.com/ericet/blurtjs/-/tree/master/doc

## Browser
```html
<script src="./blurt.min.js"></script>
<script>
blurt.api.getAccounts(['baabeetaa', 'jacobgadikian'], function(err, response){
    console.log(err, response);
});
</script>
```

## CDN
https://cdn.jsdelivr.net/npm/@ericet/blurtjs/dist/blurt.min.js<br/>
```html
<script src="https://cdn.jsdelivr.net/npm/@ericet/blurtjs/dist/blurt.min.js"></script>
```

## Webpack
[Please have a look at the webpack usage example.](https://github.com/ericet/blurtjs/-/tree/master/examples/webpack-example)

## Server
## Install
```
$ npm install @ericet/blurtjs --save
```

## RPC Servers
https://rpc.blurt.world By Default<br/>

## Examples
### Broadcast Vote
```js
var blurt = require('@ericet/blurt-js');

var wif = blurt.auth.toWif(username, password, 'posting');
blurt.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
	console.log(err, result);
});
```

### Get Accounts
```js
blurt.api.getAccounts(['megadrive', 'jacobgadikian'], function(err, result) {
	console.log(err, result);
});
```

### Get State
```js
blurt.api.getState('/trends/funny', function(err, result) {
	console.log(err, result);
});
```

### Reputation Formatter
```js
var reputation = blurt.formatter.reputation(user.reputation);
console.log(reputation);
```

## Contributions
Patches are welcome! Contributors are listed in the package.json file. Please run the tests before opening a pull request and make sure that you are passing all of them.

## Issues
When you find issues, please report them!

## License
MIT
