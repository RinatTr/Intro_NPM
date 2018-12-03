const figlet = require('figlet');
const prompt = require('prompt');

let availFonts = figlet.fontsSync();

let schema = {
  properties: {
    text: {
      message: 'Enter desired text',
      required: true
    },
    font: {
      message: 'Enter desired font',
      conform: function (input) {
        return availFonts.includes(input) ? true : console.log(availFonts);
      }
    }
  }
};
prompt.start();
prompt.get(schema, function(err, userInput) {
  console.log(figlet.textSync(userInput.text, {
    font: `${userInput.font}`,
    horizontalLayout: 'default',
    verticalLayout: 'default'
}))

});
