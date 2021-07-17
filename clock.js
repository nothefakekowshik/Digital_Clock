function updateClock()
{
    window.setInterval("updateClock()", 1000);
    var now=new Date();
    var hours_now=now.getHours();
    var minutes_now=now.getMinutes();
    var seconds_now=now.getSeconds();
    var day_or_night="AM";
    if(hours_now>=12)
    {
        day_or_night="PM";
        if(hours_now>12)
        {
            hours_now=hours_now-12;
        }
    }
    if(hours_now==0)
    {
        hours_now=12;
    }
    document.getElementById("hour").innerHTML=hours_now;
    document.getElementById("minutes").innerHTML=minutes_now;
    document.getElementById("seconds").innerHTML=seconds_now;
    document.getElementById("period").innerHTML=day_or_night;

}          
