
require([
	"domReady",
	"jquery-2.1.1.min",
	"leap"
], function (domReady) {
	var headNum;
	domReady(function () {
		//ready
		Leap.loop(function(frame){
			 headNum = frame.fingers.length; //手數量
		    if(headNum!=0){
		      var head_1 = frame.hands[0];
		      console.log("角度"+(head_1.palmNormal[0]*-180/Math.PI));
		      console.log("x="+(head_1.palmPosition[0]));
		      console.log("y="+(head_1.palmPosition[1]));
		      console.log("z="+(head_1.palmPosition[2]));
		    }
		})
	});
});