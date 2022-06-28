declare global {
  interface options{
    angle: string,
  }
}

export class Select {
  $selector: any;
  $angle: HTMLElement | null;

  constructor(selector: string, options: options){
    this.$selector = document.getElementById(selector);
    this.$angle = document.getElementById(options.angle)
    

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