function table(datalist) {
  let input;
  if (datalist[7] == 'true') {
    input = '<input type="checkbox" checked>';
  } else {
    input= '<input type="checkbox">';
  }
  const rows = datalist.map(char => 
    `<tr>
    <td>${char[0]}</td>
    <td>${char[1]}</td>
    <td>${char[2]}</td>
    <td>${char[3]}</td>
    <td>${char[4]}</td>
    <td>${char[5]}</td>
    <td>${char[6]}</td>
    <td>${input}</td>
    </tr>`).join('');
  document.getElementById('table_shinkansen').innerHTML = rows;
}
table(datalist);
