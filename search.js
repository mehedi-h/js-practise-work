

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

function compareSubstring(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
      return 'Please insert a valid string'
    }
    else {
      if (string1.includes(string2)) {
        return true;
      } else {
        return false;
      }
    }
  } 
  const result = compareSubstring('abcde', 'abc');
  console.log(result);  // This will output: true
  