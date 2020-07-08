# Twee + SugarCube 2 starter

This is a pared-down project based on the build structure of the fantastic [Eigengrau's Essential Establishment Generator](https://eigengrausgenerator.com/).

It provides a basic Twine story which uses Tweego to build your `.twee` files into a Twine `.html` file.

> Why use Tweego? Tweego lets you write Twine projects using your favorite text editor, rather than the Twine software. You write passages in plain text files using the Twee notation across as few or as many files as you choose, which can make working, and collaborating, on Twine projects faster and easier. When you're ready to publish or test, you simply compile all your project files into an .html file with Tweego.

## Development

You will need a recent version of [NodeJS](https://nodejs.org),
as well as [Yarn](https://yarnpkg.com/), which you can install by running `npm install -g yarn` once you have NodeJS installed.

Once you've cloned the project, run `yarn install` to install the required dependencies.

You will also need to download Tweego.
You can do so so either by running `yarn install-compiler`,
or by downloading it from [here.](https://www.motoslave.net/tweego/) and placing the contents inside _/.twine_.
if the _.twine_ folder does not already exist, just create one.

* Use `yarn test` to run tests.
* Use `yarn build` to build the output files. (Note that this will return a File Not Found error, but it is working) The entire thing will output to the /gh-pages folder as the index.html file.
* Use `yarn start` to start a development build that automatically rebuilds on file changes.

## Deploying

To deploy the latest version, build the .html file as `gh-pages/index.html` and run either `npm run deploy`, or `yarn deploy`.

## Built With

* [Twine](https://twinery.org/) - The front end framework 
* [Sugarcube 2](https://www.motoslave.net/sugarcube/2/) - A language for Twine
* [TweeGo](https://www.motoslave.net/tweego/) - Twine command line compiler
