import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // Example function to prove typings and extended bootstrap functionality
  // .modal is not a funciton on the minified versions of the bootstrap ls library 
  CloseModal(){
      $('#exampleModal').modal('hide');
  }
}
