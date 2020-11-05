 $(function () {
     $("about-text").css('display', 'none');
     $("#fbicon").hover(function () {
         $("#fbicon").css("display", "none");
         $("#fbicon2").css("display", "inline-block");

     }, function () {
         $("#fbicon2").css("display", "none");
         $("#fbicon").css("display", "inline-block");

     });
     $("#twicon").hover(function () {
         $("#twicon").css("display", "none");
         $("#twicon2").css("display", "inline-block");

     }, function () {
         $("#twicon2").css("display", "none");
         $("#twicon").css("display", "inline-block");

     });

     $(".imgback").click(function () {
         var index = $(this).index();

         $(".context-1").css('display', 'none');
         $(".context-2").css('display', 'block');
         $(".imgbox2").children().css('width', '100%')
         $(".imgbox2").children().css('height', '100%')
         $(".imgbox2").children().eq(index).css('width', '110%');
         $(".imgbox2").children().eq(index).css('height', '110%');
         $(".about-text").css('display', 'none');
         $(".about-text").eq(index).css('display', 'block');
     });

     $(".imgbox").hover(function () {
         $(this).css('-webkit-filter', ' grayscale(0%)');
         $(this).css('filter', 'none');
         $(this).css('transition-duration', '0.5s');
     }, function () {
         $(this).css('-webkit-filter', ' grayscale(100%)');
         $(this).css('filter', 'gray');
         $(this).css('transition-duration', '0.5s');
     });

     $(".imgbox2").click(function () {
         $(".imgbox2").children().css('width', '100%')
         $(".imgbox2").children().css('height', '100%')
         $(this).children().css('width', '110%');
         $(this).children().css('height', '110%');

         $(".about-text").css('display', 'none');
         $(".about-text").eq($(this).index()).css('display', 'block');
     });


     var check = 0;
     $(".navbutton").last().click(function () {
         check += 1;
         $(".navimgbox").css("display", 'none');
         $(".navimgbox").eq(check).css("display", 'block');

         $(".paginate").children().css('background-color', 'lightgray');
         $(".paginate").children().eq(check).css('background-color', 'brown');

     });
     $(".navbutton").first().click(function () {
         check -= 1;

         $(".navimgbox").css("display", 'none');
         $(".navimgbox").eq(check).css("display", 'block');

         $(".paginate").children().css('background-color', 'lightgray');
         $(".paginate").children().eq(check).css('background-color', 'brown');

     });

 });
