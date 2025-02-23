// api.js

const API_KEY = '77a337fb33004789a59f88b3bb75bea5';
const BASE_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

let cachedArticles = 1;

let arc = {
    "status": "ok",
    "totalResults": 35,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "WPVI-TV"
            },
            "author": null,
            "title": "Lin'ajah Brooker: Recovery operations continue for missing child swept away into Chester Creek in Delaware County, Pa. - WPVI-TV",
            "description": "As of Sunday afternoon, authorities say this is no longer a search and rescue effort, but a recovery effort.",
            "url": "https://6abc.com/linajah-brooker-chester-creek-missing-child-pa/14563210/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/14565340_wpvi-linajah-brooker.jpg?w=1600",
            "publishedAt": "2024-03-25T09:45:00Z",
            "content": "CHESTER, Pennsylvania (WPVI) -- A recovery operation continues Monday in the search for a young girl who was swept away in a rain-swollen southeastern Pennsylvania creek over the weekend.\r\nCrews will… [+3258 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Elsa Keslassy",
            "title": "Rebel Wilson Names Sasha Baron Cohen as Star “Trying to Threaten Me” Over Her Memoir - Variety",
            "description": "Rebel Wilson has revealed on social media that Sasha Baron Cohen is the star who has been sending her threats to stop her from publishing her memoir.",
            "url": "https://variety.com/2024/film/global/rebel-wilson-sasha-baron-cohen-memoir-1235950823/",
            "urlToImage": "https://variety.com/wp-content/uploads/2024/03/Rebel-Wilson-Sacha-Baron-Cohen.jpg?w=1000&h=563&crop=1",
            "publishedAt": "2024-03-25T09:37:00Z",
            "content": "Rebel Wilson has revealed that Sasha Baron Cohen is the Hollywood star who has been sending her threats to stop her from publishing her upcoming memoir “Rebel Rising.” \r\nOn social media, the Australi… [+2018 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Moscow attack: As Russia mourns victims of concert hall shooting, how will Putin react? - BBC.com",
            "description": "More than 130 people were killed when gunmen entered a packed Moscow venue and opened fire.",
            "url": "https://www.bbc.com/news/world-europe-68650914",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0FD2/production/_133005040_moscow_mourning_epa.jpg",
            "publishedAt": "2024-03-25T09:25:55Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "Ben Standig",
            "title": "NFL mock draft: Vikings trade up, leading to QB-heavy top-4 selections - The Athletic",
            "description": "Several trades shake up the first round, as offensive players dominate the early selections and O-linemen make up 10 of the top 32 picks.",
            "url": "https://theathletic.com/5361949/2024/03/25/nfl-mock-draft-quarterbacks-2024/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/03/24211353/0325_NFL_MockDraft_5.0.png",
            "publishedAt": "2024-03-25T09:01:56Z",
            "content": "The slower pace of free-agency spending after the unhinged opening week allows teams to breathe, reassess and turn their primary focus to the 2024 NFL Draft.\r\nThe month-long gap until commissioner Ro… [+18071 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Arjun Kharpal",
            "title": "Apple to launch Vision Pro in China this year, Tim Cook says - CNBC",
            "description": "Apple will launch its Vision Pro headset in China this year, CEO Tim Cook told Chinese state media.",
            "url": "https://www.cnbc.com/2024/03/25/apple-to-launch-vision-pro-in-china-this-year-tim-cook-says.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107392021-1711354370534-gettyimages-2100351730-AFP_34M76UW.jpeg?v=1711354455&w=1920&h=1080",
            "publishedAt": "2024-03-25T08:42:26Z",
            "content": "Apple will launch its Vision Pro headset in China this year, CEO Tim Cook told Chinese state media.\r\nIn a video posted on one of CCTV's accounts on Chinese social media site Weibo, Cook was heard res… [+1089 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Stephanie Nolasco, Ashley Papa",
            "title": "Kate Middleton’s cancer diagnosis leaves monarchy’s future on Prince William’s shoulders: expert - Fox News",
            "description": "Kate Middleton, the Princess of Wales, is married to Prince William, who is heir to the British throne. They share three children – Prince George, Prince Louis and Princess Charlotte.",
            "url": "https://www.foxnews.com/entertainment/kate-middletons-cancer-diagnosis-leaves-monarchys-future-prince-williams-shoulders-expert",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/03/6cfa3122-Getty_PrinceWilliam_KateMiddleton.jpg",
            "publishedAt": "2024-03-25T08:00:00Z",
            "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nPlease enter a valid email address.\r\nBy entering your e… [+7444 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Robert Shackelford, Elizabeth Wolfe",
            "title": "Snowstorm across Plains and Midwest brings heavy snow and blizzard conditions - CNN",
            "description": "A powerful winter storm is pummeling parts of the Central Plains with blizzard conditions and is set to drop a blanket of snow from Colorado to Minnesota through Tuesday, threatening widespread power outages and treacherous road conditions.",
            "url": "https://www.cnn.com/2024/03/24/weather/winter-storm-midwest-plains-snow-blizzard-monday/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/cnn-digital-tracker-winter-storm-watch-warning.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-03-25T06:56:00Z",
            "content": "A powerful winter storm is pummeling parts of the Central Plains with blizzard conditions and is set to drop a blanket of snow from Colorado to Minnesota through Tuesday, threatening widespread power… [+3734 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Axios",
            "title": "Ronna McDaniel's NBC hiring slammed by Chuck Todd as network faces uproar - Axios",
            "description": null,
            "url": "https://www.axios.com/2024/03/25/ronna-mcdaniel-nbc-meet-the-press-chuck-todd",
            "urlToImage": null,
            "publishedAt": "2024-03-25T06:23:28Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Entertainment Tonight"
            },
            "author": "Zach Seemayer",
            "title": "Taylor Swift and Travis Kelce Step Out in Malibu Together Following Their Trip to the Bahamas - Entertainment Tonight",
            "description": "The cute couple were spotted at Nobu in Malibu on Sunday.",
            "url": "https://www.etonline.com/taylor-swift-and-travis-kelce-step-out-in-malibu-together-following-their-trip-to-the-bahamas",
            "urlToImage": "https://www.etonline.com/sites/default/files/styles/1280x720/public/images/2024-02/ETD_TRENDING%20Travis%20Kelce%20Taylor%20Swift%20Australia_20240221_MG_VIDPIC.jpg?h=d1cb525d",
            "publishedAt": "2024-03-25T05:21:00Z",
            "content": "Taylor Swift and Travis Kelce stepped out together in Malibu on Sunday, to enjoy a dinner date and some sushi.\r\nThe high-profile power couple were spotted sitting down for some food together at Nobu … [+2370 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Jeff Legwold",
            "title": "Houston outlasts Texas A&M in OT, advances in NCAA tournament - ESPN",
            "description": "Emanuel Sharp started overtime with a 3-pointer that put top-seeded Houston ahead to stay, as the Cougars advanced to the Sweet 16 back in Texas by topping ninth-seeded Texas A&M 100-95 on Sunday night.",
            "url": "https://www.espn.com/mens-college-basketball/story/_/id/39804678/houston-outlasts-texas-ot-advance-ncaa-tournament",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0325%2Fr1309682_1296x729_16%2D9.jpg",
            "publishedAt": "2024-03-25T05:06:00Z",
            "content": "MEMPHIS, Tenn. -- As the closing seconds of the greatest of overtime escapes played out in front of him Sunday night, Houston coach Kelvin Sampson could have turned his head to the right and seen fou… [+4041 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Sumanti Sen",
            "title": "Why did Chick-fil-A decide to start using antibiotics in chicken? Company overturns 2014 commitment - Hindustan Times",
            "description": "Chick-fil-A is set to allow some antibiotics in its chicken beginning this spring, overturning a 2014 commitment to use nothing but antibiotic-free chicken",
            "url": "https://www.hindustantimes.com/world-news/us-news/why-did-chick-fil-a-decide-to-start-using-antibiotics-in-chicken-company-overturns-2014-commitment-101711340348615.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/25/1600x900/chicken_1711340531568_1711340531781.jpg",
            "publishedAt": "2024-03-25T04:24:48Z",
            "content": "Chick-fil-A is set to allow some antibiotics in its chicken beginning this spring. This will overturn a 2014 commitment to use nothing but antibiotic-free chicken.\r\nWhy did Chick-fil-A decide to star… [+2312 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9News.com KUSA"
            },
            "author": "Nate Lynn",
            "title": "Monday morning commute will be challenging, CDOT warns - 9News.com KUSA",
            "description": "CDOT said weather conditions will make driving very challenging.",
            "url": "https://www.9news.com/article/traffic/cdot-warns-challenging-commute-snow/73-fa54ff5f-9f25-4e17-b87a-c40b643ca062",
            "urlToImage": "https://media.9news.com/assets/KUSA/images/e8aa741e-b4b1-4c67-9c22-323efdc4149d/e8aa741e-b4b1-4c67-9c22-323efdc4149d_1140x641.jpg",
            "publishedAt": "2024-03-25T04:16:00Z",
            "content": "DENVER Overnight snow will make for a challenging Monday morning commute in the Denver area and much of the state, the Colorado Department of Transportation (CDOT) warned Sunday.\r\nCDOT urged traveler… [+2215 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "USMNT vs. Mexico stopped due to discriminatory chanting: History of Mexico's derogatory soccer chants - CBS Sports",
            "description": "Here's the anti-discrimination policies in Concacaf and a history of the incidents regionally",
            "url": "https://www.cbssports.com/soccer/news/usmnt-vs-mexico-stopped-due-to-discriminatory-chanting-history-of-mexicos-derogatory-soccer-chants/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/03/21/6e6aeea1-7b92-497f-99dc-a1cdd05999dc/thumbnail/1200x675/2e76743c0c273b33650638ff581f4aa0/usmnt-31.jpg",
            "publishedAt": "2024-03-25T03:05:00Z",
            "content": "North America's best sides are involved in the Concacaf Nations League with United States vs. Mexico in the final on Sunday night, but while the attention was focused on the action on the pitch, crow… [+2905 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Praveena Somasundaram",
            "title": "Mountain lion attack in northern California is first fatality in decades - The Washington Post",
            "description": "A 21-year-old was killed and an 18-year-old injured when the pair, who are brothers, were attacked by a mountain lion in Georgetown, Calif., on Saturday, authorities said.",
            "url": "https://www.washingtonpost.com/climate-environment/2024/03/24/mountain-lion-attack-california/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MSUJ52OSVZO4YGSTKNX2LN4B2M_size-normalized.jpg&w=1440",
            "publishedAt": "2024-03-25T02:29:24Z",
            "content": "A teenager called 911 from a remote area in California on Saturday to report a rare incident: He and his brother had been attacked by a mountain lion.\r\nThe 18-year-old and his 21-year-old brother wer… [+3590 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": null,
            "title": "Ukraine says it hit two Russian naval vessels in major attack on Crimea - CNN",
            "description": "Ukraine says it hit two Russian naval vessels, a communications center and several other Black Sea Fleet facilities in a huge overnight attack on Sevastopol",
            "url": "https://www.cnn.com/2024/03/24/europe/ukraine-strikes-russian-naval-vessels-sevastopol-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/screen-shot-2024-03-24-at-9-37-59-am.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-03-25T02:14:00Z",
            "content": "Ukraine says it hit two Russian naval vessels, along with a communications center and several other facilities belonging to the Black Sea Fleet, in a huge overnight attack on the Crimean port of Seva… [+2705 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Senegal election: Opposition leader Faye ahead to win presidency - BBC.com",
            "description": "Several rivals declare Bassirou Diomaye Faye winner of the delayed election as votes are still being counted.",
            "url": "https://www.bbc.com/news/world-africa-68653267",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/CA76/production/_133003815_15fc75b4a34b3ec88bc72ec9fdc5f788a42a9e3c.jpg",
            "publishedAt": "2024-03-25T02:03:06Z",
            "content": null
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Jordan Mendoza",
            "title": "March Madness winners and losers: ACC leads Sweet 16, Baylor goes home - USA TODAY",
            "description": "The ACC is leads the Sweet 16, but Baylor won't be there for the third year in a row. Those two storylines top Sunday's March Madness winners and losers",
            "url": "https://www.usatoday.com/story/sports/ncaab/2024/03/24/march-madness-winners-losers-acc-sweet-16-baylor/73087862007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/03/24/USAT/73087802007-usatsi-22856713.jpg?crop=2600,1463,x1018,y179&width=2600&height=1463&format=pjpg&auto=webp",
            "publishedAt": "2024-03-25T01:10:33Z",
            "content": "For all the success it has had, the ACC spent much of the year being told it was having a down year and it had lost its place as one of the top conference in college basketball.\r\nBut the ACC is remin… [+7023 chars]"
        }
    ]
}

export const getNewsArticles = async () => {
  try {
    if (cachedArticles) {
      return arc;
    }

    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    const data = await response.json();
    cachedArticles = data;
    // console.log(cachedArticles)
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
