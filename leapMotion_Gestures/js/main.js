
require([
	"domReady",
	"jquery-2.1.1.min",
	"leap"
], function (domReady) {
	var headNum;
	domReady(function () {
		//ready
		Leap.loop({enableGestures: true},function(frame){
			if(frame.valid && frame.gestures.length > 0){
				frame.gestures.forEach(
					function  (gesture) {
						switch (gesture.type){
				          	case "circle":
				          		console.log("circle");
				              	//console.dir(gesture.state); //start update stop
				              	//console.dir(gesture.progress); //手轉的圈數
				              	//console.dir(gesture.radius); //手轉的半徑
				              	//console.log(gesture.center); //手轉的元圓心
				              	//console.log(gesture.normal); //手法線(手心面對)
				           	break;
					        case "keyTap":
					            console.log("Key Tap Gesture");
					            //console.log(gesture); //
					        break;
					        case "screenTap":
					        	//console.log(gesture); //
					            //console.log("Screen Tap Gesture");
					        break;
					        case "swipe":
					        	console.log("swipe");
					            //console.log(gesture.speed); //速度
					        break;
				        }
					}
				)
			}
		})
	});
});