var UI = require('ui');
var Vector2 = require('vector2');
var vibe = require('ui/vibe');
var accel = require('ui/accel');

accel.init();


// Create the Window
var window = new UI.Window({backgroundColor: 'white'});

// Create a background Rect
var bgRect = new UI.Rect({
  position: new Vector2(10, 20),
  size: new Vector2(124, 60),
  backgroundColor: 'black'
});

// Add Rect to Window
window.add(bgRect);

// Create TimeText
var timeText = new UI.TimeText({
  position: new Vector2(0, 25),
  size: new Vector2(144, 30),
  text: "%H:%M",
  font: 'bitham-42-bold',
  color: 'white',
  textAlign: 'center'
});

// Add the TimeText
window.add(timeText);

window.on('accelTap',function(e){
  var detailCard = new UI.Card({
        title:'Code',
        body: '42685'
      });
  vibe.vibrate('double');
  detailCard.show();


  detailCard.on('accelTap',function(e){
    vibe.vibrate('short');
    detailCard.hide();
  });

});

var image = new UI.Image({
  position: new Vector2(0, 100),
  size: new Vector2(144, 36),
  image: 'images/logo.png'
});
window.add(image);
window.show();



