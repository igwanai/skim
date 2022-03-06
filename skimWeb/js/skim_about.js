var imgArray = new Array();
// var files = [
//     "./images/skim_about_1.png",
//     "./images/skim_about_2.png",
//     "./images/skim_about_3.png",
//     "./images/skim_about_4.png",
//     "./images/skim_about_5.png"]
// var loadcount = 0;
var indexNum = 0;


imgArray[0] = "images/skim_about_1.png";
imgArray[1] = "images/skim_about_2.png";
imgArray[2] = "images/skim_about_3.png";
imgArray[3] = "images/skim_about_4.png";
imgArray[4] = "images/skim_about_5.png";
imgArray[4] = "images/skim_about_6.png";

// 이미지 로딩을 이쁘게 해보려고 한 흔적
// $(document).ready( function() {
//     for (var i=0; i<files.length; i++) {
//         imgArray[i] = new Image();
//         imgArray[i].src = files[i];
//     }
// });

$(window).on('load', function () {
    $("#load").hide();
    showImage(indexNum);
});

// function loadImage() {
//     for(i=0; i<imgArray.length; i++) {
//         imgArray[i].onload = function() {
//             loadcount++;
//             window.alert(loadcount);
//         }
        
//     }
//     // var timer = setInterval(function() {
//     if (loadcount == 5) {
//         // clearInterval(timer);
//         $("#load").hide();
//         showImage(indexNum);
//     }
//     else {
//         $("#load").show();
//     }
//     // }, 100);
// }
// "url("+imgArray[num]+")";

function showImage(num) {
    var objImg = document.getElementById("image");
    objImg.style.backgroundImage = "url("+imgArray[num]+")";

    if (indexNum == imgArray.length-1) indexNum = 0;
    else indexNum++;

    setTimeout("showImage("+indexNum+")", 1000); // 1000ms = 1s마다 재귀적으로 showImage()함수를 다시 호출
}

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