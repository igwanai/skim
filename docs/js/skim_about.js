var imgArray = [
    "images/skim_about_1.png",
    "images/skim_about_2.png",
    "images/skim_about_3.png",
    "images/skim_about_4.png",
    "images/skim_about_5.png",
    "images/skim_about_6.png"
];
var files = new Array();

var indexNum = 0;

//미리 이미지를 load해놓기.. 근데 왜.. 깜빡거림이 사라졌는지 이해 불가
if (document.images) {
    for (var i=0; i<6; i++) {
        files[i] = new Image();
        files[i].src = "./images/skim_about_"+(i+1)+".png";
    }
}

$(window).on('load', function () {
    $("#load").hide();
    showImage(indexNum);
    
});

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
    button.innerHTML = '(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b<span style="color:#AFAFAF;">ac</span>k)';
    location.href='index.html';
}