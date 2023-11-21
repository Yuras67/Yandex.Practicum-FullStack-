let phrases = [
  { text: 'send a funny gif to a friend', image: 'C:/Users/mrfun/Downloads/Сайт(Яндекс.Практикум)/image/1.gif' },
  { text: 'view discounts on air tickets', image: 'C:/Users/mrfun/Downloads/Сайт(Яндекс.Практикум)/image/2.png' },
  { text: 'figure out what the rappers are singing about', image: 'C:/Users/mrfun/Downloads/Сайт(Яндекс.Практикум)/image/3.png' },
  { text: 'Yuri Dud', image: 'C:/Users/mrfun/Downloads/Сайт(Яндекс.Практикум)/image/4.png' },
  { text: 'arrange the books on the shelf by color', image: 'C:/Users/mrfun/Downloads/Сайт(Яндекс.Практикум)/image/5.png' },
  { text: 'read about salaries in San Francisco', image: 'C:/Users/mrfun/Downloads/Сайт(Яндекс.Практикум)/image/6.png' },
  { text: 'read the news and be horrified in the comments', image: 'C:/Users/mrfun/Downloads/Сайт(Яндекс.Практикум)/image/7.png' },
  { text: 'get into the flow of sad songs and remember all the mistakes of youth', image: 'C:/Users/mrfun/Downloads/Сайт(Яндекс.Практикум)/image/8.png' },
  { text: 'watch the trailer of the series and at the same time the first season', image: 'C:/Users/mrfun/Downloads/Сайт(Яндекс.Практикум)/image/9.png' },
  { text: 'check unread in Telegram channels', image: 'C:/Users/mrfun/Downloads/Сайт(Яндекс.Практикум)/image/10.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
	smoothly(phrase, 'textContent', randomElement.text);
	image.src = smoothly(image, 'src', randomElement.image);
  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});



for (let i = 0; i <= 2; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}
