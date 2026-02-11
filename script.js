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
    let date;
    if ( char[5] == '不明' || char[5] == '' || char[5] == null ) {
      date = '不明';
    } else {
      date = `${char[5]}`;
    }

    return `<tr>
    ${first}
    <td>${char[1]}</td>
    <td>${char[2]}</td>
    <td>${char[3]}</td>
    <td>${char[4]}</td>
    <td>${date}</td>
    <td>${input}</td>
    </tr>`;
  }).join('');
  document.getElementById(tableid).innerHTML = rows;
}
table(datalist_shinkansen, 'table_shinkansen');
table(datalist_jr, 'table_jr');
