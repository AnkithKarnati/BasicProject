import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Hi Ankith!';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();