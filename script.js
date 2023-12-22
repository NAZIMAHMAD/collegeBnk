




function navbar()
{
    document.querySelector(".responsive_navbar").style.display='block';

}


function cut()
{
    document.querySelector(".responsive_navbar").style.display='none';

}


/*const toggle_welcomepage = () => {
  
  

document.querySelector(".welcome_page").style.display='block';
document.querySelector(".main").style.position="fixed";
document.querySelector(".main").style.width="100%";


} */

$(document).ready(function(){
   
  
  
  $("#toggle_welcomepage").click(function(){
      $("#welcome_page").fadeToggle("slow");

    });





    $("#explore_btn").click(function(){
      $("#explore_toggle").fadeToggle("slow");

    });

    $("#x_mark").click(function(){
      $("#search_toggle_bar1").hide();

    });


  });



setTimeout(()=>
{
  document.getElementById("search_toggle_bar1").style.display="block";
},10000)


 




  


   


  
    

