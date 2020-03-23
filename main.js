function showTime() {
    var e = new Date,
        t = e.getHours(),
        n = e.getMinutes(),
        o = e.getSeconds();
    0 == t && (t = 24), t > 24 && (t -= 24);
    var i = (t = t < 10 ? "0" + t : t) + ":" + (n = n < 10 ? "0" + n : n) + ":" + (o = o < 10 ? "0" + o : o);
    document.getElementById("DigitalClock").innerText = i, document.getElementById("DigitalClock").textContent = i, setTimeout(showTime, 1e3)
}

function changeBg() {
    var e = (new Date).getHours();
    document.body.className = e > 20 || e < 6 ? "night" : e > 15 && e < 20 ? "sunrise" : "day"
}
showTime();