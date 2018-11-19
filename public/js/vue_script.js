var socket = io();
//
function pinToStr(pin){
  return "Location:\nX = " + pin.x + ", \nY = " + pin.y;
}

var menu = new Vue({
  el: '#menu',
  data: {
    menu: food,
    checked:[]
  }
})

var orderinfo = new Vue({
  el:'#orderinfo',
  data:{
    name:"",
    email:"",
    location:"",
    payment:"",
    gender:""

  }
})

var orderbutton = new Vue({
  el:'#orderbutton',
  data:{
    form:[]
  },
  methods:{
    markDone: function(){
      ordersummary.flag = true,
      ordersummary.burgers = menu.checked.toString(),
      ordersummary.name = orderinfo.name,
      ordersummary.email = orderinfo.email,
      ordersummary.location = pinToStr(vmd.pin),
      ordersummary.payment = orderinfo.payment,
      ordersummary.gender = orderinfo.gender

      this.addOrder();
    },
    addOrder: function () {
      socket.emit("addOrder", {
        orderItems: ordersummary.burgers,
        name: ordersummary.name,
        email: ordersummary.email,
        location: ordersummary.location,
        pin:vmd.pin,
        payment: ordersummary.payment,
        gender: ordersummary.gender
      });
      console.log(ordersummary.data);
    }
  }
})

var ordersummary = new Vue({
  el:'#ordersummary',
  data:{
    flag: false,
    burgers:[],
    name: "",
    email:"",
    location:"",
    payment:"",
    gender:""
  }
})
