var kgnews=function(){

var channels=[
				"Times of India",
				"NDTV",
				"CNN-IBN",
				"Techmeme"
			];
var categories=[];
categories[channels[0]]=[
							["Top Stories","",],
							["Technology",""],
							["Politics",""]];

return {

	getChannels:function(){ return channels;},
	getCategories:function(channel){ return categories[channel];}

};

};


var channelParser=function(){

	

};