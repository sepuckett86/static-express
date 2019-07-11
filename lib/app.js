const express = require('express');
const app = express();
const path = require('path');

const colors = [
  { name: 'red', hex: 'FF0000', r: 255, g: 0, b: 0 },
  { name: 'purple', hex: '4D2C73', r: 77, g: 44, b: 115 },
  { name: 'violet', hex: '76276C', r: 118, g: 39, b: 108 },
  { name: 'green', hex: '8DA336', r: 141, g: 163, b: 54 },
  { name: 'dusty-green', hex: 'AAA239', r: 170, g: 162, b: 57 }
];

app.use(express.static('./public'));

app.get('/colors', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/colors/colors.html'));
});

app.get('/api/v1/colors', (req, res) => {
  res.send(colors);
});

app.get('/api/v1/colors/:name', (req, res) => {
  const name = req.params.name;
  const color = colors.find(color => color.name === name);
  res.send(color);
});

module.exports = app;
