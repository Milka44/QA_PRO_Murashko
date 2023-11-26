
var enterData = 5;

var distance = enterData * 1000;
var time =  enterData * 60;
var weight = enterData * 1000;

var conversionType = "time";// "distance" // "time" //"weight"

switch (conversionType) {

  case "distance":
    console.log(enterData +" км це "+distance+" м");
    break;
  case "time":
    console.log(enterData +" г. це "+time+" хв.");
    break;
    case "weight":
    console.log(enterData +" кг це "+weight+" гр.");
    break;    
  default:
    console.log("Немає рішення")

}
