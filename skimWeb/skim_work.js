var l = ["project1", "project2", "project3", "project4"]
var herf_l = ['skim_p1.html', 'skim_p2.html', 'skim_p3.html', 'skim_p4.html']
var len = l.length;

function add_animation(order){
    let elem = document.getElementById(l[order]);
    elem.onmouseenter = function() { //버튼 밖에서 안으로 마우스가 올라왔을 떄
        for(var j =order+1; j< len; j++){
            var under = document.getElementById(l[j]);
            under.style.transform = "translateY(20vh)";
        }
    };
    elem.onpointerleave = function() { //버튼 안에서 밖으로 마우스가 떠났을 때
        for(var j =order+1; j< len; j++){
            var under = document.getElementById(l[j]);
            under.style.transform = "translateY(0vh)";
        }
    }
    elem.onclick = function() { //버튼을 클릭했을 때
        console.log(herf_l[order])
        location.href=herf_l[order];
    }
}

for (var i = 0; i<len-1; i++){
    add_animation(i)
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

/* // 풀어쓰기
let p1 = document.getElementById("project1");
let p2 = document.getElementById("project2");
let p3 = document.getElementById("project3");
let p4 = document.getElementById("project4");



p1.onmouseenter = function() { //버튼 밖에서 안으로 마우스가 올라왔을 떄
    p2.style.transform = "translateY(20vh)"
    p3.style.transform = "translateY(20vh)"
    p4.style.transform = "translateY(20vh)"
};
p1.onpointerleave = function() { //버튼 안에서 밖으로 마우스가 떠났을 때
    p2.style.transform = "translateY(0vh)"
    p3.style.transform = "translateY(0vh)"
    p4.style.transform = "translateY(0vh)"
}
p1.onclick = function() { //버튼을 클릭했을 때
    location.href='skim_p1.html';
}

p2.onmouseenter = function() { //버튼 밖에서 안으로 마우스가 올라왔을 떄
    p3.style.transform = "translateY(20vh)"
    p4.style.transform = "translateY(20vh)"
};
p2.onpointerleave = function() { //버튼 안에서 밖으로 마우스가 떠났을 때
    p3.style.transform = "translateY(0vh)"
    p4.style.transform = "translateY(0vh)"
}
p2.onclick = function() { //버튼을 클릭했을 때
    location.href='skim_p2.html';
}

p3.onmouseenter = function() { //버튼 밖에서 안으로 마우스가 올라왔을 떄
    p4.style.transform = "translateY(20vh)"
};
p3.onpointerleave = function() { //버튼 안에서 밖으로 마우스가 떠났을 때
    p4.style.transform = "translateY(0vh)"
}
p3.onclick = function() { //버튼을 클릭했을 때
    location.href='skim_p3.html';
}
*/