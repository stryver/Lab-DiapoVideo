const data = {
    "video_list": [
        {
            "name": "12 Janvier 2013",
            "path": "12-janvier-2013.MOV",
            "duration": "120",
            "date": "2020",
            "show": true
        },
        {
            "name": "31 Mars 2013",
            "path": "31-mars-2013.MOV",
            "duration": "120",
            "date": "2019",
            "show": true
        },
        {
            "name": "31 Mars 2013 (2)",
            "path": "31-mars-2013-2.MOV",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Accord de rue",
            "path": "accord-de-rue.mov",
            "duration": "120",
            "date": "2017",
            "show": true
        },
        {
            "name": "Atelier mao",
            "path": "ateliers-mao.mov",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Au bar",
            "path": "au-bar.mov",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Boots n cats",
            "path": "boots-n-cats.mov",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Concert local",
            "path": "concert-local.MOV",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "David Vincent",
            "path": "david-vincent.mov",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Expo paralleles",
            "path": "expo-paralleles.mp4",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Godrowsy",
            "path": "Godrowsy.mpg",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Halloween",
            "path": "halloween.mov",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Max Totem 27 Juin 2014",
            "path": "max-totem-27-juin-2014.MOV",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "MR Ralph 2013",
            "path": "MR-Raph2013.MOV",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Max Totem 27 Juin 2013",
            "path": "mute-totem-27-juin-2013.MOV",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Ptite soeur",
            "path": "ptite-soeur.mov",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Répétition jonglage",
            "path": "repetition-jonglage.mp4",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Répétition studio",
            "path": "repetition-studio.mp4",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Slump",
            "path": "slump.mp4",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Spot",
            "path": "spot.avi",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Yadlabiere",
            "path": "yadlabiere.MOV",
            "duration": "120",
            "date": "2015",
            "show": true
        },
        {
            "name": "Yeahyeah chaouee 8 Février 2013",
            "path": "yeahyeah-chaouee- 8-fevrier-2013.MOV",
            "duration": "120",
            "date": "2015",
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
