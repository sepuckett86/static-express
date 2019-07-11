const main = document.getElementById('root');

const search = new URLSearchParams(window.location.search);
const color = search.get('color');

fetch(`/api/v1/colors/${color}`)
  .then(res => res.json())
  .then(res => {
    const hex = res.hex;
    // const r = res.r;
    // const g = res.g;
    // const b = res.b;
    const style = `background: #${hex}`;
    main.style = style;
  });
