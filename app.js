window.onload = () => {
  document.getElementById("width").innerText = screen.width + " px";
  document.getElementById("height").innerText = screen.height + " px";
  document.getElementById("resolution").innerText =
    screen.width + " X " + screen.height + " px";
  document.getElementById("aheight").innerText = screen.availHeight + " px";
  document.getElementById("awidth").innerText = screen.availWidth + " px";
  document.getElementById("color").innerText = screen.colorDepth + " px";
  document.getElementById("pixal").innerText = screen.pixelDepth + " px";
};
