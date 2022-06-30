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
      return `<li class="select__item" data-type="item" data-value="${el.id}"> ${el.text} </li>`
  });
  
  const result = `
  <div class="select__input" data-type="input">
    <span class="input__text" data-type="header"> ${placeholder} </span>
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
  $header: any;
  options: options;
  selectedItemId: number | null;

  constructor(selector: string, options: options){
    this.$selector = document.getElementById(selector);
    this.options = options;
    this.selectedItemId = null;

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
    this.$angle = this.$selector.querySelector('[data-type="angle"]');
    this.$header = this.$selector.querySelector('[data-type="header"]');
  }

  clickLogger(event: any){
    const {type} = event.target.dataset;
    
    if (type === 'input') {
      this.toggle();
    } else if (type === 'item') {
      const id = event.target.dataset.value;
      
      this.selectItem(id)
    }
    
  }

  toggle(){
    if(this.$selector.classList.contains('active')){
      this.close();
    } else {
      this.open();
    }
  }
  current(id: number){
    return this.options.data[id - 1].text
  }  

  selectItem(id: number){
    this.selectedItemId = id;

    this.$header.textContent = this.current(this.selectedItemId);
    this.close();
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