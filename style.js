var h=document.getElementById('hours');
var m=document.getElementById('Minute');
var s=document.getElementById('Second');

setInterval(()=>{
    d=new Date();
    hTime=d.getHours();
    mTime=d.getMinutes();
    sTime=d.getSeconds();
    hrotation=30*hTime + mTime/2;
    mrotation=6*mTime;
    srotation=6*sTime;
    h.style.transform=`rotate(${hrotation}deg)`;
    m.style.transform=`rotate(${mrotation}deg)`;
    s.style.transform=`rotate(${srotation}deg)`;
    
},1000)