(function init()
{

	//getXMLData("http://www.techmeme.com/feed.xml",function(xml){console.log(getNewsItems(xml));},function(){console.log("failed");});
})();

$(document).ready(function(){
	initApp();
});


var windowsArr=[];
function initApp()
{
	$(".webViewScreen").hide();
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
	
	$(".feed").scroll(function(){
	
		if($(".feed").scrollTop()==0 && parseInt($(".feed").css("left"))>0)
		{
			$(".breadCrumb").css({left:'40%'});
		}
		else if($(".feed").scrollTop()>0 && parseInt($(".feed").css("left"))>0)
			{
				$(".breadCrumb").css({left:'40%'});
			}
		else if($(".feed").scrollTop()==0 && parseInt($(".feed").css("left"))==0)
		{
			$(".breadCrumb").css({left:'0%'});
		}
	
	
	});

	$(".loadingIcon").css({left:''+((($(document).width()-64)/$(document).width())*100)+'%'}).hide();

	$(".webViewCloseBtn").click(function(){
		$(".webViewScreen").fadeOut(500);
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
			$(".breadCrumb .channelName").html($($(this).children("span")[0]).text());
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
								$(".breadCrumb .categoryName").html(categoryname);
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
						if(this.categories.length==1)
							openOrCloseDrawer(false);
						return false;
					}
			
			});
	
	});
}

function populateFeedForCategory(url)
{

$(".loadingIcon").show();
	getXMLData(url,function(xml){
	
	$(".feedListing").empty();
	var items=getNewsItems(xml);
	console.log(items);
	$.each(items,function(){
		console.log("title "+this.title);
		$(".feedListing").append("<li style=\"border-left:10px solid "+getRandomColor(0.5)+";\"><a data-href=\""+this.permUrl+"\" class=\"feedItemTitle\" target=\"_blank\">"+this.title+"</a><div class=\"feedItemDescription\">"+this.description+"</div></li>");
		

		$(".feed ul.feedListing li div.feedItemDescription img").each(function(){

			var img=this;
		 loadImage($(this).attr("data-img-src"), function(blob_uri, requested_uri) {
          img.src = blob_uri;
         
        });


	});
	$(".feed ul.feedListing li div.feedItemDescription a").remove();
	$(".feed ul.feedListing li div.feedItemDescription br").remove();



	});

	$(".feedListing li a.feedItemTitle").click(function(){

		$(".webviewContainer").attr("src",$(this).attr("data-href"));
		$(".webViewScreen").fadeIn(500);
	//	$(this).next().append("<webview src=\""+$(this).attr("data-href")+"\" style=\"width:100%;height:200px;\"></webview>")

	});


	$(".loadingIcon").hide();
	
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
			$(".breadCrumb .categoryName").html($($(this).children("span")[0]).text());
			openOrCloseDrawer(false);
		
	});
}


function openOrCloseDrawer(flag)
{
	if(flag){
	//open
	$(".feed").animate({left:'40%'},500);
	$(".categories").animate({left:'20%'},500);
	$(".breadCrumb").animate({left:'40%'},500);
	$(".feedListing").animate({width:'55%'},500);
	}
	else
	{
	$(".categories").animate({left:'0%'},500);
	$(".feed").animate({left:'0%'},500);
	$(".breadCrumb").animate({left:'0%'},500);
	$(".feedListing").animate({width:'95%'},500);
	
	}
	
}

//myRef = window.open(''+self.location,'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');