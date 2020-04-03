import { Directive, OnInit, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective implements OnInit {
  @HostBinding('style.color') color;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
   
    //console.log(event);
 
    if (event.key == "ArrowUp") this.color = "blue";
    else if (event.key == "ArrowDown") this.color = "green";
    else if (event.key == "ArrowLeft") this.color = "purple";
    else if (event.key == "ArrowRight") this.color = "red";
  }

  ngOnInit() {
    this.color ="black";

  }
}