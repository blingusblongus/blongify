//sets
const bcdfSet = ['ring', 'ling', 'rong', 'long', 'roing', 'rang', 'ram', 'rom', 'roim', 'om', 'oim', 'im'],
      second_global = ['bop', 'blip', 'bip', 'dong'],
      second_ing = ['us'],
      second_not_ing = ['bus'];

function syllables(str){
    //returns array of

    const vowels = /[aeiou]/g;
    let cur, last = 0, match, result=[];

    while((match = vowels.exec(str)) != null){
        cur = match.index;
        result.push(str.slice(last, cur));
        last = cur + 1;
    }

    return result;
}

//UNFINISHED
function chooseSet(substr){
    const last = substr[substr.length - 1];

    if(/bcdf/.match(last)){
        //addl. code goes here (mergeArrays)
    }else if{
        //blah blah blah
    }
}

//Combines sets
function mergeArrays(arrays){
    return [].concat.apply([], arrays);
}

/*
// Logs all syllables correctly

function syllables(str){
    const vowels = /[aeiou]/g;
    let cur, last, match;

    while((match = vowels.exec(str)) != null){
        console.log(match);
    }
}

*/
