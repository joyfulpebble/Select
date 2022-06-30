declare global {
  interface items{
    id: number,
    text: string
  }

  interface options{
    placeholder: string,
    data: Array< items >
  }
}

const template = (place: string, data: Array< items >): string => {
  const placeholder = place ?? '';
  const elements = data.map(el => {
      return `<li class="select__item" data-type="item"> ${el.text} </li>`
  });
  
  const result = `
  <div class="select__input" data-type="input">
    <span class="input__text"> ${placeholder} </span>
    <i class="fa-solid fa-angle-down" data-type="angle"></i>
  </div>
  <div class="select__dropdown">
    <ul class="select__list">
     ${
      elements.join('')      
     }
    </ul>
  </div>
`
  return result;
} 

export class Select {
  $selector: any;
  $angle: any;
  options: options;

  constructor(selector: string, options: options){
    this.$selector = document.getElementById(selector);
    this.options = options;

    this.render();
    this.setup();
  }
  private render(){
    const {placeholder, data} = this.options;

    this.$selector.innerHTML = template(placeholder, data);
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