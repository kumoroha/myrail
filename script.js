function table(datalist, tableid) {
  const rows = datalist.map(char => {
    let input;
    if ( char[6] == 'true' || char[6] == true ) {
      input = '<input type="checkbox" checked>';
    } else {
      input = '<input type="checkbox">';
    }
    let first;
    if ( char[0] != '' && char[0] != null ) {
      first = `<td>${char[0]}</td>`;
    } else {
      first = '';
    }
    return `<tr>
    ${first}
    <td>${char[1]}</td>
    <td>${char[2]}</td>
    <td>${char[3]}</td>
    <td>${char[4]}</td>
    <td>${char[5]}</td>
    <td>${input}</td>
    </tr>`;
  }).join('');
  document.getElementById(tableid).innerHTML = rows;
}
table(datalist, 'table_shinkansen');
table(datalist_jr, 'table_jr');
