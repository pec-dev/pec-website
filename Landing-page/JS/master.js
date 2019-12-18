
//===========================timer clock===========================
startTime();
function startTime() {
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = "";
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var second = d.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    second = second <10? '0'+second:second;
    var strTime = hours + ':' + minutes +':' + second +' ' + ampm;
    date=months[d.getMonth()]+" "+d.getDate()+" "+d.getFullYear()+" | "+strTime;
    document.getElementById('date').innerHTML=date;
    var t = setTimeout(startTime, 200);
}

//===========================scroll button===========================
function snap(){
    $("#snap").animate({height:'toggle',opacity:'toggle'},'slow');
    i++;
}

//===========================scroll message===========================
window.setTimeout(message,3000);
function message(){
    document.getElementById("butt").style.fontSize="15px";    
    document.getElementById("butt").innerHTML="Click here or scroll down";
}

//===========================scroll effect===========================
var i=0,j,k=0;
window.addEventListener('scroll',function()
{    
    if(i==0)
    {
        $("#snap").animate({height:'toggle',opacity:'toggle'},650,'swing');
        i++;
    }
    if(i>0 && k==0)
    {
        document.documentElement.scrollTop=0;
        window.setTimeout(done,1000);
    }
});

function done(){
    k=1;
}