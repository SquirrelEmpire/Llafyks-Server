"use strict";
const Events = require('events');
class EventEmitter extends Events {}
var llafyksEventEmitter = new EventEmitter();
llafyksEventEmitter.emit('test');

module.exports.emitter = llafyksEventEmitter;
