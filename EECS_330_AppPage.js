function  graph_swap_monthly(){
	document.getElementById("graph").src = "/images/mock_monthly_graph.jpeg";
}


function graph_swap_yearly(){
	document.getElementById("graph").src = "/images/mock_graph.jpeg";
}

function graph_swap_weekly(){
	document.getElementById("graph").src = "/images/mock_weekly_graph.jpeg";
}

function selected_graph(){
	if (document.getElementById("graph").src = "/images/mock_monthly_graph.jpeg"){
		document.getElementById("graph_monthly_button").style.background = "black";
		document.getElementById("graph_monthly_button").style.color = "#20A4F3";
	}
	if (document.getElementById("graph").src = "/images/mock_yearly_graph.jpeg"){
		document.getElementById("graph_yearly_button").style.background = "black";
		document.getElementById("graph_yearly_button").style.color = "#20A4F3";
	}
	if (document.getElementById("graph").src = "/images/mock_weekly_graph.jpeg"){
		document.getElementById("graph_weekly_button").style.background = "black";
		document.getElementById("graph_weekly_button").style.color = "#20A4F3";
	}	

}