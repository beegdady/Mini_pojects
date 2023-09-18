


let btn = document.querySelector('.cta');
var post_cont = document.querySelector('.post');
var author = document.querySelector('.author')

const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr.",
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
    },
    {
      text: "The only thing necessary for the triumph of evil is for good men to do nothing.",
      author: "Edmund Burke",
    },
    {
      text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "Life is really simple, but we insist on making it complicated.",
      author: "Confucius",
    },
    {
      text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein",
    },
    {
      text: "Don't count the days, make the days count.",
      author: "Muhammad Ali",
    },
    {
      text: "To succeed in life, you need two things: ignorance and confidence.",
      author: "Mark Twain",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      text: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
    },
    {
      text: "In the midst of chaos, there is also opportunity.",
      author: "Sun Tzu",
    },
    {
      text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
      author: "Jordan Belfort",
    },
    {
      text: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
    },
    {
      text: "Simplicity is the ultimate sophistication.",
      author: "Leonardo da Vinci",
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
  ];



function getRandInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);

 }




function generatePost(){
    postNum = getRandInt(0,19)
    let quote = quotes[postNum]
    return [quote.author, quote.text]
}


function showPost(){
    let  post = generatePost()
    post_cont.innerHTML =  post[1]
    author.innerHTML = post[0]
   
}


showPost()