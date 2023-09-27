import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
	constructor(public data: number[]) {
		super();
	}
	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}

	swap(leftIndex: number, rightIndex: number): void {
		const temp = this.data[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = temp;
	}

	// set as property of class
	get length(): number {
		return this.data.length;
	}
}

// export class NumbersCollection {
// 	constructor(public data: number[]) {}
// 	compare(leftIndex: number, rightIndex: number): boolean {
// 		return this.data[leftIndex] > this.data[rightIndex];
// 	}

// 	swap(leftIndex: number, rightIndex: number): void {
// 		const temp = this.data[leftIndex];
// 		this.data[leftIndex] = this.data[rightIndex];
// 		this.data[rightIndex] = temp;
// 	}

// 	// set as property of class
// 	get length(): number {
// 		return this.data.length;
// 	}
// }
