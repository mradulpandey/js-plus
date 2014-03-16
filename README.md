Js-Plus

Current Version: 

Setup project :

1. Install node.js
2. Install grun command line tool using node package manager:
        npm install -g grunt-cli
2. Install project dependencies with node package manager:
        npm install


Structure description:

package.json :  This file is used by npm to store metadata for projects published as npm modules. You will list grunt and the Grunt plugins your project needs as devDependencies in this file.
Grungfile.js :  This file is used to configure or define tasks and load Grunt plugins.
src          :  This folder contains source code.
tests        :  This folder contains test cases code.
libs         :  This folder contains third party libraries.
dest         :  This folder contains final distribution and development js.