import React from 'react'
export const Inquiries = () => {
  /*
  const toggleFullScreen = () => {
    if ((document.fullscreenElement && document.fullscreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  const dragElement=(props)=>{
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

      const dragMouseDown=(e)=>{
        e = e || window.event;
        e.preventDefault();
        // get tde mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever tde cursor moves:
        document.onmousemove = elementDrag;
      }

      if (document.getElementById(props.id + "header")) {
        // if present, tde header is where you move tde DIV from:
        document.getElementById(props.id + "header").onmousedown = dragMouseDown;
      } else {
        // otderwise, move tde DIV from anywhere inside tde DIV:
        props.onmousedown = dragMouseDown;
      }

      const elementDrag=(e)=> {
        e = e || window.event;
        e.preventDefault();
        // calculate tde new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set tde element's new position:
        props.style.top = (props.offsetTop - pos2) + "px";
        props.style.left = (props.offsetLeft - pos1) + "px";
      }

      const closeDragElement=()=> {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
  }

  // Make tde DIV element draggable:

  dragElement(document.getElementById("mydiv1"));
  dragElement(document.getElementById("mydiv2"));
  dragElement(document.getElementById("mydiv3"));
  dragElement(document.getElementById("mydiv4"));
  dragElement(document.getElementById("mydiv5"));
  dragElement(document.getElementById("mydiv6"));
  dragElement(document.getElementById("mydiv7"));
  dragElement(document.getElementById("mydiv8"));

  // Make tde DIV element draggable:

  // dragElement(document.getElementById("mydiv1"));
  // dragElement(document.getElementById("mydiv2"));

  */
 
  const myComponentStyle = {
    fontSize: "20px",
  }
  const tableStyle={
    borderWidth: "3px",
    borderStyle: "solid",
    borderColor: "rgb(197, 197, 197)",
    marginTop: "57px",
    tableLayout: "fixed",
    borderCollapse: "collapse"
  }
  return (
    <div className="px-20 py-12">
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-x-2 gap-y-10">
        <div>
          <button className="bg-b text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <i className="fas fa-download" style={myComponentStyle}></i>
          </button>
          <p className="mt-2 text-sm text-t font-bold">Export XLSX</p>
        </div>
        <div>
          <button className="bg-pu text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
            <i className="fas fa-info-circle" style={myComponentStyle}></i>
          </button>
          <p className="mt-2 text-sm text-t font-bold">New Inquiry</p>
        </div>
      </div>
    </div>
  )
}
