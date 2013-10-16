function newsItem()
{
	var title;
	var images=[];
	var imageSizes=[];
	var permUrl;
	var description;
	var cData;
}

function ndtv_rss_parser(url)
{
	var newsItems=[];


}


(function init()
{

	getXMLData("http://www.techmeme.com/feed.xml",function(xml){console.log(getNewsItems(xml));},function(){console.log("failed");});
})();

$(document).ready(function(){


	$(".closeBtn").hover(function(){$(this).animate({marginLeft:'-80px'},200);}).mouseout(function(){$(this).animate({marginLeft:'-25px'},200);}).click(function(){window.close();});


	populateChannels();

});


function populateChannels()
{
	$.each(kgchannels,function(){
		$(".channels ul.channelList").append("<li class=\"channelItem channelItemBorder\">"+this.name+"</li>");
	});
}