const skills = [
  {
    name: 'Figma',
    percent: 70
  },
  {
    name: 'JavaScript',
    percent: 60
  },
  {
    name: 'HTML',
    percent: 80
  },
  {
    name: 'CSS',
    percent: 85
  },
  {
    name: 'React',
    percent: 50
  },
  {
    name: 'GitHub',
    percent: 50
  },
  {
    name: 'Photoshop',
    percent: 30
  },
  {
    name: 'Microsoft Office',
    percent: 70
  }
];

const $skillsList = document.querySelector(".skills__list");
const $fragment = document.createDocumentFragment();

skills.forEach( skill => {
  const $item = document.createElement('li');
  $item.className = 'skills__item';
  const $name = document.createElement('p');
  $name.innerText = skill.name;
  $name.className = 'skills__tech';
  const $bar = document.createElement('div');
  $bar.className = 'skills__bar';
  const $barPercent = document.createElement('div');
  $barPercent.className = 'skills__percent';
  $barPercent.style.width = `${skill.percent}%`;

  $bar.appendChild($barPercent);
  $item.appendChild($name);
  $item.appendChild($bar);

  $fragment.appendChild($item);
});
console.log($fragment)
$skillsList.appendChild($fragment);