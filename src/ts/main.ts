declare global {
  interface options{
    angle: string,
  }
}

const template = `
  <div class="select__input">
    <span class="input__text"> </span>
    <i class="fa-solid fa-angle-down fa-rotate-270" id="angle"></i>
  </div>
  <div class="select__dropdown">
    <ul class="select__list">
      <li class="select__item"> text </li>
    </ul>
  </div>
`

export class Select {
  $selector: any;
  $angle: HTMLElement | null;

  constructor(selector: string, options: options){
    this.$selector = document.getElementById(selector);
    this.$angle = document.getElementById(options.angle);
    
    this.render();
  }
  private render(){
    this.$selector.innerHTML = template;
  }

  open(){
    this.$selector.classList.add('active');
    this.$angle?.classList.toggle('fa-rotate-270');
  }
  close(){
    this.$selector.classList.remove('active');
    this.$angle?.classList.add('fa-rotate-270');
  }


}