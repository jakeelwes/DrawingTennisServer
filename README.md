# simple save and serve

This server exposes three endpoints:

```
POST /save
GET /save/[some data]

GET /serve
```

[here](http://stackoverflow.com/questions/21058707/how-to-convert-a-html5-canvas-image-to-a-json-object) is an example of turning a canvas into a json object.

## heroku usage

```bash
heroku create
git push heroku master
heroku open
```

## local setup

you'll need node and npm, then:

```bash
npm install
```

## local usage

```bash
npm start
```

## testing

you can run

```bash
node test_post.js
```

to test posting data to the server. You'll have to change some of the options in that file, but it should be pretty clear.
