document.getElementById("counter").addEventListener("click", ()=>{
	document.getElementById("counter").textContent = parseInt(document.getElementById("counter").textContent) + 1;
})

setInterval(function(){
document.getElementById("counter").textContent = parseInt(document.getElementById("counter").textContent) + 1;
},1000);