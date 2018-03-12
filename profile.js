var eye_off="";



function changeVisi(id, id2,id3, id4)
{
	eye_off=document.getElementById(id).innerHTML;

	if (eye_off == "visibility_off")
   {
   		eye_off="visibility";
   		text_off="Friends";
   		color="white";
   		opacity="1";

   }

   else
   {
   		eye_off="visibility_off";
   		text_off="Only Me";
   		color="#e7e7e7";
   		opacity="0.7";

   }

   document.getElementById(id).innerHTML=eye_off;
   document.getElementById(id2).innerHTML=text_off;
   document.getElementById(id3).style.background=color;
   document.getElementById(id3).style.opacity=opacity;
   document.getElementById(id4).style.background=color;
}
