Example: Tests
==============
Maybe you want to send TAP test to an HTTP endpoint and also have the results
be pretty. Thanks to some awesome composable modules that expose streams you
can!

The "tests" for this example are written with tape but you can use any testing
framework that returns TAP formatted results.

```shell
npm install -g tape # cool test framework
npm install -g tap-spec # make the results look pretty
npm install -g http-pipe # that's this module!
```

Start the example server in a new shell

```shell
node server.js
```

and in another shell run this

```shell
tape /tests/*.js | http-pipe http://localhost:3000 | tap-spec
```

Neat we hit the server with our results and printed them pretty to our shell!
