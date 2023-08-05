/*
//------------Math.pow----Power---------
let result = Math.pow(3, 4);
console.log("3 to the power 4 is =",result)


//-----------Math.abs -----Absolute---------
let glumulu = 31;
let batashi = 22;

const gap = Math.abs(glumulu - batashi);
if (gap < 10) {
    console.log("Wow! You two made for each other.")
} else {
    console.log("ofs! Not a perfect match")
}

//----------Math.ceil,Math.floor & Math.round------- Math round figure, ceiling and floor-------

const number1 = 5.286;  
const number2 = 5.986;
                                            //number will be round on depend '.'
                                            //if after . number is >= 5 it will show 6
                                            //if after . number is <= 5 it will show 5
const toRound = Math.round(number1);
                                            //number will be up number on depend '.'
                                            //if after . number is >= 5 it will show 6
const toCeil = Math.ceil(number1);
                                            //number will be up number on depend '.'
                                            //if after . number is <= 5 it will show 5
const toFloor = Math.floor(number2);

console.log(toRound);
console.log(toCeil);
console.log(toFloor);

for (let i = 1; i <= 6; i++) {
    const randomNumber = Math.round(Math.random()*6);
    console.log(randomNumber)
}
*/
