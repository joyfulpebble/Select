declare global {
  // interface options{
    
  // }
}

const template = `
  <div class="select__input" data-type="input">
    <span class="input__text"> </span>
    <i class="fa-solid fa-angle-down" data-type="angle"></i>
  </div>
  <div class="select__dropdown">
    <ul class="select__list"> 
      <li class="select__item" data-type="item"> text </li>
    </ul>
  </div>
`

export class Select {
  $selector: any;
  $angle: any;

  constructor(selector: string, options: object){
    this.$selector = document.getElementById(selector);

    this.render();
    this.setup();
  }
  private render(){
    this.$selector.innerHTML = template;
  }
  private setup(){
    this.clickLogger = this.clickLogger.bind(this)
    this.$selector.addEventListener('click', this.clickLogger);
    this.$angle = this.$selector.querySelector('[data-type="angle"]')
  }

  clickLogger(event: any){
    const {type} = event.target.dataset;
    
    if (type === 'input') {
      this.toggle();
    }
    
  }

  toggle(){
    if(this.$selector.classList.contains('active')){
      this.close();
    } else {
      this.open();
    }
  }

  open(){
    this.$selector.classList.add('active');
    this.$angle.classList.remove('fa-angle-down');
    this.$angle.classList.add('fa-angle-up');
  }
  close(){
    this.$selector.classList.remove('active');
    this.$angle.classList.remove('fa-angle-up');
    this.$angle.classList.add('fa-angle-down');
  }


}