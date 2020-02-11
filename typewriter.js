const sentence = "hello there friend ... i miss mr. robot";

// animates each character of the sentence
for (let index = 0; index < sentence.length; index++) {
  setTimeout(() => {
    process.stdout.write(sentence[index]);
  }, index * 50)
}

// creates a new line by using the length of the string
// and multiplying it by 50 just like all the other characters
setTimeout(() => {
  process.stdout.write("\n");
}, sentence.length * 50);
