//jquery

//init hide
$('.result').css('font-size', '0px');

$("#blongify").click(function(){
    blongify();
});

$('body').keypress(function(e){
    if(e.which == 13){
        blongify();
    }
})

function blongify(){
    let first = $("#first").val();
    let last = $("#last").val();

    $('.result').animate({
        fontSize: '0rem'
    }, 500, function(){
        $('.result').html(control(first) + " " + control(last));
    });

    $('.result').animate({
        fontSize: '5rem'
    }, 1000);

}



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
      qSet = ['uom', 'uoim', 'uim', 'uam', 'uing', 'uoing', 'uong', 'uang'],
      second_global = ['bop', 'blip', 'bip', 'dong'],
      second_ing = ['us'], //weight this one heavier
      second_not_ing = ['bus'];

function control(name){
    //app exec code here

    //Check if blank
    if(!name) return "";

    //get syllables
    const syl = syllables(name);
    let result = [];

    //for each syllable, add a piece (arrow function?)
    syl.map(el => {
        let set = chooseSet(el);
        let rand = Math.floor(Math.random()*set.length);

        result.push(el);
        result.push(set[rand]);
    });

    result = addEnding(result);

    return result;
}

function addEnding(result){
    const last = result[result.length - 1];
    let sets = mergeArrays([second_global,second_ing,second_not_ing]);
    let rand = Math.floor(Math.random()*sets.length);

    result.push(sets[rand]);

    return result.join('');
}

function syllables(str){
    //returns array of syllables without linking consonants

    const vowels = /[aeiouAEIOU]/g;
    let cur, last = 0, match, result=[];

    while((match = vowels.exec(str)) != null){
        //Continue if vowel starts the name
        if(match.index == 0) continue;

        cur = match.index;
        result.push(str.slice(last, cur));
        last = cur + 1;
    }

    return result;
}

function chooseSet(substr){
    const last = substr[substr.length - 1];

    // Regex
    const compRe = /[bcfgkpBCKFGKP]/,
          semiCompRe = /[dtwDTW]/,
          nonCompRe = /[hjlmnrsvxyzHJLMNRSVXYZ]/;

    if(compRe.exec(last)){
        return mergeArrays([compSet, semiCompSet, nonCompSet]);
    }else if(semiCompRe.exec(last)){
        return mergeArrays([semiCompSet, nonCompSet]);
    }else if(nonCompRe.exec(last)){
        return nonCompSet;
    }else if(/[qQ]/.exec(last)){
        return qSet;
    }else{
        console.log('error in chooseset');
        return ;
    }
}

//Combines sets
function mergeArrays(arrays){
    return [].concat.apply([], arrays);
}

