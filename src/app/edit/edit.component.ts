import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { model } from '../model';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Output() outputfeild = new EventEmitter<Object>();

  node: model = {};
  
  @Input() type: string = "";
  constructor() { }

  ngOnInit(): void {
    this.node.type = 'folder'
  }

  inputsave() {
    this.node.id = Math.floor(Math.random() * 100).toString();
    this.node.children = [];
    this.outputfeild.emit({ action: 'save', array: this.node })
  }

  inputremove() {
    this.outputfeild.emit({ action: 'remove', data: this.node })
  }

  infolder(dipesh: any) {
    this.node.type = dipesh;
    this.type = 'correct'
  }


}