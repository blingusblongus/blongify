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

    switch (last) {
        case 'b':
            break;
        default:
            break;
    }
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
