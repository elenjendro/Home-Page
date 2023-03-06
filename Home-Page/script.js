setInterval(displayClock, 100);
setInterval(displayWeb, 100);

function displayClock()
{
	const time = document.querySelector('#time');
	let date = new Date();
	let hrs = date.getUTCHours();
	let min = date.getUTCMinutes();
	let sec = date.getUTCSeconds();
	let milsec = date.getUTCMilliseconds();
	//console.log("Hora: " + hrs + ":" + min  + ":" + sec)
	hrs = hrs + 1
	if (hrs == 24) {
		hrs = 0
	}
	if (hrs < 10) {
		hrs = "0" + hrs
	}
	if (min < 10) {
		min = "0" + min
	}
	if (sec < 10) {
		sec = "0" + sec
	}
	if (sec < 10) {
		milsec = "0" + milsec
	}
	time.textContent = hrs + ':' + min + ':' + sec ;
}



var formulario=document.querySelector("#searcher");

document.querySelector('#searcher').addEventListener("submit", function(event){
	event.preventDefault(); 
	if(formulario.querySelector("#searchS").value !== "")
	{
		window.location.href = ("https://searx.bufri.net/searxng/search?q=" + formulario.querySelector("#searchS").value);
		console.log("https://searx.bufri.net/searxng/search?q=" + formulario.querySelector("#searchS").value);
	}
})



function displayWeb()
{
	var launcherS = document.querySelector('#launcherS');
	if(launcherS.value !== "" )
	{
		var web=document.createElement('iframe');
		//var div=document.createElement('div');
		//var button=document.createElement('button');
		web.src=(launcherS.value);
		web.height=0.9*screen.height
		web.width=0.9*screen.width
		//web.title="web":

		//div.classList.add="f";
		//div.appendChild(web)
		//div.appendChild(button);

		document.querySelector('body').appendChild(web);
		//window.location.href = (launcherS.value);
		launcherS.value = "";

	}

}
