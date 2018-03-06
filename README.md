## octokit-plugin-mentions

> It allows you to parse the names of users mentioned in a github comment easily.


### How To Use

```js
const octokit = require('@octokit/rest')();
const mentionsPlugin = require('octokit-plugin-mentions'); // Import the plugin

octokit.plugin(mentionsPlugin); // Plug-in the plugin

octokit.getMentions({ comment }) // Call the plugin methods

// For a working example try out the demo example in /demo/demo.js
```

### List of available methods

* **octokit.getMentions({ comment })** : It takes a github comment and returns an array containing list of all users mentioned in the comment.

### How to Contribute

* Fork and Clone this repo.
* On your local machine run `npm link` in the root of the cloned project.
* `cd` into demo folder and run `npm link octokit-plugin-mentions`.
* Now make changes in the `index.js` and test it via `demo/demo.js` file.
* When you are ready create a branch and submit a PR.
