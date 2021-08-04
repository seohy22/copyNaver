function change(){
    const ipBtn = document.getElementById('ipOnOff');
    ipBtn.classList.toggle('clicked');
    if (ipBtn.className == 'clicked'){
        ipBtn.innerText ="OFF";
    } else{
        ipBtn.innerText="ON";
    }
}

function delPop(){
    var text = document.getElementById("popUp");
    text.style.display = "none";
}

