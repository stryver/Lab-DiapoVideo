const data = {
    "video_list": [
        {
            "name": "Asteria",
            "path": "videos/asteria.mp4",
            "duration": "120",
            "date": "2020",
            "show": true
        },
        {
            "name": "32 rue Anodontia",
            "path": "videos/32 rue Anodontia.mp4",
            "duration": "120",
            "date": "2019",
            "show": true
        },
        {
            "name": "Avec le do de la cuillère",
            "path": "videos/Avec le Do de la cuillère.mp4",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Coin coin final",
            "path": "videos/Coin coin final.mp4",
            "duration": "120",
            "date": "2017",
            "show": true
        }]
}
let currentVideo = 0;
let fullScreenEnable = false;

function focusAutoPlay()
{
    document.getElementById("currentVideoPlay").focus();
}

function prev() {
    let videoList = data.video_list;
    if (currentVideo <= 0)
        currentVideo = videoList.length - 1;
    else
        currentVideo--;
    let html = '<video controls class="video-control" id="currentVideoPlay"> <source src="' + videoList[currentVideo].path + '" type="video/mp4"></video>';
    document.getElementById("array-video").innerHTML = html;
    document.getElementById("title-video").innerHTML = videoList[currentVideo].name;
    focusAutoPlay();
}

function next()
{
    let videoList = data.video_list;
    if (currentVideo >= videoList.length - 1)
        currentVideo = 0;
    else
        currentVideo++;
    let html = '<video controls class="video-control" id="currentVideoPlay"> <source src="' + videoList[currentVideo].path + '" type="video/mp4"></video>';
    document.getElementById("array-video").innerHTML = html;
    document.getElementById("title-video").innerHTML = videoList[currentVideo].name;
    focusAutoPlay();
}

function showVideo(videoList)
{
    let html = "";
    html += '<video controls class="video-control" id="currentVideoPlay"> <source src="' + videoList[0].path + '" type="video/mp4"></video>';
    document.getElementById("array-video").innerHTML = html;
    document.getElementById("title-video").innerHTML = videoList[0].name;
    focusAutoPlay();
}

function parseFile()
{
    let nbVideo = data.video_list.length;
    let videoList = data.video_list;
    if (videoList === 0) {
        alert("Vous n'avez aucune vidéo");
        return;
    }
    if (videoList <= 0) {
        alert("Erreur lors du chargement des vidéos");
        return;
    }
    showVideo(videoList, nbVideo);
}

function videoFullScreen()
{
    let elem = document.getElementById("currentVideoPlay");
    if (elem.exitFullscreen) {
        elem.exitFullscreen();
    } else if (elem.mozCancelFullScreen) { /* Firefox */
        elem.mozCancelFullScreen();
    } else if (elem.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitExitFullscreen();
    } else if (elem.msExitFullscreen) { /* IE/Edge */
        elem.msExitFullscreen();
    }
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function displayStateVideo() {

}

document.addEventListener('keyup', (event) => {
    const keyName = event.key;
    if (keyName === 'ArrowRight')
        next();
    if (keyName === 'ArrowLeft')
        prev();
    if (keyName === 'ArrowUp')
        displayStateVideo();
    if (keyName === " ") {
        videoFullScreen();
    }
}, false);

parseFile();
