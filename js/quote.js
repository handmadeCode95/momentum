const quotes = [
	{
		quote: "You either die a hero or live long enough to see yourself become the villian.",
		author: "- Harvey Dent / Batman -"
	},
	{
		quote: "The night is darkest before the dawn. And I promise you, the dawn is coming.",
		author: "- Harvey Dent -"
	},
	{
		quote: "Why so serious?",
		author: "- The Joker -"
	},
	{
		quote: "It’s not who we are underneath, but what we do that defines us.",
		author: "- Rachel Dawes -"
	},
	{
		quote: "Sometimes the truth isn't good enough, sometimes people deserve more. Sometimes peple deserve to have their faith rewarded.",
		author: "- Batman -"
	},
	{
		quote: "We'll hunt him because he take it, because he's not a hero. He's a silent guardian, a watchful protector, a Dark Knight.",
		author: "- James Gordon -"
	},
	{
		quote: "The training is nothing! The will is everything! The will to act.",
		author: "- Henri Ducard -"
	},
	{
		quote: "Some men aren't looking for anything logical, like money. They can't be bought, bullied, reasoned, or negotiated with. Some men just want to watch the world burn.",
		author: "- Alfred -"
	},
	{
		quote: "Why do we fall? So we can learn to pick ourselves back up.",
		author: "- Alfred -"
	},
	{
		quote: "A hero can be anyone. Even a man doing something as simple and reassuring as putting a coat around a little boy’s shoulders to let him know that the world hadn’t ended.",
		author: "- Batman -"
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor((Math.random() * quotes.length))];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;