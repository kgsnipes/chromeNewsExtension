/*kgnews channels*/
var kgchannels=[];

kgchannels.push({
name:"Times of India",
categories:[
				["Top Stories","http://timesofindia.feedsportal.com/c/33039/f/533965/index.rss"],
				["India","http://timesofindia.feedsportal.com/c/33039/f/533965/index.rss"],
				["World","http://timesofindia.indiatimes.com/rssfeeds/296589292.cms"],
				["Business","http://timesofindia.indiatimes.com/rssfeeds/1898055.cms"],
				["Technology","http://timesofindia.indiatimes.com/rssfeeds/5880659.cms"],
				["Science","http://timesofindia.indiatimes.com/rssfeeds/-2128672765.cms"],
				["Sports","http://timesofindia.indiatimes.com/rssfeeds/4719148.cms"]
			],
primaryCategory:"Top Stories"

});


kgchannels.push({
name:"NDTV",
categories:[
				["Top Stories","http://feeds.feedburner.com/NdtvNews-TopStories?format=xml"],
				["Latest","http://feeds.feedburner.com/NDTV-LatestNews?format=xml"],
				["World","http://feeds.feedburner.com/ndtv/TqgX?format=xml"],
				["Technology","http://feeds.feedburner.com/NDTV-Tech?format=xml"],
				["Cricket","http://feeds.feedburner.com/NDTV-Cricket?format=xml"],
				["Other Sports","http://feeds.feedburner.com/NDTV-Sports?format=xml"],
				["Movies","http://feeds.feedburner.com/NDTV-Ent?format=xml"],
				["India","http://feeds.feedburner.com/ndtv/Lsgd?format=xml"],
				["Cities","http://feeds.feedburner.com/NdtvNews-Cities?format=xml"],
				["Personalities","http://feeds.feedburner.com/News-People?format=xml"]



			],
primaryCategory:"Top Stories"

});

/*kgchannels.push({
name:"TNW",
categories:[
				["WEB","http://thenextweb.com/feed/"]
				
			],
primaryCategory:"WEB"

});*/



kgchannels.push({
name:"CNN IBN	",
categories:[
				

				["Top","http://ibnlive.in.com/ibnrss/top.xml"],
				["Arts","http://ibnlive.in.com/ibnrss/rss/arts/arts.xml"],
				["Auto","http://ibnlive.in.com/ibnrss/rss/auto/auto.xml"],
				["Books","http://ibnlive.in.com/ibnrss/rss/books/books.xml"],
				["Business","http://ibnlive.in.com/ibnrss/rss/business/business.xml"],
				["Buzz","http://ibnlive.in.com/ibnrss/rss/buzz/buzz.xml"],
				["CJ","http://ibnlive.in.com/ibnrss/rss/citizenjournalist/citizenjournalist.xml"],
				["cricketnext","http://ibnlive.in.com/ibnrss/rss/cricketnext/cricketnext.xml"],
				["Documents","http://ibnlive.in.com/ibnrss/rss/documents/documents.xml"],
				["Elections","http://ibnlive.in.com/ibnrss/rss/elections/elections.xml"],
				["Exams","http://ibnlive.in.com/ibnrss/rss/exams/exams.xml"],
				["Fashion","http://ibnlive.in.com/ibnrss/rss/fashion/fashion.xml"],
				["Forbes India","http://ibnlive.in.com/ibnrss/rss/forbesindia/forbesindia.xml"],
				["FT Specials","http://ibnlive.in.com/ibnrss/rss/ftspecials/ftspecials.xml"],
				["Gossip Blog","http://ibnlive.in.com/ibnrss/rss/gossipblog/gossipblog.xml"],
				["Health","http://ibnlive.in.com/ibnrss/rss/health/health.xml"],
				["IBN South","http://ibnlive.in.com/ibnrss/rss/ibnsouth/ibnsouth.xml"],
				["India","http://ibnlive.in.com/ibnrss/rss/india/india.xml"],
				["India Global","http://ibnlive.in.com/ibnrss/rss/indiaglobal/indiaglobal.xml"],
				["London Olympics 2012","http://ibnlive.in.com/ibnrss/rss/londonolympics2012/londonolympics2012.xml"],
				["Movies","http://ibnlive.in.com/ibnrss/rss/moviesnews/moviesnews.xml"],
				["Music","http://ibnlive.in.com/ibnrss/rss/music/music.xml"],
				["Oddly","http://ibnlive.in.com/ibnrss/rss/oddly/oddly.xml"],
				["Podcasts","http://ibnlive.in.com/ibnrss/rss/podcasts/podcasts.xml"],
				["Politics","http://ibnlive.in.com/ibnrss/rss/politics/politics.xml"],
				["Press Release","http://ibnlive.in.com/ibnrss/rss/pressrelease/pressrelease.xml"],
				["Realtime","http://ibnlive.in.com/ibnrss/rss/realtime/realtime.xml"],
				["Relationship","http://ibnlive.in.com/ibnrss/rss/relationship/relationship.xml"],
				["Reviews","http://ibnlive.in.com/ibnrss/rss/reviews/reviews.xml"],
				["Sandbox","http://ibnlive.in.com/ibnrss/rss/sandbox/sandbox.xml"],
				["Shows","http://ibnlive.in.com/ibnrss/rss/shows/shows.xml"],
				["Snapshot","http://ibnlive.in.com/ibnrss/rss/snapshot/snapshot.xml"],
				["Social","http://ibnlive.in.com/ibnrss/rss/social/social.xml"],
				["Social TV","http://ibnlive.in.com/ibnrss/rss/socialtv/socialtv.xml"],
				["South Cinema","http://ibnlive.in.com/ibnrss/rss/southcinema/southcinema.xml"],
				["Sports","http://ibnlive.in.com/ibnrss/rss/sports/sports.xml"],
				["Tech","http://ibnlive.in.com/ibnrss/rss/tech/tech.xml"],
				["Travel","http://ibnlive.in.com/ibnrss/rss/travel/travel.xml"],
				["Trends","http://ibnlive.in.com/ibnrss/rss/trends/trends.xml"],
				["TV","http://ibnlive.in.com/ibnrss/rss/tv/tv.xml"],
				["Videos","http://ibnlive.in.com/ibnrss/rss/videos/videos.xml"],
				["Viral","http://ibnlive.in.com/ibnrss/rss/viral/viral.xml"],
				["Work","http://ibnlive.in.com/ibnrss/rss/work/work.xml"],
				["World","http://ibnlive.in.com/ibnrss/rss/world/world.xml"],
				["Yearender","http://ibnlive.in.com/ibnrss/rss/yearender/yearender.xml"],
				["Delhi Elections","http://ibnlive.in.com/ibnrss/rss/elections/delhielections.xml"],
				["Kannada Previews","http://ibnlive.in.com/ibnrss/rss/southcinema/kannadapreviews.xml"],
				["Tamil Videos","http://ibnlive.in.com/ibnrss/rss/southcinema/tamilvideos.xml"],
				["Tamil Galleries","http://ibnlive.in.com/ibnrss/rss/southcinema/tamilgalleries.xml"],
				["Tamil Interviews","http://ibnlive.in.com/ibnrss/rss/southcinema/tamilinterviews.xml"],
				["Tamil ","http://ibnlive.in.com/ibnrss/rss/southcinema/tamilnews.xml"],
				["Tamil Previews","http://ibnlive.in.com/ibnrss/rss/southcinema/tamilpreviews.xml"],
				["Tamil Reviews","http://ibnlive.in.com/ibnrss/rss/southcinema/tamilreviews.xml"],
				["Tamil","http://ibnlive.in.com/ibnrss/rss/southcinema/tamil.xml"],
				["Kannada","http://ibnlive.in.com/ibnrss/rss/southcinema/kannada.xml"],
				["Kannada Videos","http://ibnlive.in.com/ibnrss/rss/southcinema/kannadavideos.xml"],
				["Sample Papers","http://ibnlive.in.com/ibnrss/rss/exams/samplepapers.xml"],
				["Olympic History","http://ibnlive.in.com/ibnrss/rss/londonolympics2012/olympichistory.xml"],
				["Banking","http://ibnlive.in.com/ibnrss/rss/exams/banking.xml"],
				["Civil Services","http://ibnlive.in.com/ibnrss/rss/exams/civilservices.xml"],
				["Telugu Videos","http://ibnlive.in.com/ibnrss/rss/southcinema/teluguvideos.xml"],
				["Telugu Reviews","http://ibnlive.in.com/ibnrss/rss/southcinema/telugureviews.xml"],
				["Telugu Previews","http://ibnlive.in.com/ibnrss/rss/southcinema/telugupreviews.xml"],
				["Rajasthan Elections","http://ibnlive.in.com/ibnrss/rss/elections/rajasthanelections.xml"],
				["Kannada Reviews","http://ibnlive.in.com/ibnrss/rss/southcinema/kannadareviews.xml"],
				["Telugu ","http://ibnlive.in.com/ibnrss/rss/southcinema/telugunews.xml"],
				["Telugu Interviews","http://ibnlive.in.com/ibnrss/rss/southcinema/teluguinterviews.xml"],
				["Telugu Galleries","http://ibnlive.in.com/ibnrss/rss/southcinema/telugugalleries.xml"],
				["Malayalam Videos","http://ibnlive.in.com/ibnrss/rss/southcinema/malayalamvideos.xml"],
				["Telugu","http://ibnlive.in.com/ibnrss/rss/southcinema/telugu.xml"],
				["Malayalam Reviews","http://ibnlive.in.com/ibnrss/rss/southcinema/malayalamreviews.xml"],
				["Malayalam Previews","http://ibnlive.in.com/ibnrss/rss/southcinema/malayalampreviews.xml"],
				["Kannada Interviews","http://ibnlive.in.com/ibnrss/rss/southcinema/kannadainterviews.xml"],
				["Mizoram Elections","http://ibnlive.in.com/ibnrss/rss/elections/mizoramelections.xml"],
				["Kannada ","http://ibnlive.in.com/ibnrss/rss/southcinema/kannadanews.xml"],
				["Malayalam ","http://ibnlive.in.com/ibnrss/rss/southcinema/malayalamnews.xml"],
				["Malayalam Interviews","http://ibnlive.in.com/ibnrss/rss/southcinema/malayalaminterviews.xml"],
				["Chhattisgarh Elections","http://ibnlive.in.com/ibnrss/rss/elections/chhattisgarhelections.xml"],
				["Malayalam Galleries","http://ibnlive.in.com/ibnrss/rss/southcinema/malayalamgalleries.xml"],
				["Madhya Pradesh Elections","http://ibnlive.in.com/ibnrss/rss/elections/madhyapradeshelections.xml"],
				["Malayalam","http://ibnlive.in.com/ibnrss/rss/southcinema/malayalam.xml"],
				["Kannada Galleries","http://ibnlive.in.com/ibnrss/rss/southcinema/kannadagalleries.xml"],
				["IBN Karnataka","http://ibnlive.in.com/ibnrss/rss/ibnsouth/ibnkarnataka.xml"],
				["IBN Andhra Pradesh","http://ibnlive.in.com/ibnrss/rss/ibnsouth/ibnandhrapradesh.xml"],
				["IBN Tamil Nadu","http://ibnlive.in.com/ibnrss/rss/ibnsouth/ibntamilnadu.xml"],
				["IBN Kerala","http://ibnlive.in.com/ibnrss/rss/ibnsouth/ibnkerala.xml"],
				["Face The Nation","http://ibnlive.in.com/ibnrss/rss/shows/facethenation.xml"],
				["World View","http://ibnlive.in.com/ibnrss/rss/shows/worldview.xml"],
				["The Week That Wasn't","http://ibnlive.in.com/ibnrss/rss/shows/theweekthatwasn't.xml"],
				["The Last Word","http://ibnlive.in.com/ibnrss/rss/shows/thelastword.xml"],
				["Bangalore","http://ibnlive.in.com/ibnrss/rss/southindia/bangalore.xml"],
				["Kerala","http://ibnlive.in.com/ibnrss/rss/southindia/kerala.xml"],
				["Orissa","http://ibnlive.in.com/ibnrss/rss/southindia/orissa.xml"],
				["Chennai","http://ibnlive.in.com/ibnrss/rss/southindia/chennai.xml"],
				["Hyderabad","http://ibnlive.in.com/ibnrss/rss/southindia/hyderabad.xml"],
				["Karnataka","http://ibnlive.in.com/ibnrss/rss/southindia/karnataka.xml"],
				["Andhra Pradesh","http://ibnlive.in.com/ibnrss/rss/southindia/andhrapradesh.xml"],
				[" Kochi","http://ibnlive.in.com/ibnrss/rss/southindia/kochi.xml"],
				["Thiruvananthapuram","http://ibnlive.in.com/ibnrss/rss/southindia/thiruvananthapuram.xml"],
				["Tamil Nadu","http://ibnlive.in.com/ibnrss/rss/southindia/tamilnadu.xml"],
				["Indian TV","http://ibnlive.in.com/ibnrss/rss/tv/indiantv.xml"],
				["American TV","http://ibnlive.in.com/ibnrss/rss/tv/americantv.xml"],
				["Books ","http://ibnlive.in.com/ibnrss/rss/books/booksnews.xml"],
				["Authors","http://ibnlive.in.com/ibnrss/rss/books/authors.xml"],
				["Book Extracts","http://ibnlive.in.com/ibnrss/rss/books/bookextracts.xml"],
				["Book Reviews","http://ibnlive.in.com/ibnrss/rss/books/bookreviews.xml"],
				["Bollywood reviews","http://ibnlive.in.com/ibnrss/rss/reviews/bollywoodreviews.xml"],
				["Malayalam reviews","http://ibnlive.in.com/ibnrss/rss/reviews/malayalamreviews.xml"],
				["Telugu reviews","http://ibnlive.in.com/ibnrss/rss/reviews/telugureviews.xml"],
				["Hollywood reviews","http://ibnlive.in.com/ibnrss/rss/reviews/hollywoodreviews.xml"],
				["Tamil reviews","http://ibnlive.in.com/ibnrss/rss/reviews/tamilreviews.xml"],
				["Kannada reviews","http://ibnlive.in.com/ibnrss/rss/reviews/kannadareviews.xml"],
				["Marathi reviews","http://ibnlive.in.com/ibnrss/rss/reviews/marathireviews.xml"],
				["Bangla reviews","http://ibnlive.in.com/ibnrss/rss/reviews/banglareviews.xml"],
				["Masand's Verdict","http://ibnlive.in.com/ibnrss/rss/reviews/masand'sverdict.xml"],
				["Telugu ","http://ibnlive.in.com/ibnrss/rss/reviews/telugunews.xml"],
				["Music","http://ibnlive.in.com/ibnrss/rss/music/news.xml"],
				["Music videos","http://ibnlive.in.com/ibnrss/rss/videos/musicvideos.xml"],
				["Bollywood videos","http://ibnlive.in.com/ibnrss/rss/videos/bollywoodvideos.xml"],
				["Hollywood videos","http://ibnlive.in.com/ibnrss/rss/videos/hollywoodvideos.xml"],
				["Elections","http://ibnlive.in.com/ibnrss/rss/politics/elections.xml"],
				["Bikes","http://ibnlive.in.com/ibnrss/rss/auto/bikes.xml"],
				["Reviews","http://ibnlive.in.com/ibnrss/rss/auto/reviews.xml"],
				["Cars","http://ibnlive.in.com/ibnrss/rss/auto/cars.xml"],
				["Auto ","http://ibnlive.in.com/ibnrss/rss/auto/autonews.xml"],
				["Odisha","http://ibnlive.in.com/ibnrss/rss/india/odisha.xml"],
				["Arunachal Pradesh","http://ibnlive.in.com/ibnrss/rss/india/arunachalpradesh.xml"],
				["Sikkim","http://ibnlive.in.com/ibnrss/rss/india/sikkim.xml"],
				["West Bengal","http://ibnlive.in.com/ibnrss/rss/india/westbengal.xml"],
				["Bihar","http://ibnlive.in.com/ibnrss/rss/india/bihar.xml"],
				["Jharkhand","http://ibnlive.in.com/ibnrss/rss/india/jharkhand.xml"],
				["Chhattisgarh","http://ibnlive.in.com/ibnrss/rss/india/chhattisgarh.xml"],
				["Madhya Pradesh","http://ibnlive.in.com/ibnrss/rss/india/madhyapradesh.xml"],
				["Maharashtra","http://ibnlive.in.com/ibnrss/rss/india/maharashtra.xml"],
				["Gujarat","http://ibnlive.in.com/ibnrss/rss/india/gujarat.xml"],
				["Rajasthan","http://ibnlive.in.com/ibnrss/rss/india/rajasthan.xml"],
				["Haryana","http://ibnlive.in.com/ibnrss/rss/india/haryana.xml"],
				["Punjab","http://ibnlive.in.com/ibnrss/rss/india/punjab.xml"],
				["Uttar Pradesh","http://ibnlive.in.com/ibnrss/rss/india/uttarpradesh.xml"],
				["Uttarakhand","http://ibnlive.in.com/ibnrss/rss/india/uttarakhand.xml"],
				["Delhi","http://ibnlive.in.com/ibnrss/rss/india/delhi.xml"],
				["Jammu and Kashmir","http://ibnlive.in.com/ibnrss/rss/india/jammuandkashmir.xml"],
				["Andaman and Nicobar Islands","http://ibnlive.in.com/ibnrss/rss/india/andamanandnicobarislands.xml"],
				["Lakswadeep","http://ibnlive.in.com/ibnrss/rss/india/lakswadeep.xml"],
				["Daman and Diu","http://ibnlive.in.com/ibnrss/rss/india/damananddiu.xml"],
				["Chandigarh","http://ibnlive.in.com/ibnrss/rss/india/chandigarh.xml"],
				["Dadra and Nagar Haveli","http://ibnlive.in.com/ibnrss/rss/india/dadraandnagarhaveli.xml"],
				["Assam","http://ibnlive.in.com/ibnrss/rss/india/assam.xml"],
				["Goa","http://ibnlive.in.com/ibnrss/rss/india/goa.xml"],
				["Himachal Pradesh","http://ibnlive.in.com/ibnrss/rss/india/himachalpradesh.xml"],
				["Education","http://ibnlive.in.com/ibnrss/rss/india/education.xml"],
				["Tripura","http://ibnlive.in.com/ibnrss/rss/india/tripura.xml"],
				["Manipur","http://ibnlive.in.com/ibnrss/rss/india/manipur.xml"],
				["Nagaland","http://ibnlive.in.com/ibnrss/rss/india/nagaland.xml"],
				["Meghalaya","http://ibnlive.in.com/ibnrss/rss/india/meghalaya.xml"],
				["Mizoram","http://ibnlive.in.com/ibnrss/rss/india/mizoram.xml"],
				["Hockey","http://ibnlive.in.com/ibnrss/rss/sports/hockey.xml"],
				["Badminton","http://ibnlive.in.com/ibnrss/rss/sports/badminton.xml"],
				["Other Sports","http://ibnlive.in.com/ibnrss/rss/sports/othersports.xml"],
				["Tennis","http://ibnlive.in.com/ibnrss/rss/sports/tennis.xml"],
				["Football","http://ibnlive.in.com/ibnrss/rss/sports/football.xml"],
				["Formula One","http://ibnlive.in.com/ibnrss/rss/sports/formulaone.xml"],
				["Jobs","http://ibnlive.in.com/ibnrss/rss/business/jobs.xml"],
				["Rail Budget 2013","http://ibnlive.in.com/ibnrss/rss/business/railbudget2013.xml"],
				["Budget 2013","http://ibnlive.in.com/ibnrss/rss/business/budget2013.xml"],
				["HitList Movies","http://ibnlive.in.com/ibnrss/rss/moviesnews/hitlist.xml"],
				["Trailers Movies","http://ibnlive.in.com/ibnrss/rss/moviesnews/trailers.xml"],
				["First Look Movies","http://ibnlive.in.com/ibnrss/rss/moviesnews/firstlook.xml"],
				["Bangla Movies","http://ibnlive.in.com/ibnrss/rss/moviesnews/bangla.xml"],
				["Marathi Movies","http://ibnlive.in.com/ibnrss/rss/moviesnews/marathi.xml"],
				["Hollywood Movies","http://ibnlive.in.com/ibnrss/rss/moviesnews/hollywood.xml"],
				["Kannada Movies","http://ibnlive.in.com/ibnrss/rss/moviesnews/kannada.xml"],
				["Bollywood Movies","http://ibnlive.in.com/ibnrss/rss/moviesnews/bollywood.xml"],
				["Malayalam Movies","http://ibnlive.in.com/ibnrss/rss/moviesnews/malayalam.xml"],
				["Telugu Movies","http://ibnlive.in.com/ibnrss/rss/moviesnews/telugu.xml"],
				["Tamil Movies","http://ibnlive.in.com/ibnrss/rss/moviesnews/tamil.xml"],
				["Art","http://ibnlive.in.com/ibnrss/rss/trends/art.xml"],
				["Society","http://ibnlive.in.com/ibnrss/rss/trends/society.xml"],
				["Style","http://ibnlive.in.com/ibnrss/rss/trends/style.xml"],
				["IBNLive blogs","http://ibnlive.in.com/xml/allblogsauthor.xml"],
				["Rajdeep Sardesai's blog","http://ibnlive.in.com/xml/author1.xml"],
				["Sagarika Ghose's blog","http://ibnlive.in.com/xml/author101.xml"],
				["Gaurav Kalra's blog","http://ibnlive.in.com/xml/author107.xml"],
				["Suhasini Haider's blog","http://ibnlive.in.com/xml/author1157.xml"],
				["Amrita Tripathi's blog","http://ibnlive.in.com/xml/author1276.xml"],
				["Paarull's blog","http://ibnlive.in.com/xml/author1287.xml"],
				["DP Satish's blog","http://ibnlive.in.com/xml/author133.xml"],
				["Ragen Garabadu's blog","http://ibnlive.in.com/xml/author1385.xml"],
				["Ipsita Shome's blog","http://ibnlive.in.com/xml/author1385.xml"],
				["Hemender Sharma's blog","http://ibnlive.in.com/xml/author1385.xml"],
				["Rupashreenanda's blog","http://ibnlive.in.com/xml/author1385.xml"],
				["Raksha Shetty's blog","http://ibnlive.in.com/xml/author1385.xml"],
				["Rahul Fernandes's blog","http://ibnlive.in.com/xml/author1385.xml"],
				["Podcast","http://ibnlive.in.com/xml/podcast.xml"]

			],
primaryCategory:"Top"

});


/*kgchannels.push({
name:"Techmeme",
categories:[
				["Technology","http://www.techmeme.com/feed.xml"]
			],
primaryCategory:"Technology"

});



kgchannels.push({
name:"TechCrunch",
categories:[
				["Startups","http://feeds.feedburner.com/techcrunch/startups?format=xml"],
				["Gadgets","http://feeds.feedburner.com/crunchgear?fomat=xml"],
				["Funding","http://feeds.feedburner.com/TechCrunch/fundings-exits?format=xml"],
				["Mobile","http://feeds.feedburner.com/Mobilecrunch?format=xml"],
				["GreenTech","http://feeds.feedburner.com/TechCrunch/greentech?format=xml"],
				["Google","http://feeds.feedburner.com/TechCrunch/Google?format=xml"],
				["Facebook","http://feeds.feedburner.com/TechCrunch/Facebook?format=xml"],
				["Microsoft","http://feeds.feedburner.com/TechCrunch/Microsoft?format=xml"],
				["Yahoo","http://feeds.feedburner.com/TechCrunch/Yahoo?format=xml"]
			],
primaryCategory:"Startups"

});


/*kgchannels.push({
name:"GSM Arena",
categories:[
				["Mobiles","http://www.gsmarena.com/rss-news-reviews.php3"]
			],
primaryCategory:"Mobiles"

});


kgchannels.push({
name:"Engadget",
categories:[
				["Gadgets","http://www.engadget.com/rss.xml"]
			],
primaryCategory:"Gadgets"

});

kgchannels.push({
name:"Liliputing",
categories:[
				["Gadgets","http://feeds.feedburner.com/Liliputing?format=xml"]
			],
primaryCategory:"Gadgets"

});*/

