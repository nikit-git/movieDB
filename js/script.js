'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]')
        //   deleteBtn = document.querySelectorAll('.delete')
          ;

    addForm.addEventListener('submit', event => {
        event.preventDefault();
        
        let newFilm = addInput.value;
        const isFavourite = checkbox.checked;
        
        if (newFilm != '') { // if (newFilm)
            if (newFilm.length > 21) {
                newFilm = newFilm.slice(0, 21) + '...'
            }
            if(isFavourite) {
                console.log('Добавлен любимый фильм');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            renewMovieList(movieDB.movies, movieList);
        }

        event.target.reset(); //addForm.reset();  
    });

    const applyChanges = () => {
        promo__genre.textContent = 'ДРАМА';
        promo__bg.style.background = 'url("/img/bg.jpg")';
    };
    
    const sortArr = (arr) => {
        arr.sort();
    };

    const deleteAdv = arr => {
        arr.forEach(element => {
            element.remove();
        });
    };

    function renewMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((movie, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${movie}
                    <div class="delete"></div>
                </li>
            `;
        });
        document.querySelectorAll('.delete').forEach((element, i) => {
            element.addEventListener('click', () => {
                element.parentNode.remove();
                movieDB.movies.splice(i, 1);
                renewMovieList(films, parent);
            });
        });
    }

    applyChanges();
    deleteAdv(promo__adv);
    renewMovieList(movieDB.movies, movieList);
});
