
function clock(){
    let hour=document.getElementById("hours");
    let min=document.getElementById("min");
    let sec=document.getElementById("sec");
    let period=document.getElementById("period");
    
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm=h>=12?"PM":"AM";
    
    let d=new Date().toLocaleDateString("en-GB");
    document.querySelector('.date').textContent=d;

    if(h>12)
        h=h-12;

    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;

    hour.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
    period.innerHTML=ampm;
};
setInterval(clock,1000);