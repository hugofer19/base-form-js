function envia() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var calc = num1 + num2;
    document.getElementById("final").innerHTML = calc;
}
