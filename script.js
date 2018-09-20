const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

//function to append item to list
let add = function(item){
	var node = document.createElement("li");
	var text = document.createTextNode(item);
	node.appendChild(text);
	document.getElementById("todo-list").appendChild(node);
}

// list tasks on to-do list
tasks.forEach((task)=>{
	add(task);
});

//strike-out item
let list = document.querySelector("ul");
list.addEventListener("click", function(e) {
	e.target.classList.toggle("done")
});


//confirm box
let check = (e) => confirm("Delete todo?")?e.target.remove():alert("You pressed cancel!");

//delete item
list.addEventListener("dblclick", function(e) {
	check(e); 
	var index = tasks.indexOf(e.target.innerText);
	if (index > -1) {
		tasks.splice(index, 1);
		console.log(tasks);
	}
});

// add new items to to-do list
let newTask = document.querySelector("input");

let update = function(){
	let newTask = document.querySelector("input");
	if(newTask.value.length===0){
		alert("Please enter Todo before submitting!");
	}
	else{
		tasks.push(newTask.value);
		add(newTask.value);
		newTask.value="";
	}
}

newTask.addEventListener("keypress", function(e) {
	if (e.charCode === 13) {
	  	e.preventDefault();
		update();
	}
});

let sbmt = document.querySelector("span");
sbmt.addEventListener("click",function(){
	if (sbmt.className===""){
		update();
	}	
});

//hide form
let btn = document.querySelector("i");

btn.addEventListener("click", ()=>{
	let form = document.querySelector("input");
	if (form.type==="hidden"){
		form.setAttribute("type","");
		document.querySelector("span").className = ""
	}
	else{
		form.setAttribute("type","hidden")
		document.querySelector("span").className = "hidden"
	}
});

