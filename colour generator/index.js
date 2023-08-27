const h=document.getElementById("bgcol")
const getcolor=(()=>{
    const bgg=(Math.floor(Math.random()*16777215));
   
    const rcolor="#"+bgg.toString(16);
    h.innerText=rcolor;
    document.body.style.background=rcolor;

})

const btn=document.getElementById("clickme");

btn.addEventListener("click",getcolor)
{
   

}