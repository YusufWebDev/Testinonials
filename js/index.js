/* create a constructor function for each testimonial.
eg.*/

function Testimonial(imageSRC, text, name, title) {
	this.imageSrc = imageSRC;
	this.text = text;
	this.name = name;
	this.title = title;
}

// create new new person for testimonial.
// create eventListener for each button on page (2 only in this caes)
// button1 will simply change innerHTMl of elements on page to person1 details.
// button2 will simply change innerHTML of elements on page to person2 details.
// for more persons, this code can easily be changed to an array of persons and loop through to
// show the different persons details on the page.
// SIMPLE XD

const profileImage = document.querySelector(".profile-image");
const testimonialText = document.querySelector(".testimonial-text");
const profileName = document.querySelector(".name");
const title = document.querySelector("title");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

tanya = new Testimonial(
	"./images/image-tanya.jpg",
	"“ I’ve been interested in coding for a while but never taken the jump,	until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
	"Tanya Sinclair",
	"UX Engineer"
);

john = new Testimonial(
	"./images/image-john.jpg",
	"“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
	"John Tarkpor",
	"Junior Front-end Developer"
);

console.log(tanya.text);

function setTanya() {
	profileImage.src = tanya.imageSrc;
	testimonialText.innerText = tanya.text;
	profileName.innerText = tanya.name;
	title.innerText = tanya.title;
}
function setJohn() {
	profileImage.src = john.imageSrc;
	testimonialText.innerText = john.text;
	profileName.innerText = john.name;
	title.innerText = john.title;
}

// TODO :
// Add event listeners to the 2 buttons to change innerHTML

prevBtn.addEventListener("click", setTanya);
nextBtn.addEventListener("click", setJohn);
