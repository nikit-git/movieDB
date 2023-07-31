'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const promo__adv = document.querySelectorAll('.promo__adv img'),
    promo__genre = document.querySelector('.promo__genre'),
    promo__bg = document.querySelector('.promo__bg'),
    movieList = document.querySelector('.promo__interactive-list');


promo__adv.forEach(element => {
    element.remove();
})
promo__genre.textContent = 'ДРАМА';
promo__bg.style.background = 'url("/img/bg.jpg")'
movieList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((movie, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${movie}
            <div class="delete"></div>
        </li>
    `;
});