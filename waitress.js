//  Waitress.js 0.0.2

//  (c) 2013 Bjoern Zinssmeister
//  Waitress may be freely distributed under the MIT license.
//  twitter.com/zinssmeister
//
(function(){
  Waitress = function(){
    this.completed = new Array();
    this.add = function(task){
      this.completed.push(task);
    };
    this.when = function(tasks, callback){
      this.callback = callback;
      var self = this;
      this.i = setInterval(function(){
        self.listenForAll(tasks);
      },50);
    };
    this.listenForAll = function(tasks){
      var notFound = 0;
      for(var i = 0; i < tasks.length; i++){
        if(this.completed.indexOf(tasks[i]) == -1) notFound++;
      }
      if(notFound == 0) this.ready();
    };
    this.ready = function(){
      clearInterval(this.i);
      this.callback();
    };
    this.clear = function(){
      clearInterval(this.i);
    }
  };
}).call(this);