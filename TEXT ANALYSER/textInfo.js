let textareaE1=document.querySelector("#text");
let text=null;
let data={
    Words : 0,
    Sentences :0,
    Spaces : 0,
    Uppercase :0,
    Lowercase : 0,
    Digits : 0,
    Vowels : 0,
    Consonants : 0,

};
const setText =()=>
{

   text=textareaE1.value;
   const findlength=(i)=>(i===null ? 0 : i.length);
   if(text!=null)
   {
       data.Sentences=findlength(text.match(/\056/gi));
       data.Words=findlength(text.match(/[a-zA-Z]+/gi));
       data.Spaces=findlength(text.match(/\s/g));
       data.Uppercase=findlength(text.match(/[A-Z]/g));
       data.Lowercase=findlength(text.match(/[a-z]/g));
       data.Digits=findlength(text.match(/\d/g));
       data.Vowels=findlength(text.match(/[aeiou]/gi));
       data.Consonants=findlength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
   }
   localStorage.setItem("data",JSON.stringify(data));
   window.location="info.html";

} ;
const getData=()=>
{
    return JSON.parse(localStorage.getItem("data"));
}
const showData=()=>
{
    let data=getData();
    let htmlContent="";

    for(i in data)
    {
        htmlContent+= `<div class="box">
        <h2>${data[i]}</h2>
        <p> ${i}</p>
        </div>`;
    }
    document.querySelector(".info-wrapper").innerHTML=htmlContent;
}
