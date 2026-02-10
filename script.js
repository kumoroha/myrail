function table(datalist) {
  let input;
  if (datalist.clear == 'true') {
    input = '<input type="checkbox" checked>';
  } else {
    input= '<input type="checkbox">';
  }
  const rows = datalist.map(char => 
    `<tr><td>${char.name}</td>
    <td>${char.comp}</td>
    <td>${char.line}</td>
    <td>${char.sect}</td>
    <td>${char.opekm}</td>
    <td>${char.likm}</td>
    <td>${char.date}</td>
    <td>${input}</td>
    </tr>`).join('');
  document.getElementById('shinkansen').innerHTML = rows;
}
table(datalist);
