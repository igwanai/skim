let i_width = 7; //폰트크기 75vh단위 기준 i의 너비 = 약7vh

class rows{
    constructor(){
        this.rownum = 1;
        this.update_row()
    }
    update_row(){
        var expected_rownum;
        if(window.innerWidth>window.innerHeight){
            expected_rownum = 4
        }else{
            expected_rownum = parseInt(5*window.innerHeight/window.innerWidth-1)
        }

        for(var i = this.rownum+1; i<=expected_rownum; i++){
            this.add_row(i);
        }
        for(var i = this.rownum; i>=expected_rownum+1; i--){
            this.remove_row(i)
        }
    }

    add_row(order){
        var newRow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        var newUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
    
        newRow.setAttribute("id", String(order));
        newRow.setAttribute("xmlns:xlink","http://www.w3.org/2000/xlink");
    
        newUse.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#graphicField")
        newUse.setAttribute("x" ,"-" + String(order-1) + "00vw")
        newUse.setAttribute("y" , "0")
        newUse.setAttribute("width", "100%")
        newUse.setAttribute("height" , "25vmin")
        
        newRow.style.position = "absolute"
        newRow.style.top = String((20*(order-1))+10)+"vmin"
        newRow.style.left = "0"
        newRow.style.width =  String(order)+"00%"
        newRow.style.height =  "26vmin"
    
        newRow.appendChild(newUse);
        document.body.appendChild(newRow);
        this.rownum +=1;
    }

    remove_row(order){
        var elem = document.getElementById(String(order));
        if(elem!==null){
            elem.parentElement.removeChild(elem);
            this.rownum -=1;
        }
    }
}

var rowss = new rows();

class root_graphic{
    constructor(){
        this.mx = 34
        this.cur = 34 // x position of recent i
        this.min = 34 // minimum x position of i
        this.y = 25;
        this.update_max_mx()
    }

    update_max_mx(){
        if(window.innerWidth>window.innerHeight){
            this.max_mx = rowss.rownum*100* window.innerWidth/window.innerHeight -23
        }else{
            this.max_mx = rowss.rownum*100 -23
        }
    }

    move_m(val){
        var x = Math.min(Math.max(val, 34), this.max_mx)
        this.mx = x;
        document.getElementById("m").style.transform = "translate("+ String(x) + "vmin, "+ String(this.y)+ "vmin)";
    }

    //add i
    addElement(id, x){
        if(document.getElementById(String(id))==null){
            var newI = document.createElementNS("http://www.w3.org/2000/svg", "text");
            var graphic = document.getElementById("graphicField");
            
            //blank or i
            if(Math.random()>0.5){ // 0.0 <= Math.random() < 1.0
                var text = document.createTextNode("i");
            }else{
                var text = document.createTextNode("");
            }
            newI.appendChild(text);
            graphic.appendChild(newI);
    
            newI.setAttribute("id", String(id));
            newI.style.transform =  "translate(" + String(x) + "vmin, " + String(this.y) + "vmin)";
    
            return newI
        }
    }

    //remove i
    removeElement(id){
        var elem = document.getElementById(id);
        if(elem!==null){
            elem.parentElement.removeChild(elem);
        }
    }

    vmin(value){
        if(window.innerWidth>window.innerHeight){
            return 100 *value/window.innerHeight;
        }else{
            return 100 * value/window.innerWidth;
        }

    }

    //add, remove i depends on m position
    add_i(mx){
        var temp = this.cur
        for(var i = this.cur+i_width; i<= this.vmin(mx); i+=i_width){  
            this.addElement(String(i).concat(String(this.y)), i - 7.5);
            temp = i    
        }                                                    
        this.cur = Math.max(temp, this.min);
    }

    remove_i(mx){
        var temp = this.cur
        for(var i = this.cur; i>= this.vmin(mx); i-=i_width){
            this.removeElement(String(i).concat(String(this.y)));
            temp = i  
        }
        this.cur = Math.max(temp, this.min);
    }
}

var root = new root_graphic()         //첫 번째 줄



let element_m = document.getElementById('m')
let isPause = false;
let timer;

function get_matrix(){
    if(!isPause){
        const style = window.getComputedStyle(element_m)
        const matrix = style.transform
        const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')
        const x = matrixValues[4]
        root.add_i(x);
        root.remove_i(x);
    }
}

element_m.addEventListener('transitionrun', function(){
    console.log("transiton start")
    isPause = false;
    timer = setInterval(function () {
        get_matrix();
    }, 100);
});

element_m.addEventListener('transitionend', function(){
    console.log("transiton end")
    clearInterval(timer);
    isPause = true;
});

//window resize event
window.addEventListener("resize", function(){
    rowss.update_row();
    root.update_max_mx();
    root.move_m(root.mx);
});

let interval = setInterval(() => {
    fetch("/sensor")
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        root.move_m(res.num)
    });  
}, 500);


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
    location.href='/';
}


