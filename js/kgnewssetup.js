(function init()
{

	//getXMLData("http://www.techmeme.com/feed.xml",function(xml){console.log(getNewsItems(xml));},function(){console.log("failed");});
})();

$(document).ready(function(){
	initApp();
});


function initApp()
{
//populate channels
	populateChannels();
	//populate category for first channel
	populateCategories(kgchannels[0].name);
	//populate the breadcrumb
	$(".breadCrumb .channelName").html(kgchannels[0].name);
	$(".breadCrumb .categoryName").html(kgchannels[0].primaryCategory);
	//populate the feed for the first category
	$($(".channelListing li")[0]).addClass("channelItemSelected");
	$.each(kgchannels[0].categories,function(){
							
							if(this[0]==kgchannels[0].primaryCategory)
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
						
						
	
	$(".breadCrumb").click(function(){
		if(parseInt($(".feed").css("left"))>0)
		{
			//close
			openOrCloseDrawer(false);
		}
		else
		{
			//open
			openOrCloseDrawer(true);
		}
	});
}


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
		
			populateFeedForCategory($(this).attr("data-url"));
			$(this).addClass("categoryItemSelected");
		
	});
}


function openOrCloseDrawer(flag)
{
	if(flag){
	//open
	$(".feed").animate({left:'40%'},500);
	$(".categories").animate({left:'20%'},500);
	}
	else
	{
	$(".categories").animate({left:'0%'},500);
	$(".feed").animate({left:'0%'},500);
	
	
	}
	
}