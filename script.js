let date = new Date();
let second = document.getElementById('hand-second');
let minute = document.getElementById('hand-minute');
let hour = document.getElementById('hand-hour');
second.style.transform = 'rotate('+date.getSeconds()*6+'deg)';
minute.style.transform = 'rotate('+date.getMinutes()*6+'deg)';
hour.style.transform = 'rotate('+date.getHours()*30+'deg)';
setInterval(function(){
    var date = new Date();
    second.style.transform = 'rotate('+date.getSeconds()*6+'deg)';
    if(date.getSeconds() == 0){
        minute.style.transform = 'rotate('+date.getMinutes()*6+'deg)';
        hour.style.transform = 'rotate('+date.getHours()*30+'deg)';
    }
},1000);