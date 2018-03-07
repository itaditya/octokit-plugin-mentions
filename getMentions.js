const getMentions = ({ comment }) => {
  const commentBody = comment.body;
  const mentionPatter = /\B@[a-z0-9_-]+/gi;
  const mentionsList = commentBody.match(mentionPatter);
  return mentionsList.map(user => user.substring(1));
}

module.exports = getMentions;
