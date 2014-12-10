//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	/*
	var FirstView = require('ui/common/FirstView');

	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});

	//construct UI
	var firstView = new FirstView();
	self.add(firstView);
*/

var Map = require('ti.map');
var win = Ti.UI.createWindow();
 
var annotations = [
    Map.createAnnotation({
        latitude: 32.8245525,
        longitude: -117.0951632,
        title: 'Somewhere',
        animate: true,
        pincolor: Map.ANNOTATION_GREEN,
        draggable: true
    }),Map.createAnnotation({
        latitude: 32.9,
        longitude: -117.0951632,
        title: 'Somewhere',
        animate: true,
        pincolor: Map.ANNOTATION_PURPLE,
        draggable: true
    }),
];
var mapview = Map.createView({
    mapType: Map.NORMAL_TYPE,
    region: {
        latitude:32.8245525,
        longitude:-117.0951632,
        latitudeDelta:.05,
        longitudeDelta:.05
    },
    animate:true,
    regionFit:true,
    userLocation:false,
    annotations: annotations
});
 
win.add(mapview);

return win;
	//return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
