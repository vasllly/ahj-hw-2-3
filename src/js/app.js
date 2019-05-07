const input = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

const table = document.getElementById('table');
if (!(table instanceof HTMLElement)) {
  throw new Error('container is not HTMLElement');
}

function redraw(films) {
  table.removeChild(document.getElementById('tbody'));
  const tbody = document.createElement('tbody');
  tbody.id = 'tbody';
  table.appendChild(tbody);
  films.forEach((film) => {
    const element = document.createElement('tr');
    const id = document.createElement('td');
    id.textContent = film.id;
    const title = document.createElement('td');
    title.textContent = film.title;
    const year = document.createElement('td');
    year.textContent = `(${film.year})`;
    const imdb = document.createElement('td');
    imdb.textContent = film.imdb.toFixed(2);
    element.appendChild(id);
    element.appendChild(title);
    element.appendChild(year);
    element.appendChild(imdb);
    tbody.appendChild(element);
  });
}

redraw(input);

let step = 0;
setInterval(() => {
  const id = document.getElementById('id');
  const title = document.getElementById('title');
  const year = document.getElementById('year');
  const imdb = document.getElementById('imdb');

  // по возрастанию - по первому полю (остальные поля не учитываются)
  if (step === 0) {
    input.sort((filmA, filmB) => filmA.id - filmB.id);
    redraw(input);
    imdb.classList = '';
    id.classList = 'darr';
  }

  // по убыванию - по первому полю (остальные поля не учитываются)
  if (step === 1) {
    input.sort((filmA, filmB) => filmB.id - filmA.id);
    redraw(input);
    id.classList = 'uarr';
  }

  // по возрастанию - по второму полю (остальные поля не учитываются)
  if (step === 2) {
    input.sort((filmA, filmB) => filmA.title.localeCompare(filmB.title));
    redraw(input);
    id.classList = '';
    title.classList = 'darr';
  }

  // по убыванию - по второму полю (остальные поля не учитываются)
  if (step === 3) {
    input.sort((filmA, filmB) => filmB.title.localeCompare(filmA.title));
    redraw(input);
    title.classList = 'uarr';
  }
  // по возрастанию - по третьему полю (остальные поля не учитываются)
  if (step === 4) {
    input.sort((filmA, filmB) => filmA.year - filmB.year);
    redraw(input);
    title.classList = '';
    year.classList = 'darr';
  }

  // по убыванию - по третьему полю (остальные поля не учитываются)
  if (step === 5) {
    input.sort((filmA, filmB) => filmB.year - filmA.year);
    redraw(input);
    year.classList = 'uarr';
  }

  // то же самое по четвёртому полю
  if (step === 6) {
    input.sort((filmA, filmB) => filmA.imdb - filmB.imdb);
    redraw(input);
    year.classList = '';
    imdb.classList = 'darr';
  }

  if (step === 7) {
    input.sort((filmA, filmB) => filmB.imdb - filmA.imdb);
    redraw(input);
    imdb.classList = 'uarr';
  }

  // всё повторяется с первого пункта
  step = step === 7 ? 0 : step + 1;
}, 2000);
