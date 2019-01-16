// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "Malfoy let out a terrible scream and bolted—so did Fang. The hooded figure raised its head and looked right at Harry—unicorn blood was dribbling down its front. It got to its feet and came swiftly toward Harry—he couldn’t move for fear.",
      "Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognizing it. On the rare occasion that they did catch a real witch or wizard, burning had no effect whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation. Indeed, Wendelin the Weird enjoyed being burned so much that she allowed herself to be caught no less than forty seven times in various disguises.",
      "Got to?' said Dumbledore. 'Of course you've got to! But not because of the prophecy! Because you, yourself, will never rest until you've tried! We both know it! Imagine, please, just for a  moment, that you had never heard that prophecy! How would you feel about Voldemort now? Think!'",
      "'I trust that you also noticed that Tom riddle was already highly self-sufficient ,secretive and, apparently, friendless? He did not want help on companionship on his trip to diagon Alley. He preferred to operate alone. The adult Voldemort is the same. You will hear many of his Death Eaters claiming that they are in in his confidence,that they alone are close to him, even understand him. They are deluded. Lord Voldemort has never had a friend, nor do I believe that he has ever wanted one.'",
      "And from then Hermione Granger became their best friend. There are some things you can't share without ending up liking each other, and knocking out a twelve-foot mountain troll is one of them.",
      "Harry felt drained, empty. Never once, in six years, had Dumbledore told Harry that they had both lived and lost loved ones in Godrics Hollow. Why? Were Lily and James buried close to Dumbledore's mother and sister? Had Dumbledore visited their graves, perhaps walked past Lily's and Jame's to do so? And he had never once told Harry ... never bothered to say.",
      "Thinking that he should probably wait for Filch to come back, Harry sank into a moth-eaten chair next to the desk. There was only one thing on it apart from his half-completed form: a large, glossy, purple envelope with silver lettering on the front. With a quick glance at the door to check that Filch wasn't on his way back, Harry picked up the envelope and read: kwikspell A Correspondence Course in Beginners' Magic.",
      "The voice was growing fainter. Harry was sure it was moving away - moving upward. A mixture of fear and excitement gripped him as he stared at the dark ceiling; how could it be moving upward? Was it a phantom, to whom stone ceilings didn't matter? 'This way', he shouted, and he began to run, up the stairs, into the entrance hall. It was no good hoping to hear anything here, the babble of talk from the Halloween feast was echoing out of the Great Hall. Harry sprinted up the marble staircase to the first floor, Ron and Hermione clattering behind him. ",
      "Remember, if the time should come, when you have to make a choice between what is right and what is easy, remember what happened to a boy who was good, and kind, and brave, because he strayed across the path of Lord Voldemort. Remember Cedric Diggory.",
      "'So the boy . . . the boy must die?' asked Snape quite calmly. And Voldemort himself must do it, Severus. That is essential. Another long silence. Then Snape said, 'I thought . . . all these years . . . that we were protecting him for her. For Lily.'",
      "Voldemort was dead, killed by his own rebounding curse, and Harry stood with two wands in his hands, staring down at his enemy's shell.",
      "'Go on, have a pasty,' said Harry, who had never had anything to share before or, indeed, anyone to share it with. It was a nice feeling, sitting there with Ron, eating their way through all Harry's pasties, cakes, and candies.",
      "Harry watched Dumbledore striding up and down in front of him, and thought. He thought of his mother, his father and Sirius. He thought of Cedric Diggory. He thought of all that terrible deeds he knew Lord Voldemort had done. A flame seemed to leap inside his chest, searing his throat.",
      "It was the unicorn all right, and it was dead. Harry had never seen anything so beautiful and sad. Its long, slender legs were stuck out at odd angles where it had fallen and its mane was spread pearly-white on the dark leaves. Harry had taken one step toward it when a slithering sound made him freeze where he stood. A bush on the edge of the clearing quivered. . . . Then, out of the shadows, a hooded figure came crawling across the ground like some stalking beast. Harry, Malfoy, and Fang stood transfixed. The cloaked figure reached the unicorn, lowered its head over the wound in the animal’s side, and began to drink its blood.",
      "Slowly, very slowly, he sat up, and as he did so he felt more alive, and more aware of his own living body than ever before. Why had he never appreciated what a miracle he was, brain and nerve and bounding heart? It would all be gone...or at least, he would be gone from it."
    
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 350;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that generates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;