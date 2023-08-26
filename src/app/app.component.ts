import { Component, OnInit } from "@angular/core";
import { model } from "./model";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
	node: model = {}

	Nodes: model[] = [
		{
			name: 'folder',
			id: '0',
			type: 'folder',
			children: [],
			active: false
		}
	]

	inputfeild(event: any) {
		if (event.action == 'save') {
			this.save(event.array)
			this.node.inactive = !this.node.inactive
		} if (event.action == 'remove') {
			this.node.inactive = !this.node.inactive
		} if (event.action == 'delete') {
			this.delete(event.dlt)
			this.node.inactive = !this.node.inactive
		}
	}

	ontoggle() {
		this.node.inactive = !this.node.inactive
	}

	save(list: model) {
		console.log("datnjj", list);
		this.Nodes.push(list)
	}

	delete(flash: model) {
		this.Nodes.forEach((view, index) => {
			console.log("view", view);
			if (view.id == flash.id) {
				this.Nodes.splice(index, 1);
			}
		});
	}


	ngOnInit(): void {
	}
}



