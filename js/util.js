// util for ajax
function newsItem()
{
	var title;
	var images=[];
	var imageSizes=[];
	var permUrl;
	var description;
	var cData;
	var date;
}

function getRandomColor(opacity)
{
var r = function () { return Math.floor(Math.random()*256) };
    return "rgba(" + r() + "," + r() + "," + r() + ","+opacity+")";
}

function getXMLData(rssUrl,successCallback,failureCallback)
{
	$.ajax({
		url:rssUrl,
		dataType:'xml',
		success:successCallback,
		failure:failureCallback
	});
}

function getNewsItem(node)
{
	var item=new newsItem();
	if($(node).find("title").length>0)
		item.title= $(node).find("title").text();

	if($(node).find("description").length>0)
	{
		if($(node).find("description").text().indexOf("<![CDATA[")!=-1)
		{
			var insideCData=$(node).find("description").text().substring($(node).find("description").text().indexOf("<![CDATA["),$(node).find("description").text().lastIndexOf("]]>"));
			console.log(insideCData);
			insideCData=insideCData.replace(/src=/g,"data-img-src=");
			insideCData=insideCData.replace(/href=/g,"data-a-href=");
			item.description=insideCData;
		}
		else if($(node).find("description").text().indexOf("src=")!=-1 || $(node).find("description").text().indexOf("href=")!=-1)
		{
			var insideCData=$(node).find("description").text();
			console.log(insideCData);
			insideCData=insideCData.replace(/src=/g,"data-img-src=");
			insideCData=insideCData.replace(/href=/g,"data-a-href=");
			item.description=insideCData;
		}
		else
		{
			item.description=$(node).find("description").text();
		}
		
	}


	if($(node).find("link").length>0)
		item.permUrl=$(node).find("link").text();

	if($(node).find("pubDate").length>0)
		item.date=new Date($(node).find("pubDate").text());
    

    return item;
}

function getNewsItems(rssXmlContent)
{
	var newsItems=new Array();

	$(rssXmlContent).find('item').each(function() {
                  newsItems.push(getNewsItem(this));    
    });
	
	return newsItems;
}

var loadImage = function(uri, callback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function() {
 
    callback(window.webkitURL.createObjectURL(xhr.response), uri);
  }
  xhr.open('GET', uri, true);
  xhr.send();
}

 