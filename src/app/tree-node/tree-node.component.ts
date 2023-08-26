import { Component,Input,Output,EventEmitter} from '@angular/core';
import { model } from '../model';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent {
  hover: boolean = false
  @Output() outputfeild = new EventEmitter<Object>()
  @Input() node : model = {};
  @Input() data : model = {};

  addfolder(){
    this.node.active = true;
  }

  inputfeild(event: any) {
		if(event.action == 'save') {
			this.Save(event.array)
      this.node.active = false
		}if (event.action == 'remove') {
      this.node.active = false
		}
	}

	Save(Data:model){
    if(!this.node.children)
    return;{
      console.log("data",Data);
      this.node.children.push(Data)
      this.node.active = false
      console.log(this.node.children);
    }
	}

	delete(){
    this.outputfeild.emit({action:'delete',dlt:this.node})
    if(this.data.children){
      this.data.children.forEach((view,index) => {
        if(view.id == this.node.id && this.data.children){
          this.data.children.splice(index,1)
        }
      })
    }
	}

  constructor() {
  }
 
}