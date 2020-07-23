const data = {
    "video_list": [
        {
            "name": "Asteria",
            "path": "videos/asteria.mp4",
            "duration": "120",
            "date": "01/01/2020",
            "show": true
        },
        {
            "name": "32 rue Anodontia",
            "path": "videos/32 rue Anodontia.mp4",
            "duration": "120",
            "date": "01/01/2020",
            "show": true
        },
        {
            "name": "Avec le do de la cuillère",
            "path": "videos/Avec le Do de la cuillère.mp4",
            "duration": "120",
            "date": "01/01/2020",
            "show": true
        },
        {
            "name": "Coin coin final",
            "path": "videos/Coin coin final.mp4",
            "duration": "120",
            "date": "01/01/2020",
            "show": true
        }]
}
let currentVideo = 0;

function prev() {
    let videoList = data.video_list;
    if (currentVideo <= 0)
        currentVideo = videoList.length - 1;
    else
        currentVideo--;
    let html = '<video controls> <source src="' + videoList[currentVideo].path + '" type="video/mp4"></video>';
    document.getElementById("array-video").innerHTML = html;
    document.getElementById("title-video").innerHTML = videoList[currentVideo].name;
}

function next()
{
    let videoList = data.video_list;
    if (currentVideo >= videoList.length - 1)
        currentVideo = 0;
    else
        currentVideo++;
    let html = '<video controls> <source src="' + videoList[currentVideo].path + '" type="video/mp4"></video>';
    document.getElementById("array-video").innerHTML = html;
    document.getElementById("title-video").innerHTML = videoList[currentVideo].name;
}

function showVideo(videoList)
{
    let html = "";
    html += videoList[0].name;
    html += '<video controls> <source src="' + videoList[0].path + '" type="video/mp4"></video>';
    document.getElementById("array-video").innerHTML = html;
    document.getElementById("title-video").innerHTML = videoList[0].name;
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

document.addEventListener('keyup', (event) => {
    const keyName = event.key;
    if (keyName === 'ArrowRight')
        next();
    if (keyName === 'ArrowLeft')
        prev();
}, false);

parseFile();
