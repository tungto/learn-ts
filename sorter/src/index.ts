import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
// import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([1, 3, 4, -10, 2]);
const charsCollection = new CharactersCollection('XaaybA');

numbersCollection.sort();
console.log(numbersCollection);
// const sorter = new Sorter(numbersCollection);

// const sortedChar = new Sorter(charsCollection);

// sorter.sort();
// sortedChar.sort();

// console.log(sorter.collection);
charsCollection.sort();
console.log(charsCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(80);

// const sorter2 = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
