var eye_off="";


function changeVisi(id, id2)
{
	eye_off=document.getElementById(id).innerHTML;

	if (eye_off == "visibility_off")
   {
   		eye_off="visibility";
   		text_off="Friends";
   }
  else
   {
   		eye_off="visibility_off";
   		text_off="Only Me";

   }

   document.getElementById(id).innerHTML=eye_off;
   document.getElementById(id2).innerHTML=text_off;

}
