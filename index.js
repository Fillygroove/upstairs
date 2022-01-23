let corners = document.getElementsByClassName('corner');
let cornersGot = 0;

function cornerUpdate(corner) {
    corner.onclick = undefined;
    corner.style.background = 'transparent';
    cornersGot++;
    if (cornersGot == 4) {
        document.getElementsByClassName("topmenu")[0].style.top = "0vh";
    }
}

document.addEventListener('keydown', logKey);

function logKey(e) {
    if (e.key == 'F1') {
        for (let i = 0; i < corners.length; i++) {
            if (corners[i].onclick != undefined) corners[i].style.background = 'rgba(255, 0, 0, 0.25)';
        }
    }
}
