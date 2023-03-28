var pageaudio = new Audio("speakerAudio.mp3");

function playsound(){
  pageaudio.play();
}
document.querySelector(".imgspeaker").addEventListener("click" , playsound);



$(document).ready(function(){
    var count = 0;
    var counter = setInterval(function(){
        if(count < 101) {
            $('.loader').text(Math.floor(count) + '%');
            $('.count').css('transform', 'translateY(' + (100 - count) + '%)');
            count++
        }
        else{
            clearInterval(counter);
            $('.preloader').hide();
        }
    },60)
})

gsap.registerPlugin(ScrollTrigger);

gsap.to(".section1bg2",{
    scale : 1.5,
    scrollTrigger:{
        trigger : ".section1bg2",
        start : "top 2px",
        scrub : 2,
    }
})

gsap.to(".section1bg",{
    scale : 1.2,
    scrollTrigger:{
        trigger : ".section1bg",
        start : "top 2px",
        scrub : 2,
    }
})

gsap.to(".section1goonies",{
     opacity: 0,
     scrollTrigger: {
         trigger: ".section1bg2",
         scrub: 1,
         start : "top 0px",
        },
    })

    gsap.to(".section1heading", {
     opacity: 0,
     scrollTrigger: {
         trigger: ".section1heading",
         scrub: 1,
         start : "top 0px",
        },
    })

    gsap.to(".plotheading",{
        opacity: 1,
        scrollTrigger: {
            trigger: ".plotheading",
            scrub: 1,
            start : "top 0px",
           },
       })
   
       gsap.to(".plotpara", {
        opacity: 2,
        yPercent: -150,
        scrollTrigger: {
            trigger: ".plotpara",
            scrub: 1,
            start : "top",
           },
       })

       gsap.from(".line", {
        scrollTrigger: {
          trigger: ".line",
          scrub: 1,
          start: "top 0px",
        //   end: "20px"
        },
        scaleY: 0,
        transformOrigin: "top center", 
        ease: "none"
      });

      gsap.to(".fifth", {
        opacity: 0,
        scrollTrigger: {
            trigger: ".fifth",
            scrub: 1,
            start : "bottom 100%",
           },
       })


      gsap.to(".sixth", {
        opacity: 0,
        scrollTrigger: {
            trigger: ".sixth",
            scrub: 1,
            start : "bottom 100%",
           },
       })

       gsap.to(".firstcontainer", {
        opacity: 0,
        scrollTrigger: {
            trigger: ".firstcontainer",
            scrub: 1,
            start : "bottom 100%",
           },
       })

    //    gsap.to(".two", {
    //     yPercent: -1,
    //     scrollTrigger: {
    //         trigger: ".two",
    //         scrub: 1,
    //         start : "top 0px",
    //        },
    //    })

    var rotatekey = gsap.timeline({
        scrollTrigger:{
          trigger: ".two",
          scrub:0.2,
        //   markers : true,
          start: 'bottom 60%',
          end:'+=500',
        }
      })
      .from('.keyimg', {
        rotation: 90,
        ease:'none',
      })

      var rotatecoin1 = gsap.timeline({
        scrollTrigger:{
          trigger: ".two",
          scrub:0.2,
        //   markers : true,
          start: 'bottom 30%',
          end:'+=500',
        }
      })
      .to('.coin1img', {
        rotation: -360,
        ease:'none',
        yPercent: -150,
      })

      var rotatecoin2 = gsap.timeline({
        scrollTrigger:{
          trigger: ".two",
          scrub:0.2,
        //   markers : true,
          start: 'bottom 30%',
          end:'+=500',
        }
      })
      .to('.coin2img', {
        // rotation: -360,
        ease:'none',
        yPercent: -450,
      })


      var rotatecoin3 = gsap.timeline({
        scrollTrigger:{
          trigger: ".two",
          scrub:0.2,
        //   markers : true,
          start: 'bottom 80%',
          end:'+=400',
        }
      })
      .to('.coin3img', {
        rotation: 90,
        ease:'none',
        yPercent: 250,
      })

      var rotatecoin4 = gsap.timeline({
        scrollTrigger:{
          trigger: ".two",
          scrub:0.2,
        //   markers : true,
          start: 'bottom 50%',
          end:'+=400',
        }
      })
      .to('.coin4img', {
        rotation: 90,
        ease:'none',
        yPercent: 400,
      })
   
      gsap.to(".gooniestextheading",{
        opacity: 1,
        yPercent: -150,
        scrollTrigger: {
            trigger: ".third",
            scrub: 1,
            // markers : true,
            start : "bottom 100%",
            end:'+=400',
           },
       })

       gsap.to(".try",{
        y : 0,
        stagger : 0.2,
        scrollTrigger: {
          trigger: ".two",
          start : "top 70%",
          // scrub: 1,
          // markers : true,
        }
       })
      

       gsap.to(".skull",{
        scale : 2,
        yPercent : -10,
        scrollTrigger:{
            trigger : ".fourth",
            start : "bottom 40%",
            scrub : 2,
            // markers : true,
        }
    })

    gsap.to(".forest",{
        scale : 1.1,
        yPercent: -2,
        scrollTrigger:{
            trigger : ".fourth",
            start : "bottom 0%",
            end: '+=100',
            scrub : 2,
            // markers : true,
        }
    })


    gsap.fromTo('.dot',
    {x: 0 , opacity: 0}, 
    {   
      x: 375 , 
      opacity: 1,
      scrollTrigger:{
        trigger : ".firstcontainer",
        scrub : 1,
        start: "top 0%" 
      }
      });

  gsap.fromTo('.dot',
    {x: 375 }, 
    {   
      x: 900 , 
      scrollTrigger:{
        trigger : ".fourth",
        scrub : 1,
        // start: "top 0%" 
      }
      });


      gsap.fromTo('.dot',
      {x: 900 }, 
      {   
        x: 1160 , 
        scrollTrigger:{
          trigger : ".sixth",
          scrub : 1,
          end : "+=0"
          // start: "top 0%" 
        }
        });

    let scroll = new SmoothScroll('a[href*="#"]',{
      speed : 5000,
      speedAsDuration : true,
    })

    playPause = document.getElementById("playPause");
    stopBtn = document.getElementById("stopBtn");
    volumeBtn = document.getElementById("volumeBtn");
    let audio = new Audio('speakerAudio.mp3');
    let currentTime = document.getElementById("currentTime");
    let duration = document.querySelector("#duration");
    let backwardBtn = document.querySelector(".backwardBtn");
    let forwardBtn = document.querySelector(".forwardBtn")
    let speakerimg = document.querySelector(".speakerimg");
    let musicplayer = document.querySelector(".music-player");
    let timeContainer =document.querySelector(".timeContainer");
    
    var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'lightgray',
        progressColor: 'darkgray',
        barWidth: 2,
        height : 60,
        responsive: true,
        hideScrollbar: true,
        barRadius: 1,
        scrollParent : true,
        skipLength : 10,
        
        // container : 1
        // barHeight : 2
    });
    
    // Load the audio FIle
    wavesurfer.load('speakerAudio.mp3');
    
    
    // Play and pause button
    playPause.addEventListener("click" , (e)=> {
        wavesurfer.playPause();
        if (playPause.src.match("play")) {
            playPause.src = "assets/pause.png";
        }
        else {
            playPause.src = "assets/play.png"
        }
    })
    
    // Time calculator
    
    let timeCalculator = function (value){
        second = Math.floor( value % 60);
        minute = Math.floor((value / 60)% 60);
    
        if( second < 10){
            second = "0" + second;
        }
        
        return minute + ":" + second;
    };
    
    // Audio Duration
    wavesurfer.on('ready' , (e)=> {
        duration.textContent = timeCalculator(wavesurfer.getDuration());
    });
    
    // Audio Duration (completed)
    
    wavesurfer.on("audioprocess" , (e)=>{
        currentTime.textContent = timeCalculator(wavesurfer.getCurrentTime());
    })
    
    stopBtn.addEventListener("click" , (e)=> {
        wavesurfer.stop();
        playPause.src = "assets/play.png"
        currentTime.textContent = "0:00"
    })
    
    volumeBtn.addEventListener("click" , (e)=> {
        wavesurfer.toggleMute();
        if (volumeBtn.src.match("volume")) {
            volumeBtn.src = "assets/mute.png";
        }
        else {
            volumeBtn.src = "assets/volume.png"
        }
    })

    forwardBtn.addEventListener("click" , (e)=> {
      wavesurfer.skipForward();
  })

  backwardBtn.addEventListener("click" , (e)=> {
    wavesurfer.skipBackward();
})

speakerimg.addEventListener("click" , () =>{
  musicplayer.classList.toggle("musicplayshow");
  // timeContainer.classList.toggle("musicplayshow");
})

    
    











