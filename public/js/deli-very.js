/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vmd = new Vue({
  el: '#dots',
  data: {
    orders: {},
    pin:{},
    value:"T",
    placed:false
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },

        displayOrder: function (event) {
          var offset = {x: event.currentTarget.getBoundingClientRect().left,
                        y: event.currentTarget.getBoundingClientRect().top};
          this.pin = { x: event.clientX - 10 - offset.x,
                       y: event.clientY - 10 - offset.y };
          console.log(this.pin);
          this.placed = true;
        }
  }
});
