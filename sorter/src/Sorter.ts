interface Sortable {
	length: number;
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex: number): void;
}

// sort for string, number
export abstract class Sorter {
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;

	abstract length: number;

	sort(): void {
		const { length } = this;

		for (let i = 0; i < this.length; i++) {
			for (let j = 0; j < this.length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}

// export class Sorter {
// 	constructor(public collection: Sortable) {}

// 	sort(): void {
// 		for (let i = 0; i < this.collection.length; i++) {
// 			for (let j = 0; j < this.collection.length - i - 1; j++) {
// 				if (this.collection.compare(j, j + 1)) {
// 					this.collection.swap(j, j + 1);
// 				}
// 			}
// 		}
// 	}
// }
