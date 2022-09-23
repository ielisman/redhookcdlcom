var dragX = {};
var dragY = {};

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  dragX[ev.target.id] = ev.clientX;
  dragY[ev.target.id] = ev.clientY;  
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var el = document.getElementById(data);  

  var topOffset = dragY[data] - ev.clientY;
  var leftOffset = dragX[data] - ev.clientX;
  el.style.top = (el.offsetTop - topOffset) + "px";
  el.style.left = (el.offsetLeft - leftOffset) + "px";  
}

/*
// Make the DIV element draggable:
dragIfExist("draggablecard1");
dragIfExist("draggablecard2");
dragIfExist("draggablecard3");

function dragIfExist(name) {
    elmnt = document.getElementById(name);
    if (typeof (elmnt) != 'undefined' && elmnt != null) {
        dragElement(elmnt);
    }
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
*/