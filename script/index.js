let w_width=window.innerWidth
if(w_width>1024){
    let canvas,rotation;
    let  y = 0;
    let my = 0;
    const speed = 0.1;

    const loop = () =>{
        
        my += (y - my) * speed;
        window.requestAnimationFrame(loop);
    }

    const mouseFunc = (e) =>{
        y = (e.clientY-window.innerHeight/2);
        background.style.transform = `translateY(${(my/50)}px)`;
        color_img.style.transform = `translateY(${-(my/3)}px)`;
        black_img.style.transform = `translateY(${-(my/3)}px)`;
        but_id.style.transform = `translateY(${-(my/3)}px)`;
        // background.style.transform = `translateY(${-(my/3)}px)`;
    }
    function BodyScrollDisAble(){
        document.body.style.overflow = "hidden"; //스크롤 막음
    };
    
    window.onload = () =>{
        BodyScrollDisAble();
        color_img = document.getElementById("color_img");
        black_img = document.getElementById("black_img");
        background = document.getElementById("img_wrap");
        but_id = document.getElementById("but_id");
        loop();
        window.addEventListener("mousemove", mouseFunc);
        
    }
}
   

    
$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();
    resizing();
    function resizing(){
        ww=$(window).width();
        wh=$(window).height();
        $("#img_wrap,.in_box").css({
            width:ww,
            height:wh
        })
        if(ww>wh){
            $("#color_img,#black_img,.box").css({
                width: '103%',
                height: '140%',
                top: '-15%'
            })
        }else{
            $("#color_img,#black_img,.box").css({
                width: '103%',
                height: wh,
                top: 0,
                overflow:'hidden'
            })
        }
    }
    $(window).resize(function(){
        resizing();
    })
    $(".loding_mask").animate({
        left:ww
    },6000,'linear',function(){
        $(this).hide()
        $(".logo").fadeIn(500,function(){
            logo_scale()
            img_wrap_fadein()
        })
    })
    function logo_scale(){
        setTimeout(function(){
            $(".logo").css({
                transform: 'scale(1)',
                width:'200px',
                marginLeft: '-100px'
            })
            if(ww>1024){
                $(".loding>img").css({
                    transform: 'scale(1)'
                })
            }else{
                $(".loding>img").animate({
                    top:'84.5%'
                },500,function(){
                    $(".loding>img").css({
                        transform: 'scale(1)'
                    })
                })
                
                
            }
            
        },4000)
    }
    function img_wrap_fadein(){
        setTimeout(function(){
            $("#img_wrap").fadeIn(2000)
            $(".loding").fadeOut(3000)
        
        },8000)
    }
    $("#img_wrap").on({
        // mouseenter:function(event){
        //     mouseX=event.pageX-100;
        //     mouseY=event.pageY-100;
        //     $("#clipped").css({
        //             clipPath:`circle(300px at ${mouseX}px ${mouseY}px)`
        //         })
        // },
        mousemove:function(event){
                mouseX=event.pageX;
                mouseY=event.pageY+200;
                $("#color_img").css({
                    clipPath:`circle( 150px at ${mouseX}px ${mouseY}px)`
                })
        },
        // mouseleave:function(event){
        //     $("#color_img").css({
        //             clipPath:`circle(0px at 50% 50%)`
        //         })
        // },
       
    })
    $(".click").on({
        click:function(event){
            $("#color_img").css({
                clipPath:`circle(300% at ${mouseX}px ${mouseY}px)`,
                transitionDuration: '2s'
            })    
               
        },
        mouseleave:function(event){
            $("#color_img").css({
                transitionDuration: '0.5s'
            })  
        }
    })
    $(".in_box,.in_wrap").on({
        mouseenter:function(event){
            $("#color_img").css({
                clipPath:`circle(300% at ${mouseX}px ${mouseY}px)`,
                transitionDuration: '2s'
            })
                        
        },
        mouseleave:function(event){
            $("#color_img").css({
                transitionDuration: '0.5s'
            }) 
        }
    })
    $(".close_but").click(function(){
        $(".title,.mask,.close_but").fadeOut(0,function(){
            $('.in_wrap').slideUp(500,function(){
                $(".in_box").fadeOut()
            })
        })
    })
    $(".but").click(function(){
        let i=$(this).index()
        $(".in_box").fadeIn()
        $(".in_wrap").eq(i).slideDown(1000,function(){
            $(".title,.mask,.close_but").fadeIn()
        })
    });
    $(".but_c").click(function(){
        $(".in_box").fadeIn()
        $(".cont_wrap").slideDown(1000,function(){
            $(".title,.mail_box,.close_but").fadeIn(function(){
                contact();
            })
        })
    });
   
    


});//end