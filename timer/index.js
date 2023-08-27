const edate="27 August 2023 10:00 AM";

document.getElementById("end-date").innerText=edate;
const inputs=document.querySelectorAll("input")

function clock()
{
    const end=new Date(edate)
    const now=new Date();
    const difference=(now-end)/1000;
    console.log(end);
    console.log(now);
    console.log(difference)

    // convert into days

    inputs[0].value=(Math.floor(difference/3600/24));
    inputs[1].value=(Math.floor(difference/3600)%24);
    inputs[2].value=(Math.floor(difference/60)%60);
    inputs[3].value=(Math.floor(difference)%60);
       


    
    
    
}

setInterval(()=>{
    clock()
},1000)