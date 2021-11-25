let emoji = require('emoji.json')

function getNameEmoji() {
  let emoji_name = [];
  for (i = 0; i < emoji.length; i++) {
    emoji_name.push(emoji[i].name)
  }
  return emoji_name;
}

async function displayNameEmoji() {
  const { AutoComplete } = require('enquirer');

  const prompt = new AutoComplete({
    name: 'emoji',
    message: 'Pick your favorite emoji',
    limit: 10,
    initial: 3,
    choices: getNameEmoji()
  });

  await prompt.run()
    .then(answer => {
      for (i = 0; i < emoji.length; i++) {
        if (emoji[i].name == answer) {
          console.log("Your favorite emoji is", emoji[i].char);
        }
      }
    })
    .catch(console.error);
}
displayNameEmoji();
