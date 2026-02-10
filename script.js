function table(datalist) {
  const rows = datalist.map(char => 
    `<tr><td>${char.name}</td><td>${char.title}</td><td>${char.color}</td></tr>`).join('');
  document.getElementById('shinkansen').innerHTML = rows;
}
table(datalist);
