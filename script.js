const btnSubmit = document.querySelector('.btn--submit');
const btnRating = document.querySelectorAll('.btn--rating');
const ratingPar = document.querySelector('.p--rating');
const container = document.querySelector('.container');
const containerThankYou = document.querySelector('.thank-you--container');
const pRatingContainer = document.querySelector('.p--rating--container');
const bgOrange = 'hsl(25, 97%, 53%)';
const bgDark = 'hsl(214, 19%, 24%)';
const colorWhite = 'hsl(0, 0%, 100%)';
const colorLightGray = 'hsl(217, 12%, 63%)';

/////////////////////////////////////////////////
// Rating buttons events
btnRating.forEach(el =>
  el.addEventListener('mouseout', function () {
    if (el.dataset.id === '1') el.style.backgroundColor = bgDark;
    el.style.color = colorLightGray;
    if (el.dataset.id === '2') el.style.backgroundColor = bgDark;
    el.style.color = colorLightGray;
    if (el.dataset.id === '3') el.style.backgroundColor = bgDark;
    el.style.color = colorLightGray;
    if (el.dataset.id === '4') el.style.backgroundColor = bgDark;
    el.style.color = colorLightGray;
    if (el.dataset.id === '5') el.style.backgroundColor = bgDark;
    el.style.color = colorLightGray;
  })
);

btnRating.forEach(el =>
  el.addEventListener('mouseover', function () {
    if (el.dataset.id === '1') el.style.backgroundColor = bgOrange;
    el.style.color = colorWhite;
    if (el.dataset.id === '2') el.style.backgroundColor = bgOrange;
    el.style.color = colorWhite;
    if (el.dataset.id === '3') el.style.backgroundColor = bgOrange;
    el.style.color = colorWhite;
    if (el.dataset.id === '4') el.style.backgroundColor = bgOrange;
    el.style.color = colorWhite;
    if (el.dataset.id === '5') el.style.backgroundColor = bgOrange;
    el.style.color = colorWhite;
  })
);

const pId = function (dataId) {
  const html = `
  <p class="p--rating">You selected ${dataId} out of 5</p>
  `;
  pRatingContainer.insertAdjacentHTML('afterbegin', html);
};

let dataId;
const findId = function (el) {
  dataId = el.dataset.id;
  el.style.backgroundColor = 'hsl(216, 12%, 54%)';
  el.style.color = colorWhite;
  // el.classList.add('active');
  return dataId;
};

let btnRat;

btnRating.forEach(el =>
  el.addEventListener('click', function () {
    btnRat = el;
    btnRat.addEventListener('mouseout', function () {
      btnRat.style.backgroundColor = 'hsl(216, 12%, 54%)';
      btnRat.style.color = colorWhite;
    });

    findId(el);
  })
);

// Submit button events
btnSubmit.addEventListener('mouseover', function () {
  btnSubmit.style.backgroundColor = colorWhite;
  btnSubmit.style.color = bgOrange;
});

btnSubmit.addEventListener('mouseout', function () {
  btnSubmit.style.backgroundColor = bgOrange;
  btnSubmit.style.color = colorWhite;
});

btnSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  pId(findId(btnRat));
  setTimeout(() => {
    container.classList.toggle('hidden');
    containerThankYou.classList.toggle('hidden');
  }, 500);
});
