/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  hitLike(numberOfLikes) {
    this.numberOfLikes++;
  }

  addComment(comments) {
    this.comments.push(comments);
  }

};

var tweet1 = new Tweet("Rocky", "Woof, woof!", "10/28/2021", 10, ["Woof, woof!", "Bark!"]);
console.log(tweet1);

var tweet2 = new Tweet("Brigid", "I love you, Rocky!", "10/28/2021", 7, ["Woof!", "Rocky is a good boy!"]);
console.log(tweet2);
tweet2.hitLike();
console.log(tweet2);

var tweet3 = new Tweet("Todd", "Rocky for president!", "10/28/2021", 157, ["Rocky 2024", "Woof, woof, woof!"]);
console.log(tweet3);
tweet3.addComment("Rocky will save this country!");
console.log(tweet3);
