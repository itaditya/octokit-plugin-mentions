const test = require('tape');
const tapSpec = require('tap-spec');

const getMentions = require('./getMentions');

test
  .createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('getMentions', assert => {
  const comment = {
    body: 'Hi @itaditya, I have talked to @foo and @bar'
  }
  const mentions = getMentions({ comment });
  assert.deepEquals(mentions, ['itaditya', 'foo', 'bar'], 'Users Mentioned should be itaditya, foo, bar');
  assert.end();
});
