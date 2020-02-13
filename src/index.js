// 1. In the file where the function is sitting
// you add an export statement -> export { nameOfTheFunction }
// 2. In the file where you want to use the function
// you add an import statement -> import { nameOfTheFunction }
// import { fetchMovies, list } from './movie'
import { initSortable } from './plugins/sortable'; // <-- add this
import { initMarkdown } from './plugins/markdown';


initMarkdown()
// fetchMovies('harry potter'); // on 1st page load
// initSortable()

// const form = document.querySelector('#search-form');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   list.innerHTML = '';
//   const input = document.querySelector('#search-input');
//   fetchMovies(input.value);
// });
