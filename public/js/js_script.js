var menu = document.getElementsByClassName("wrapper")[0];
/* var items = json.items; */
for(var i = 0; i < food.length; i++) {
		var div = document.createElement("div");
    var h3 = document.createElement("h3");
    h3.innerHTML = food[i].name;
    div.appendChild(h3);
    var ul = document.createElement("ul");
    var img = document.createElement("img");
    img.innerHTML = food[i].img;
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    li1.innerHTML = food[i].kCal;
    li2.innerHTML = food[i].gluten;
    li3.innerHTML = food[i].lactose;
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    div.appendChild(img);
    div.appendChild(ul);
    menu.appendChild(div);


}








// var food = [];
// var elements = ["burger a", "burger b", "burger c"];
// var burgerNames = ["burgerName1", "burgerName2", "burgerName3"];
//
// function MenuItem(nam, kCal, lac, glu){
//   this.name = nam;
//   this.kCal = kCal;
//   this.lactose = lac;
//   this.gluten = glu;
//   this.description = function(){
//     return this.name + ', ' + this.kCal + " kCal";
//   };
// }
//
// var b1 = new MenuItem("Beef Paradise", 825, "Contains lactose", true);
// var b2 = new MenuItem("Chicken Royale", 650, "Contains lactose", true);
// var b3 = new MenuItem("Pork heaven", 790, "Contains lactose", true);
// var b4 = new MenuItem("True vegan", 360, "Without lactose", false);
// var b5 = new MenuItem("Veggie Style", 400, "Contains lactose", false);
//
// function add5food(){
//   food.push(b1);
//   food.push(b2);
//   food.push(b3);
//   // food.push(b4);
//   // food.push(b5);
// }
//
// function addfoodInHTML(){
//
//
//   for (var i=0; i<elements.length; i++){
//       console.log(food[i].description() + "\n");
//
//       var myElement = document.getElementById(elements[i]);
//       var myBurger = document.getElementById(burgerNames[i]);
//
//       var listItem1 = document.createElement("li");
//       var listItem2 = document.createElement("li");
//       var listItem3 = document.createElement("li");
//
//       var listValue1 = document.createTextNode(food[i].name);
//       var listValue2 = document.createTextNode(food[i].kCal);
//       var listValue3 = document.createTextNode(food[i].lactose);
//       var listValue4 = document.createTextNode(food[i].gluten);
//
//       myBurger.appendChild(listValue1);
//
//       listItem1.appendChild(listValue2);
//       listItem2.appendChild(listValue3);
//       listItem3.appendChild(listValue4);
//
//       myElement.appendChild(listItem1);
//       myElement.appendChild(listItem2);
//       myElement.appendChild(listItem3);
//
//   }
// }
//
// add5food();
// addfoodInHTML();
