/* Part 1a - Counting Down */
for (let i = 100; i >= 0; i--) {
  console.log(i);
}

console.log('');

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 1b - Counting Down + User Input */
for (let i = Number(process.argv[2]); i >= 0; i--) {
  console.log(i);
}

console.log('');
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 2 - We Are The Array (ft. MJ) */

let students = ['Khye', 'Julie', 'Febin', 'Alex', 'Esam', 'Dante'];

for (let i = 0; i < students.length; i++) {
  console.log("ASC LI's 2024 -", students[i]);
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 3 - For Loop Gymnastics */

/* Question #1: */
// Output:
// c
// u
// t
// e
//
// p
// u
// p
// p
// i
// e
// s

/* Question #2: */
// Output:
//j: 1 counter: 9
// j: 2 counter: 8
// j: 3 counter: 7
// j: 4 counter: 6
// j: 5 counter: 5
// Bye bye

/* Question #3: */
// This is a for loop to help calculate an average!
// Our loop is adding up all the numbers of our array and storing it in num1
// num2 is counting the number of items we're adding up
// result is getting the average by diving our sum by the number of items we added up

/* Question #4: */
/* a) */
// 0 0
// 0 1
// 0 2
// 0 3
// 0 4
// 1 0
// 1 1
// 1 2
// 1 3
// 1 4
// 2 0
// 2 1
// 2 2
// 2 3
// 2 4
// 3 0
// 3 1
// 3 2
// 3 3
// 3 4
// 4 0
// 4 1
// 4 2
// 4 3
// 4 4

/* b) */
// h will iterate up once m has reached 60
// this will continue until h reaches 24
// 0-23  0-59

/* c) */
// It's a clock!! ⏰

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Extra Credit - Secret Word */
/* let bigArray = [
  'S', 'Z', 'A', 'H', 'G', 'B', 'Y', 'I', 'A', 'N', 'T', 'V', 'C', 'Q', 'C', 'P',
  'D', 'Q', 'Q', 'K', 'T', 'N', 'J', 'V', 'U', 'Q', 'Q', 'C', 'V', 'P', 'A', 'G',
  'Z', 'A', 'R', 'U', 'A', 'P', 'M', 'B', 'R', 'A', 'R', 'O', 'F', 'I', 'G', 'F',
  'O', 'L', 'B', 'R', 'V', 'Y', 'P', 'J', 'H', 'O', 'S', 'A', 'A', 'O', 'F', 'T',
  'E', 'S', 'J', 'W', 'T', 'B', 'R', 'R', 'Y', 'B', 'O', 'A', 'O', 'S', 'Y', 'U',
  'W', 'E', 'Q', 'M', 'O', 'F', 'H', 'W', 'K', 'G', 'Y', 'F', 'A', 'W', 'S', 'U',
  'O', 'T', 'C', 'D', 'B', 'Z', 'A', 'H', 'G', 'B', 'Y', 'I', 'A', 'N', 'T', 'V',
  'C', 'Q', 'C', 'P', 'D', 'Q', 'Q', 'K', 'E', 'N', 'J', 'V', 'U', 'Q', 'Q', 'C',
  'V', 'P', 'A', 'G', 'Z', 'A', 'R', 'U', 'A', 'P', 'M', 'B', 'R', 'A', 'R', 'O',
  'F', 'I', 'G', 'F', 'O', 'L', 'B', 'R', 'V', 'Y', 'P', 'J', 'H', 'O', 'S', 'A',
  'R', 'O', 'F', 'T', 'E', 'S', 'J', 'W', 'T', 'B', 'R', 'R', 'Y', 'B', 'O', 'A',
  'O', 'S', 'Y', 'U', 'Y', 'E', 'Q', 'M', 'O', 'F', 'H', 'W', 'K', 'G', 'Y', 'F',
  'A', 'W', 'S', 'U', 'O', 'T', 'C', 'D'
]; */

let secretWord = '';

for (let i = 0; i < bigArray.length; i++) {
  if (i % 20 == 0) {
    secretWord += bigArray[i];
  }
}

console.log(secretWord);
