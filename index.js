const getMentions = require('./getMentions');

function mentionsPlugin (octokit) {
  octokit.getMentions = getMentions;
}

module.exports = mentionsPlugin;

