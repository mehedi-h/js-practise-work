

// const songs = "Amar Sonar Bangla Ami Tomay Valobashi";

// const search = songs.includes('Valobashi')
// console.log(search)

// const songs = ['Ami', 'mi']

// if (songs[0] == songs[1]) {
//     console.log('true');
// } else {
//     console.log('false')
// }
// console.log(search)


// function matchFinder(string1, string2) {
//     const search = matchFinder.includes()
// }
// matchFinder('hello', 'llo');

function compareSubstring(string1, start1, end1, string2) {
    const substring1 = string1.slice(start1, end1);
    return substring1 === string2;
  }
  
  const string1 = "abcdefgh";
  const string2 = "bcd";
  
  const result = compareSubstring(string1, 1, 4, string2);
  console.log(result);  // This will output: true
  