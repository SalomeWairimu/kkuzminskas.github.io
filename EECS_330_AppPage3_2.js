function  graph_swap_monthly(){
	document.getElementById("graph").src = "/images/EECS_330_Amazon_ThisMonth_Graph_2.jpg";
	var yearly=document.getElementById("graph_yearly_button");
  	var weekly=document.getElementById("graph_weekly_button");
  	var monthly=document.getElementById("graph_monthly_button");
  	yearly.className="graph_button";
  	weekly.className="graph_button";
  	monthly.className="graph_button active";
}


function graph_swap_yearly(){
	document.getElementById("graph").src = "/images/EECS_330_Amazon_ThisYear_Graph_2.jpg";
	var yearly=document.getElementById("graph_yearly_button");
 	var weekly=document.getElementById("graph_weekly_button");
 	var monthly=document.getElementById("graph_monthly_button");
 	yearly.className="graph_button active";
 	weekly.className="graph_button";
	 monthly.className="graph_button";
}

function graph_swap_weekly(){
	document.getElementById("graph").src = "/images/EECS_330_Amazon_ThisWeek_Graph_2.jpg";
	var yearly=document.getElementById("graph_yearly_button");
  	var weekly=document.getElementById("graph_weekly_button");
 	var monthly=document.getElementById("graph_monthly_button");
  	yearly.className="graph_button";
  	weekly.className="graph_button  active";
  	monthly.className="graph_button";
}
