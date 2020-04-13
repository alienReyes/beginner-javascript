const people = [{
    name: 'Wes',
    cool: true,
    country: 'Canada'
  },
  {
    name: 'Scott',
    cool: true,
    country: 'Merica'
  },
  {
    name: 'Snickers',
    cool: false,
    country: 'Dog Country'
  },
];

people.forEach((person, index) => {
  // console group and other options
  console.groupCollapsed(`${person.name}`);
    console.warn(person.country);
    console.log(person.name);
    console.error(person.cool);
  console.groupEnd(`${person.name}`);
});

// Console Methods

// Callstack, stack trace 

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  console.count(`Running doctorize`)
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function (e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}