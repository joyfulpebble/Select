import "../src/scss/style.scss"
import {Select} from "./ts/main"

declare global {
  interface Window { select: any; }
}

const select = new Select('select', {
  
});

window.select = select;