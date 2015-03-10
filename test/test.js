var random = require('../index');

console.log(random.version);

console.log(random.web.ip());
console.log(random.web.domain());

console.log(random.word.word());
console.log(random.word.character());
console.log(random.word.character('upper'));

console.log(random.uuid());
