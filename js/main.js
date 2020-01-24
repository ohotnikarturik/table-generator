const form = document.querySelector('#form');
const btnGenerate = document.querySelector('#btn__generate');
const btnGet = document.querySelector('#btn__get');
const table = document.querySelector('#table');
const resultCode = document.querySelector('.table-code');

btnGenerate.addEventListener('click', (e) => {
  e.preventDefault();

  table.innerHTML = '';

  const inputRowsValue = form.elements.numberRows.value;
  const inputColumnsValue = form.elements.numberColumns.value;

  createHeadTable(inputColumnsValue); //to create head of table
  createRowsAndColumns(inputRowsValue, inputColumnsValue); //to create rows and columns of table
  makeCollapse(); // to make collapse or not for table
});



// to create head table
let createHeadTable = (inputColumnsValue) => {

  for (let i = 0; i < inputColumnsValue; i++) {
    const inputHead = document.createElement('th');
    const headCell = document.createElement('td');

    const inputBorderWidth = form.elements.borderWidth.value;
    const inputHeadBgColor = form.elements.headBgColor.value;
    const inputBorderBgColor = form.elements.borderColor.value;

    inputHead.appendChild(headCell);
    table.appendChild(inputHead).textContent = 'Head' + ' ' + [i + 1];

    inputHead.style.color = '#ffffff';
    inputHead.style.border = inputBorderWidth + 'px';
    inputHead.style.borderStyle = 'solid';
    inputHead.style.backgroundColor = inputHeadBgColor;
    inputHead.style.borderColor = inputBorderBgColor;
  }
};

// to create rows and columns
let createRowsAndColumns = (inputRowsValue, inputColumnsValue) => {
  for (let i = 0; i < inputRowsValue; i++) {
    const row = document.createElement('tr');
    row.setAttribute('class', 'row');
    table.appendChild(row);

    const inputBorderWidth = form.elements.borderWidth.value;
    const inputBorderBgColor = form.elements.borderColor.value;
    const inputRowBgColorEven = form.elements.rowBgColorEven.value;
    const inputRowBgColorOdd = form.elements.rowBgColorOdd.value;
    const inputFontColor= form.elements.fontColor.value;
    const inputTableWidth = form.elements.tableWidth.value;
    const inputFontFamily = form.elements.fontFamily.value;
    const inputFontWeight = form.elements.fontWeight.value;
    const inputTextAlign = form.elements.textAlign.value;
    const inputFontSize = form.elements.fontSize.value;


    row.style.border = inputBorderWidth + 'px';
    row.style.borderStyle = 'solid';
    row.style.borderColor = inputBorderBgColor;


    table.style.border = inputBorderWidth + 'px';

    table.style.borderColor = inputBorderBgColor;
    table.style.fontWeight = inputFontWeight;
    table.style.textAlign = inputTextAlign;
    table.style.fontSize = inputFontSize + 'px';
    table.style.fontFamily = inputFontFamily;
    table.style.width = inputTableWidth + '%';


    if (i % 2 === 0) {
      row.style.backgroundColor = inputRowBgColorEven;
    } else {
      row.style.backgroundColor = inputRowBgColorOdd;
    }

    for (let i = 0; i < inputColumnsValue; i++) {
      const column = document.createElement('td');
      column.setAttribute('class', 'column');
      row.appendChild(column);

      column.textContent = 'value';
      column.style.border = inputBorderWidth + 'px';
      column.style.borderStyle = 'solid';
      column.style.borderColor = inputBorderBgColor;
      column.style.color = inputFontColor;
      // column.style.padding = '5px';
    }

  }
};

// to click checkbox for collapse border
let makeCollapse = () => {
  const checkboxBorderCollapse = form.elements.borderCollapse.checked;

  if (checkboxBorderCollapse === true) {
    table.style.borderCollapse = 'collapse';
  } else {
    table.style.borderCollapse = 'separate';
  }
};

// click to get code of table
btnGet.addEventListener('click', (e) => {
  e.preventDefault();
  resultCode.style.backgroundColor = 'lightblue';
  resultCode.innerText = table.outerHTML
});



form.addEventListener('click', () => {
  table.innerHTML = '';

  table.innerHTML = '';

  const inputRowsValue = form.elements.numberRows.value;
  const inputColumnsValue = form.elements.numberColumns.value;

  createHeadTable(inputColumnsValue); //to create head of table
  createRowsAndColumns(inputRowsValue, inputColumnsValue); //to create rows and columns of table
  makeCollapse(); // to make collapse or not for table

});
















