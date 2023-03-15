function showDiv1(){
    document.getElementById('div_01').style.display = '';
    document.getElementById('div_02').style.display = 'none';
}

function showDiv2(){
    document.getElementById('div_01').style.display = 'none';
    document.getElementById('div_02').style.display = '';
}

function showDiv3(){
    document.getElementById('div_01').style.display = '';
    document.getElementById('div_02').style.display = '';
}

function showDiv4(){
    document.getElementById('div_01').style.display = 'none';
    document.getElementById('div_02').style.display = 'none';
}

function showDiv5(){
    document.getElementById('div_03').style.display = '';
    document.getElementById('div_04').style.display = 'none';
    document.getElementById('div_05').style.display = 'none';
}

function showDiv6(){
    document.getElementById('div_03').style.display = 'none';
    document.getElementById('div_04').style.display = '';
    document.getElementById('div_05').style.display = 'none';
}

function showDiv7(){
    document.getElementById('div_03').style.display = 'none';
    document.getElementById('div_04').style.display = 'none';
    document.getElementById('div_05').style.display = '';
}

function showDiv8(){
    document.getElementById('div_03').style.display = 'none';
    document.getElementById('div_04').style.display = 'none';
    document.getElementById('div_05').style.display = 'none';
}

document.getElementById("div_3").addEventListener("mouseover", mouseover);
document.getElementById("div_3").addEventListener("mouseout", mouseout);

function mouseover() {
    document.getElementById("div_3").style.color = "white";
}

function mouseout() {
    document.getElementById("div_3").style.color = "black";
}