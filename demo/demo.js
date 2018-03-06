const octokit = require('@octokit/rest')();
const mentionsPlugin = require('octokit-plugin-mentions');

octokit.plugin(mentionsPlugin)

(async () => {
  const owner = 'itaditya';
  const repo = 'circlebars';
  const number = 2;
  
  const apiResponse = await octokit.issues.getComments({ owner, repo, number });
  const comment = apiResponse.data[1];
  const mentions = octokit.getMentions({ comment });
  console.log('mentions', mentions);
})()
