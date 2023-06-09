var video;


window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.volume=document.querySelector('#slider').value / 100;
	document.querySelector('#volume').textContent = (video.volume * 100).toString()+"%";

});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log(`New speed is ${video.playbackRate}`);
});


document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log(`New speed is ${video.playbackRate}`);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log(`Original location ${video.currentTime}`);
	if (video.currentTime + 15 > video.duration) {
		video.currentTime = 0;
	} else {
	video.currentTime = video.currentTime + 10;}
	
	console.log(`New location ${video.currentTime}`);
});

document.querySelector('#slider').addEventListener('change', function(e) {
	video.volume=e.target.value / 100;
	document.querySelector('#volume').textContent = (video.volume * 100).toString()+"%";
	console.log(video.volume)
})


document.querySelector('#mute').addEventListener('click', function(e) {
    if (video.muted){
        video.muted=false;
        let muteButton= document.getElementById("mute");
        muteButton.textContent = "Mute";
        console.log("it is Unmuted");
    }
    else {
        video.muted=true;
        let muteButton= document.getElementById("mute");
        muteButton.textContent = "Unmute";
        console.log("it is Muted");
    }
})

document.querySelector('#vintage').addEventListener("click", function(){
	video.classList.add('oldSchool');

})

document.querySelector('#orig').addEventListener("click", function(){
	video.classList.remove('oldSchool');

})