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

