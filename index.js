const techJokes = {
	0: "Click >> to get next jokes",
	1: "How do trees get on the Internet? They log in.",
	2: "What do computers like to eat? Chips.",
	3: "What do you call a space magician? A flying saucerer.",
	4: "What is a computer’s first sign of old age? Loss of memory.",
	5: "What does a baby computer call his father? Instead of Da-da it says 'Da-ta.'",
	6: "What is an astronaut’s favorite control on the computer keyboard? The space bar.",
	7: "What happened when the computer fell on the floor? It slipped a disk.",
	8: "How does a boy cell phone propose to his girlfriend? He gives her a ring, of course.",
	9: "Why was there a bug in the computer? It was looking for a byte to eat.",
	10: "What is a computer virus? A terminal illness.",
	11: "How did the mouse get out of the Roman Cathedral? He clicked on an icon and opened a window.",
	12: "What kind of doctor fixes broken websites? A URLologist.",
	13: "Have you heard about the Disney virus? It makes everything on your computer go Goofy.",
	14: "What happened when a dragon breathed on several Macintosh computers? He wound up with baked Apples!",
	15: "Why did the chicken cross the Web? To get to the other site.",
	16: "Why did the computer go to a doctor? It thought it had a terminal illness.",
	17: "Knock-knock! Who’s there? I-M. I-M, who? I-M on the computer, and I can’t answer the door.",
	18: "Jokes Ended",
};

let curr_index = 0;

let jokeno = document.getElementById("joke");

document.getElementById("backward").addEventListener("click", () => {
	if (curr_index > 0) {
		curr_index--;
		jokeno.textContent = techJokes[curr_index];
	}
});

document.getElementById("forward").addEventListener("click", () => {
	if (curr_index < Object.keys(techJokes).length - 1) {
		curr_index++;
		jokeno.textContent = techJokes[curr_index];
	}
});
