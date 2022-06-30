import "../src/scss/style.scss"
import {Select} from "./ts/main"

declare global {
  interface Window { select: any; }
}

const select = new Select('select', {
  placeholder: 'Элемeнт не выбран',
  data: [
    {id: 1, text: 'Noah'},
    {id: 2, text: 'Liam'},
    {id: 3, text: 'Mason'},
    {id: 4, text: 'Jacob'},
    {id: 5, text: 'William'},
    {id: 6, text: 'Ethan'},
    {id: 7, text: 'Michael'},
    {id: 8, text: 'Gerald'},
    {id: 9, text: 'Jack'}
  ]
});

window.select = select;