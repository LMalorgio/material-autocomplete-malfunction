import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

export class State {
  constructor(public name: string) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  states: State[] = [
    {
      name: 'Alaska'
    },
    {
      name: 'Delaware'
    },
    {
      name: 'Hawaï'
    },
    {
      name: 'Maine'
    },
    {
      name: 'Massachusetts'
    },
    {
      name: 'Missouri'
    },
    {
      name: 'Montana'
    },
    {
      name: 'Rhode-Island'
    },
    {
      name: 'Wisconsin'
    },
    {
      name: 'Wyoming'
    }
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

}










/*
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myFormControl: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.myFormControl = this.formBuilder.group({
      myForm: [],
    });
  }
}
*/
