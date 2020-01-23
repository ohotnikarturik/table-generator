const body = document.body;
const form = document.querySelector('#form');
const btnGenerate = document.querySelector('#btn__generate');
const btnGet = document.querySelector('#btn__get');
const table = document.querySelector('#table');
const resultCode = document.querySelector('.table-code');


// let autoGenerateFunc = () => { };

btnGenerate.addEventListener('click', (e) => {
  e.preventDefault();
  table.innerHTML = '';

  const inputRowsValue = form.elements.numberRows.value;
  const inputColumnsValue = form.elements.numberColumns.value;
  const inputTableWidth = form.elements.tableWidth.value;
  const inputBorderWidth = form.elements.borderWidth.value;
  const inputHeadBgColor = form.elements.headBgColor.value;
  const inputRowBgColorEven = form.elements.rowBgColorEven.value;
  const inputRowBgColorOdd = form.elements.rowBgColorOdd.value;
  const inputBorderBgColor = form.elements.borderColor.value;
  const inputFontColor= form.elements.fontColor.value;
  const checkboxBorderCollapse = form.elements.borderCollapse.checked;
  const inputFontFamily = form.elements.fontFamily.value;
  const inputFontWeight = form.elements.fontWeight.value;
  const inputTextAlign = form.elements.textAlign.value;
  const inputFontSize = form.elements.fontSize.value;
  
  createRowsFunction(inputRowsValue, inputColumnsValue, inputTableWidth, inputBorderWidth,
      inputHeadBgColor, inputRowBgColorEven, inputRowBgColorOdd, inputBorderBgColor, inputFontColor, checkboxBorderCollapse,
      inputFontWeight, inputTextAlign, inputFontSize, inputFontFamily);
});


// function to create rows
let createRowsFunction = (inputRowsValue, inputColumnsValue, inputTableWidth, inputBorderWidth,
                          inputHeadBgColor, inputRowBgColorEven, inputRowBgColorOdd, inputBorderBgColor, inputFontColor,
                          checkboxBorderCollapse, inputFontWeight, inputTextAlign, inputFontSize, inputFontFamily) => {

  for (let i = 0; i < inputColumnsValue; i++) {
    const inputHead = document.createElement('th');
    const headCell = document.createElement('td');

    inputHead.appendChild(headCell);
    table.appendChild(inputHead).textContent = 'Head' + ' ' + [i];

    inputHead.style.color = '#ffffff';
    inputHead.style.border = inputBorderWidth + 'px';
    inputHead.style.borderStyle = 'solid';
    inputHead.style.backgroundColor = inputHeadBgColor;
    inputHead.style.borderColor = inputBorderBgColor;
  }


  for (let i = 0; i < inputRowsValue; i++) {
    const row = document.createElement('tr');
    row.setAttribute('class', 'row');
    table.appendChild(row);

    row.style.border = inputBorderWidth + 'px';
    row.style.borderStyle = 'solid';
    row.style.borderColor = inputBorderBgColor;


    if (i % 2 === 0) {
      row.style.backgroundColor = inputRowBgColorEven;
    } else {
      row.style.backgroundColor = inputRowBgColorOdd;
    }

    for (let i = 0; i <inputColumnsValue; i++) {
      const column = document.createElement('td');
      column.setAttribute('class', 'column');
      row.appendChild(column);
      column.textContent = 'value';

      column.style.border = inputBorderWidth + 'px';
      column.style.borderStyle = 'solid';
      column.style.borderColor = inputBorderBgColor;
      column.style.color = inputFontColor;
      column.style.paddingLeft = '10px';
    }

  }

  for (let i = 0; i < inputTableWidth; i++) {
    table.style.width = inputTableWidth + '%';
  }

  for (let i = 0; i < inputBorderWidth; i++) {
    table.style.border = inputBorderWidth + 'px';
    table.style.borderStyle = 'solid';
    table.style.borderColor = inputBorderBgColor;
  }


  if (checkboxBorderCollapse === true) {
    table.style.borderCollapse = 'collapse';
  } else {
    table.style.borderCollapse = 'separate';
  }

  table.style.fontWeight = inputFontWeight;
  table.style.textAlign = inputTextAlign;
  table.style.fontSize = inputFontSize + 'px';
  table.style.fontFamily = inputFontFamily;


  btnGet.addEventListener('click', (e) => {
    e.preventDefault();

    resultCode.innerText = document.documentElement.outerHTML
  });

};

