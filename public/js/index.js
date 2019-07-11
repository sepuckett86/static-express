const main = document.getElementById('root');
const ul = document.createElement('ul');

fetch('/api/v1/colors')
  .then(res => res.json())
  .then(colors => {
    colors.forEach(color => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `/colors/?color=${color.name}`;
      a.textContent = color.name;
      li.appendChild(a);
      ul.appendChild(li);
    });
  });

main.appendChild(ul);
