function  graph_swap_monthly(){
	document.getElementById("graph").src = "/images/EECS_330_Netflix_ThisMonth_Graph.jpg";
	var btnContainer = document.getElementById("btn-cnt");
            var btns = btnContainer.getElementsByClassName("graph_button");
            for (var i = 0; i < btns.length; i++) {
              btns[i].addEventListener("click", function(){
                var current = document.getElementsByClassName("graph_button active");
                current[0].className = current[0].className.replace("graph_button active", "graph_button");
                this.className += " active";
            
              });
            }
}


function graph_swap_yearly(){
	document.getElementById("graph").src = "/images/EECS_330_Netflix_ThisYear_Graph.jpg";
	document.getElementById("graph").src = "/images/EECS_330_Netflix_ThisMonth_Graph.jpg";
	var btnContainer = document.getElementById("btn-cnt");
            var btns = btnContainer.getElementsByClassName("graph_button");
            for (var i = 0; i < btns.length; i++) {
              btns[i].addEventListener("click", function(){
                var current = document.getElementsByClassName("graph_button active");
                current[0].className = current[0].className.replace("graph_button active", "graph_button");
                this.className += " active";
            
              });
            }
}

function graph_swap_weekly(){
	document.getElementById("graph").src = "/images/EECS_330_Netflix_ThisWeek_Graph.jpg";
	document.getElementById("graph").src = "/images/EECS_330_Netflix_ThisMonth_Graph.jpg";
	var btnContainer = document.getElementById("btn-cnt");
            var btns = btnContainer.getElementsByClassName("graph_button");
            for (var i = 0; i < btns.length; i++) {
              btns[i].addEventListener("click", function(){
                var current = document.getElementsByClassName("graph_button active");
                current[0].className = current[0].className.replace("graph_button active", "graph_button");
                this.className += " active";
            
              });
            }
}

function change_button_hover(){

}

function change_button_click(){
	
}