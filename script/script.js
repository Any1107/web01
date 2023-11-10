

   $(function(){
    let currentIndex = 0; //현재이미지 

    $(".slider").hide().first().show(); //첫번째 이미지만 보이게함

    setInterval(function(){
        let nextIndex =(currentIndex + 1) % 3; //다음이미지 설정

        $(".slider").eq(currentIndex).fadeOut(1200);//첫번째 이미지 사라지게
        $(".slider").eq(nextIndex).fadeIn(1200);//두번째 이미지 나타나게
        currentIndex = nextIndex;


    },3000);





    //메뉴
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });


  



    //팝업
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });
    
   });