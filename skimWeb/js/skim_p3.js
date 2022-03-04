document.body.addEventListener("mousemove", evt => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;
  
    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY });
  
  
    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1 });
  });


  //button hover&click event
let button = document.getElementById("button");

button.onmouseenter = function() { //버튼 밖에서 안으로 마우스가 올라왔을 떄
    button.innerHTML = "(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k)";
};
button.onpointerleave = function() { //버튼 안에서 밖으로 마우스가 떠났을 때
    button.innerHTML = '(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;back)';
}
button.onclick = function() { //버튼을 클릭했을 때
    button.innerHTML = '(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b<span style="color:red;">ac</span>k)';
    location.href='index.html';
}