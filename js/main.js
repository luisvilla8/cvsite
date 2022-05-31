const skills = [
  {
    name: 'JavaScript'
  },
  {
    name: 'HTML'
  },
  {
    name: 'CSS'
  },
  {
    name: 'React'
  },
  {
    name: 'Git'
  },
  {
    name: 'SQLServer, MYSQL'
  },
  {
    name: 'PHP'
  },
  {
    name: 'Figma'
  },
  {
    name: 'GitHub'
  },
  {
    name: 'Photoshop'
  },
  {
    name: 'Microsoft Office'
  },
  {
    name: 'UX/UI'
  },
];

const $skillsList = document.querySelector(".skills__list");
const $fragment = document.createDocumentFragment();

skills.forEach( skill => {
  const $item = document.createElement('li');
  $item.className = 'skills__item';
  const $name = document.createElement('p');
  $name.innerText = skill.name;
  $name.className = 'skills__tech';
  // const $bar = document.createElement('div');
  // $bar.className = 'skills__bar';
  // const $barPercent = document.createElement('div');
  // $barPercent.className = 'skills__percent';
  // $barPercent.style.width = `${skill.percent}%`;

  // $bar.appendChild($barPercent);
  $item.appendChild($name);
  // $item.appendChild($bar);
  console.log($item)
  $fragment.appendChild($item);
});
$skillsList.appendChild($fragment);