function calculateThis() {
    var x = document.getElementById("myBtn").value;
    var y = "bob";
    console.log(x);
    y = y.concat(x[2]);
    document.getElementById("screen").innerHTML = y;
    x = "";
  }


  <button class="calc-button" id="myBtn" value="(" onclick="calculateThis()">(</button>