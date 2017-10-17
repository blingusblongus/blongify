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
