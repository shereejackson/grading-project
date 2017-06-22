var total = 0;
var sum = 0;

function mean() {
  var averageGrade = sum/total;
  document.getElementById("demo4").innerHTML = "The average grade is" + averageGrade;
}

function returnGrade(input){
  if (typeof input == "number"){
    if(input >=90 && input <=100){
      sum +=input;
      total ++;
      return "A"
    }
    else if (input >= 80 && input <= 89){
      sum += input;
      total ++;
      return "B";
    }
    else if (input >= 70 && input <= 79){
      sum += input;
      total ++;
      return "C"
    }
    else if (x >= 60 && input <= 69){
      sum += input;
      total ++;
      return "D"
    }
  }
}
function converter(){
  var a = parseInt(document.getElementById("a").value);
  document.getElementById("demo1").innerHTML = returnGrade(a);
  var b = parseInt(document.getElementById("b").value);
  document.getElementById("demo2").innerHTML = returnGrade(b);
  var c = parseInt(document.getElementById("c").value);
  document.getElementById("demo3").innerHTML = returnGrade(c);

}
