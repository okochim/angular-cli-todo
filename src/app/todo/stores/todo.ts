export class Todo {
    id: number
	title: string;
    desc: string;
	constructor(id: number, title: string, desc: string) {
		this.id = id;
		this.title = title;
		this.desc = desc;
	}
}
