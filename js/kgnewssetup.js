(function init()
{

	//getXMLData("http://www.techmeme.com/feed.xml",function(xml){console.log(getNewsItems(xml));},function(){console.log("failed");});
})();

$(document).ready(function(){
	populateChannels();

});


function populateChannels()
{
	$.each(kgchannels,function(){
		$(".channelListing").append("<li class=\"channelItem channelItemClickable\"><span>"+this.name+"</span></li>");
	});
	addClickToChannels();
}

function populateCategories(channelname)
{
	$(".categoryListing").empty();
	$.each(kgchannels,function(){
		if(this.name==channelname)
		{
			$.each(this.categories,function(){
			$(".categoryListing").append("<li class=\"channelItem channelItemClickable\" data-url=\""+this[1]+"\"><span>"+this[0]+"</span></li>");
			});
		}
			
	});
	
	addClickToCategories();
}

function addClickToChannels()
{
	
	$(".channelListing li").unbind();
	
	$(".channelListing li").click(function(){
		
		$(".channelListing li").removeClass("channelItemSelected");
		
			populateCategories($($(this).children("span")[0]).text());
			
			$(this).addClass("channelItemSelected");
			
			channel=this;
			$.each(kgchannels,function(){
			
					
					if($(channel).text()==this.name)
					{
						var channelObj=this;
						var urlForfeed='';
						$.each(this.categories,function(){
							
							if(this[0]==channelObj.primaryCategory)
							{
								categoryname=this[0];
								
								populateFeedForCategory(this[1]);
								
								$(".categoryListing li").each(function(){
										if(categoryname==$($(this).children("span")[0]).text())
										{
											$(this).addClass("categoryItemSelected");
											return false;
										}
								});
								return false;
							}
						
						});
						
					}
			
			});
	
	});
}

function populateFeedForCategory(url)
{
	getXMLData(url,function(xml){
	
	console.log(getNewsItems(xml));
	
	
	},function(){
	
	console.log("failed");
	
	});
}

function addClickToCategories()
{
		$(".categoryListing li").unbind();
	
	$(".categoryListing li").click(function(){
		
		$(".categoryListing li").removeClass("categoryItemSelected");
		
			$(this).addClass("categoryItemSelected");
		
	});
}