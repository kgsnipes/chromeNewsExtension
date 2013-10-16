var kgnews=function(){
/*add your channels*/
var channels=[
				"Times of India",
				"NDTV",
				"CNN-IBN",
				"Techmeme"
			];
			
			
var categories=[];

/*categories for times of india*/
categories["Times of India"]=[
							/*topic,parserfunction(rss url),isdefault*/
							["Recent Stories",toi_rss_parser("http://timesofindia.feedsportal.com/c/33039/f/533965/index.rss"),true],
							["Technology",toirssparser("http://timesofindia.indiatimes.com/rssfeeds/5880659.cms"),false],
							["Politics",toirssparser(""),false]
							
							];

return {

	getChannels:function(){ return channels;},
	getCategories:function(channel){ return categories[channel];}

};

};


function toi_rss_parser(url){

var newsItems=[];


	

}


function newsItem()
{
	var title;
	var images=[];
	var imageSizes=[];
	var permUrl;
	var description;
	var cData;
}