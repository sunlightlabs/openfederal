# Open Federal
Open Federal is Sunlight's toolkit of federal tools.

[Tentative Timeline](https://github.com/sunlightlabs/openfederal/wiki)

### Install
1. Clone this repo.
2. Run `npm install` to install package dependencies. If npm isn't installed, follow [these instructions](https://docs.npmjs.com/getting-started/installing-node) to do so.
3. Run `npm install -g gulp` for the gulp command line client if Gulp isn't installed.

### Running this for the first time
1. To build the static assets, run `gulp build`. You'll need to do this to generate the static assets the first time around, since we're not tracking compiled assets in git.
2. Run `gulp` to get started. This will start up a server and begin watching files for you to compile on the fly.
3. Go to localhost:8080 in your browser.
