'use strict';

var COMMENTERS_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var COMMENTERS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COMMENTERS_PHRASES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var userPhotos = [];

for (var i = 0; i <= 24; i++) {
  userPhotos[i] = {
    url: 'photos/' + (i + 1) + '.jpg',
    description: 'description of photo ' + (i + 1),
    likes: getRandomIntInclusive(15, 200),
    comments: generateComments(5),
  };
}

var pictureTemplate = document.getElementById('picture').content;
var pictureBlock = document.querySelector('.pictures');

for (var j = 0; j < userPhotos.length; j++) {
  var currentPhoto = pictureTemplate.cloneNode(true);
  currentPhoto.querySelector('.picture__img').src = userPhotos[j].url;
  currentPhoto.querySelector('.picture__comments').textContent = userPhotos[j].comments.length;
  currentPhoto.querySelector('.picture__likes').textContent = userPhotos[j].likes;

  pictureBlock.append(currentPhoto);
}

var bigPicture = document.querySelector('.big-picture');
bigPicture.querySelector('.big-picture__img img').src = userPhotos[0].url;
bigPicture.querySelector('.social .likes-count').textContent = userPhotos[0].likes;
bigPicture.querySelector('.social .comments-count').textContent = userPhotos[0].comments.length;

var socialСommentTemplate = document.getElementById('social-comment').content;
var socialComments = bigPicture.querySelector('.social ul.social__comments');
socialComments.innerHTML = '';

for (var s = 0; s < userPhotos[0].comments.length; s++) {
  var currentSocialСomment = socialСommentTemplate.cloneNode(true);
  currentSocialСomment.querySelector('img').src = userPhotos[0].comments[s].avatar;
  currentSocialСomment.querySelector('img').alt = userPhotos[0].comments[s].name;
  currentSocialСomment.querySelector('.social__text').textContent = userPhotos[0].comments[s].message;

  socialComments.append(currentSocialСomment);
}

bigPicture.classList.remove('hidden');


// FUNCTIONS GOES BELOW

// see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCommenterName() {
  return COMMENTERS_NAMES[getRandomIntInclusive(0, COMMENTERS_NAMES.length - 1)
  ] + ' ' +
  COMMENTERS_SURNAMES[getRandomIntInclusive(0, COMMENTERS_SURNAMES.length - 1)];
}

function generateComments(max) {
  var comments = [];
  var commentsNum = getRandomIntInclusive(0, max);

  if (commentsNum > 0) {
    for (var k = 0; k <= commentsNum; k++) {
      comments[k] = {
        avatar: 'img/avatar-' + getRandomIntInclusive(2, 6) + '.svg',
        message: COMMENTERS_PHRASES[getRandomIntInclusive(0, COMMENTERS_PHRASES.length - 1)],
        name: generateCommenterName(),
      };
    }
  }

  return comments;
}
