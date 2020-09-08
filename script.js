var button=document.getElementById("button");
var input=document.getElementById("inputText");
//var ul = document.getElementById("ul_o");
var ul = document.querySelector('ul');
var li = document.getElementsByTagName('li');



button.addEventListener('click', function(){
    if(input.value.length>0){
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
        liClickEvent();
    }
    
});

input.addEventListener('keypress', function(event){
    //console.log(event.keyCode);
    if(event.keyCode==13 && input.value.length>0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
        liClickEvent();
    }
});

liClickEvent();

function liClickEvent(){
    for(var i=0; i<li.length; i++){
        //console.log('this is loop number: ', i);
        //console.log(document.getElementsByTagName('li').length);
        li[i].addEventListener('click', function(){
            this.classList.toggle('done')
        })
    }
}

/*
var button = document.getElementById('button');
var input = document.getElementById('inputText');
var ul = document.querySelector('ul');
var li = document.getElementsByTagName('li')

function changeClass(){
	this.classList.toggle('done');
}

function liEvent(){
	for( i=0; i<li.length; i++){
	li[i].addEventListener('click', changeClass)
	}
}



function checkInputlength(){
	return input.value.length;
}

function createListElement(){

    var li = document.createElement("li");
    var button = document.createElement('button');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(button)
    button.innerHTML = "delete";
    input.value = "";

    liEvent();
    buttonListElement();
}


function addElement(){

	if(checkInputlength() > 0 && event.keyCode === 13){
		createListElement();
	}
}



function buttonListElement(){
	var button = document.querySelectorAll('li button');
	for( i=0; i<button.length; i++){
	button[i].addEventListener('click', clearElement)
	}
}

function clearElement(){
	for(var i=0; i<li.length; i++){
		this.parentNode.remove()
	}
}

function Onclick(){

	if(checkInputlength() > 0){
		createListElement();
	}

}


button.addEventListener('click', Onclick);
input.addEventListener('keypress', addElement);


liEvent();
buttonListElement();

*/


