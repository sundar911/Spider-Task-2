
let openbutton = document.getElementById('instructions');
let closebutton = document.querySelector('.close-button');
let steps = document.getElementById('steps');

openbutton.onclick=function()
{
  steps.style.display  = 'block';
}

closebutton.addEventListener('click', closeModal);
window.addEventListener('click', clickoutside);

function closeModal() 
{
  steps.style.display = 'none';
}

function clickoutside(e)
{
  if(e.target == steps)
  steps.style.display = 'none';
}


let instbtn = document.getElementById('instructions');
let maintitle = document.getElementById('maintitle');
let startbtn = document.getElementById('start');
let scoredisp = document.getElementById('score');
let timedisp = document.getElementById('time');
let pausebtn = document.getElementById('pause');
let resumebtn = document.getElementById('resume');
let lightningbtn = document.getElementById('lightning');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let bubbles = [];
let cnt=0;
let speed=100;
let flag=0;
let score=0;
let time=333.33;
let progressang=0;
let cnt2=0;
let starttune = new Audio("bubble-sounds/arcade-climb_tone_001.mp3");
let poptune = new Audio("bubble-sounds/comedy_bubble_pop_002.mp3");
let restarttune = new Audio("bubble-sounds/gta-san-andreas-ah-shit-here-we-go-again_BWv0Gvc.mp3");
let endtune = new Audio("bubble-sounds/tf_nemesis.mp3");
let lightningtune = new Audio("bubble-sounds/its-pikachu_ecUb5Pn.mp3");
let scoretune = new Audio("bubble-sounds/anime-wow-sound-effect-mp3cut.mp3");
let cntlightning = 0;

window.onload=function first()
{
  canvas.style.visibility='visible';
  starttune.play();

  let progress=setInterval(function progressbar()
  {
    ctx.fillStyle='black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    if(progressang<=Math.PI*2)
    {
     progressang++;
     ctx.strokeStyle='cyan';
     ctx.beginPath();
     ctx.moveTo(250,300);
     ctx.arc(250,300,80,0,progressang,false);
     ctx.fillStyle='cyan';
     ctx.fill();
     ctx.beginPath();
     ctx.arc(700,300,250,0,progressang);
     ctx.lineWidth=60;
     ctx.stroke();
     ctx.beginPath();
     ctx.moveTo(1150,300);
     ctx.arc(1150,300,80,0,progressang,false);
     ctx.fill();
    }
    
    else 
     {
      clearInterval(progress);
      canvas.style.visibility='hidden';
     } 

 
  }, 350);


  setTimeout(function() { startbtn.style.visibility='visible' } ,5000);
  setTimeout(function() { maintitle.style.display='block'} ,4000);
  setTimeout(function() { instbtn.style.visibility='visible'} ,5000);
}

class bubble
{
  constructor(cx,cy,r,color)
  {
    this.cx=cx;
    this.cy=cy;
    this.r=r;
    this.color=color;
    this.vx=Math.floor(Math.random()*10)-5;
    this.vy=Math.floor(Math.random()*10)-5;

  }

  move()
  { 
      
    this.cx+=this.vx;
    this.cy+=this.vy;
  }

  show()
  {
        ctx.fillStyle=this.color;
        ctx.beginPath();
        ctx.arc(this.cx, this.cy, this.r, 0, Math.PI * 2);
        ctx.fill();
  }

  burst(i)
  {
    flag=0;
        canvas.addEventListener('click', function ondown(e)
            {
              let p = e.clientX-canvas.offsetLeft;
              let q = e.clientY-canvas.offsetTop; 
              if(bubbles[i].contains(p,q))
                {
                  flag=1;
                  poptune.play();
                  bubbles.splice(i,1);
                  score++;
                  scoredisp.style.display='block';
                  document.getElementById('myscore').innerHTML = score;
                }

            },false);
    
  }
  
  contains(x,y)
  {
    let xs = this.cx - x;
    let ys = this.cy - y;
    xs*=xs; ys*=ys;
    if(Math.sqrt(xs+ys)<50)
      return true; 
    else
      return false;
  }
  
  bounce(i)
  {
    if (this.cx+this.r<1405 && this.cx+this.r>1400 || this.cx+this.r>1400)
      this.vx*=-1;
    if(this.cy+this.r<605 && this.cy+this.r>595 || this.cy+this.r>600)
      this.vy*=-1;
    if(this.cx<this.r+5 && this.cx>this.r-5 || this.cx<this.r)
      this.vx*=-1;
    if(this.cy<this.r+5 && this.cy>this.r-5 || this.cy<this.r)
      this.vy*=-1;

   /*if(bubbles.length>1)
   {
        for(int j=0; j<bubbles.length; j++)
        {
          if(i!=j)
          {
            let xb=bubbles[i].cx-bubbles[j].cx;
            let yb=bubbles[i].cy-bubbles[j].cy;
            xb*=xb;
            yb*=yb;
            if(Math.sqrt(xb+yb)<100)
            {
              bubbles[i].vx*=-1;
              bubbles[i].vy*=-1;
              bubbles[j].vx*=-1;
              bubbles[j].vy*=-1;
            }  

          }
        }
    }*/

 
  }

  /*fragments()
  {
      while(this.cy<=605 && flag==1)
      {
        ctx.beginPath();
        ctx.fillStyle='turquoise';
        ctx.arc(this.cx, this.cy, 5, 0, Math.PI*2);
        ctx.fill();
        this.cy++;
      } 
  }*/

}

function push(i)
{
  for(let k=0;k<=i;k++)
  {
      let r = 30 + Math.floor(Math.random() * 50);
      let x = r + Math.floor(Math.random() * (1400-2*r)); 
      let y = r + Math.floor(Math.random() * (600-2*r));
      let color =     "rgba(" +
    Math.floor(Math.random() * 256).toString() +
    "," +
    Math.floor(Math.random() * 256).toString() +
    "," +
    Math.floor(Math.random() * 256).toString() +
    ",0.8";
  (")");
      let b = new bubble(x,y,r,color);
      bubbles.push(b);
  } 


}


startbtn.onclick = function draw()
{
  setTimeout(function() { canvas.style.visibility='visible'; }, 1000);
  setTimeout(function() { pausebtn.style.visibility='visible'; }, 500);
  setTimeout(function() { resumebtn.style.visibility='visible'; }, 500);
  setTimeout(function() { lightningbtn.style.visibility='visible'; }, 500);


  var repeat=setInterval(function mainshiz()
  { 
      cnt++;
      cnt2++;
      if(speed<32)
        speed=100;
      if(cnt==speed)
      {
        cnt=0;
        if(cnt2<200)
          speed-=4;
        else if(cnt2>=200 && cnt2<300)
          speed-=8;
        else if(cnt2>=300 && cnt2<500)
          speed-=16;
        else if(cnt2>=500)
          speed-=32;
        else
          speed-=50;
        if(score<10)
          push(score/3);
        else if(score>=10 && score<20)
          push(score/6);
        else if(score>=20 && score<40)
          push(score/8);
        else if(score>40)
          push(score/10);
      }
      
      ctx.fillStyle='black';
      ctx.fillRect(0,0,canvas.width,canvas.height);
      for(i=0;i<bubbles.length;i++)
      {
        bubbles[i].move();
        bubbles[i].show();
        bubbles[i].bounce(i);
        bubbles[i].burst(i);
        //bubbles[i].fragments();
      }

      if(bubbles.length>=10)
      {
        timedisp.style.display  = 'block';
        if(time>0)
         time-=1;
        document.getElementById('timer').innerHTML = time/33.33 - ((time/33.33)%1);
        if(time<=0)
        {
           clearInterval(repeat);
           final();
        }

      }
       
      else
      {
       timedisp.style.display='none'; 
       time=333.33;
      }


      pausebtn.onclick=function()
      {
       clearInterval(repeat);
       resumebtn.onclick=function()
          {
             draw();
          }
      }

      function final()
      {
        endtune.play();
        document.getElementById('timer').innerHTML = 0;
        ctx.font = "50px Arial";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("THAT'S A LOTTA BUBBLES!", canvas.width/2, canvas.height/2);
        document.getElementById('start').innerHTML='RESTART';
        startbtn.onclick=function()
        {
          restarttune.play();
          setTimeout(function() { location.reload(); } , 3000);
        }

      }

      lightningbtn.onclick = function boom()
      {
        cntlightning++;
        if(cntlightning<=3)
        {
         lightningtune.play();
          for(i=0;i<bubbles.length/2;i++)
          {
            bubbles.splice(i,1);
            poptune.play();
            score++;
          }

        }
        
        else
          draw();     
      }

      if(score%10==0 && score!=0 && score!=1)
        scoretune.play();


  } ,30); 


}






    



