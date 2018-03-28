$( document ).ready(function() {
    console.log( "ready!" );
    $( ".graphic-design" ).click(function() {
  		console.log( "you clicked gd");
  		
  		$(".graphic-design").css({"background-color":"#f44336","color":"white"});
        $(".photography").css({"background-color":"white","color":"black"});
      $( ".p1" ).replaceWith("<a href='remake.html'>Remake Website</a>");


	});
});
$( document ).ready(function() {
    console.log( "ready!" );
    $( ".photography" ).click(function() {
      console.log( "you clicked pt");
      
      $(".graphic-design").css({"background-color":"white","color":"black"});
      $(".photography").css({"background-color":"#f44336","color":"white"});

      $( ".p1" ).replaceWith("<a href='project1.html'>Los Angeles</a>");
       $( ".p2" ).replaceWith("<a href='orlando.html'>Orlando</a>");


  });
});



$(document).ready(function(){
    $('body').mouseover(function(event){

      var left = $(window).width() / 2;


      // var area = event.pageX <372.5;



      if (event.pageX <372.5){

        console.log('im here');
        

        $('left').css( "cursor",'pointer');

      }
            
    });

      
});








// var mouseX;
// $(document).mousemove(function(e) {
//     mouseX = e.pageX;
   
// }).mouseover();

// $("body").mousemove(function(e){
//     if (mouseX >= 430){

//        $("body").css("cursor", "pointer");
//     }
//        else{

//         $("body").css("cursor", "default");


//        }
        
// });






//  $(document).ready(function(){
//  $myCursor = $('.custom_cursor').css({
//                      'position': 'fixed',
//                      'z-index': '999'
//                })


// };


// if (mouseX<430) {
//   $('myCursor').css('cursor','url(images/2.png)')

// }


// function show_popup(str) {
//     $("#popup_content").html(str);
//     $("#popup").fadeIn("fast");
//     $("#popup").css("top", y);
//     $("#popup").css("left", x);
// }





//   $('#cursor').wrap("<a href='home.html'></a>")

// }

  // $(document).ready(function(){
  //         var $area = $('.body').css({
  //                    'cursor':' ',
  //              }),
  //             $myCursor = $('.custom_cursor').css({
  //                    'position': 'fixed',
  //                    'z-index': '999'
  //              })



  //           if ($myCursor.lenght){
  //               $area
  //                   // .on('mouseout.customCursor', function(){
  //                   //  $myCursor.hide()
  //                   //   })
  //                   .on('mousemove.customCursor', function(event){
  //                    $myCursor.show().css({
  //                      'left': event.clientX - 20,
  //                      'top': event.clientY + 7
  //                    })
  //              })
  //         }
  //    });








