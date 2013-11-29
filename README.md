waitress.js
===========

A lean JS library that makes waiting on a collection of async calls less painful.

Example:

```javascript
var bootup = new Waitress();

$.ajax({
  type: "GET",
  url: "/api/notifications"
}).done(function(response) {
	bootup.add('notifications');
});

$.ajax({
  type: "GET",
  url: "/api/messages"
}).done(function(response) {
   bootup.add('messages');
});

bootup.when(['notifications', 'messages'], function(){
  console.log('All async calls are done');
});
```
