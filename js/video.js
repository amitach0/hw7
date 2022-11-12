var video = document.getElementById("player1");
var rate = 1;
var current = 0;
var muteB = document.getElementById("mute");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	console.log("Auto play is set to false")
	console.log("Loop is set to false")

	rate = 1;
	video.defaultMuted = false;
	video.autoplay = false

});

function playVideo(){
	console.log("Play Video");
	document.getElementById("volume").innerHTML = video.volume *100 + "%";
	video.play();

}
function pauseVideo(){
	console.log("Pause Video")
	video.pause();
}
function slowDown(){
	rate = rate * 0.9;
	video.playbackRate= rate;
	console.log("Speed is " + rate);
}
function speedUp(){
	rate = rate*1.1;
	video.playbackRate= rate;
	console.log("Speed is " + rate);

}
function skipAhead(){
	if(video.currentTime+10>video.duration){
		video.currentTime = 0;
	}else{
		video.currentTime = video.currentTime+10;
	}
	
	console.log("Video current time is " + video.currentTime);
}

function muteButton(){
	if(video.muted==true){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Muted";
	}else{
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmuted";

	}
	
}
function changeVolume(){
	video.volume = (document.getElementById("slider").value/100);
	console.log("The current value is " + video.volume);
	document.getElementById("volume").innerHTML = video.volume *100 + "%";
}

function oldschool(){
	video.classList.add("oldSchool");
}
function og(){
	video.classList.remove("oldSchool");

}

document.querySelector("#play").addEventListener("click", playVideo)
document.getElementById("pause").addEventListener("click", pauseVideo)
document.getElementById("slower").addEventListener("click", slowDown)
document.getElementById("faster").addEventListener("click", speedUp)
document.getElementById("skip").addEventListener("click", skipAhead)
document.getElementById("mute").addEventListener("click", muteButton)
document.getElementById("vintage").addEventListener("click", oldschool)
document.getElementById("orig").addEventListener("click", og)
document.getElementById("video").addEventListener("click", changeVolume)
