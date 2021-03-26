$(document).ready(function(){
$('#input li').click(function(){
    $('#input li').removeClass("active1");
    $(this).addClass("active1");


})

$('#iframe li').click(function(){
    $('#iframe li').removeClass("active2");
    $(this).addClass("active2");


})

$("#change").click(function(){
    var html1 = $(".active1").html();
    
    var id1 = $(".active1").attr("id");
    var html2 = $('.active2').html();
    var id2 = $(".active2").attr("id");
    $('#input li').removeClass("active1");
    $("#"+html2).addClass("active1");
    $('#iframe li ').removeClass("active2");
    $("#t"+ html1).addClass("active2");
 })



  
$("#textareas").keyup(function(){
      var num= $(this).val().length;
      $("#strcount").html( num +  "/200");
        
        
    
})
$("#but1").on('click', function(){
        $("#otherlanguage").toggleClass("d-none");
        $("#fot1").toggleClass("d-none")
        $("#med1").toggleClass("d-none");
})
$("#but2").on('click', function(){
        $("#otherlanguage1").toggleClass("d-none");
        $("#fot2").toggleClass("d-none")
        $("#med2").toggleClass("d-none");
})
;
$("#otherlanguage ul li").click(function(){

    var oth1 = $(this).html();
    var pos3=$("*[data=3]").html();

    $("*[data=3]").html(oth1);
    $(this).html(pos3);
    
    $("#otherlanguage").toggleClass("d-none");
        $("#fot1").toggleClass("d-none");
        $("#med1").toggleClass("d-none");
        $("*[data=3]").addClass("active1");
});
$("#otherlanguage1 ul li").click(function(){

    var oth1 = $(this).html();
    var pos3=$("*[data=t3]").html();

    $("*[data=t3]").html(oth1);
    $(this).html(pos3);

    $("#otherlanguage1").toggleClass("d-none");
        $("#fot2").toggleClass("d-none");
        $("#med2").toggleClass("d-none");
        $("*[data=t3]").addClass("active2");
    });


 function ajaxfunction(){
  
var active1=$(".active1").html();
var active2=$(".active2").html();


var textareas=$("#textareas").val();
$("#bas1").click(function(){
  var active3=$(this).html();
  var active1=$(".active1").html(active3);
}) 
$.ajax({
    
    url:"PHP/google.php",
    type:'post',
    
   data:{
    active1: active1,
    active2 : active2,
    textareas: textareas,
    
    },
    dataType:'json',
   success:function(result){
       
       $("#divtra").html(result.tran + " "+result.icon);
       var notrepeatword=Array.from(new Set(result.suggestion));
       $("#bas").html(notrepeatword);
      $("#bas1").html(result.suggestionLan);
     
    }
})
}


   $("#textareas").keyup(function(){
      ajaxfunction();
  })
 

});



