//sets
// Currently, comp is technically compSet + nonCompSet
/*
comp: bcfgkp //comp+semiComp+nonComp
semiComp: dtw //semiComp+nonComp
nonComp: hjlmnrsvxyz //nonComp
other: q //own thing
*/
const compSet = ['ling', 'long'],
      semiCompSet = ['ring', 'rong', 'roing', 'rang', 'ram', 'rom', 'roim'],
      nonCompSet = ['om', 'oim', 'im', 'am', 'ing', 'oing', 'ong', 'ang'],
      second_global = ['bop', 'blip', 'bip', 'dong'],
      second_ing = ['us'], //weight this one heavier
      second_not_ing = ['bus'];

function control(name){
    //app exec code here
    //get syllables
    const syl = syllables(name);
    let result = [];

    //for each syllable, add a piece (arrow function?)
    syl.map(el => {
        console.log(el);
        let set = chooseSet(el);
        let rand = Math.floor(Math.random()*set.length);

        result.push(el);
        result.push(set[rand]);
    });

    return result.join('');
}

function syllables(str){
    //returns array of syllables without linking consonants

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

    // Regex
    const compRe = /[bcfgkp]/,
          semiCompRe = /[dtw]/,
          nonCompRe = /[hjlmnrsvxyz]/;

    if(compRe.exec(last)){
        return mergeArrays([compSet, semiCompSet, nonCompSet]);
    }else if(semiCompRe.exec(last)){
        return mergeArrays([semiCompSet, nonCompSet]);
    }else if(nonCompRe.exec(last)){
        return nonCompSet;
    }else if(last=='q'){
        //Special set - add u, then nonCompSet
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
