import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Sports Staff",
            "title": "Queen’s death: Cricket and football matches called off as Premier League to make decision on weekend fixtures",
            "description": "Does sport still take place now the Queen has died?",
            "url": "http://www.independent.co.uk/sport/queen-death-football-premier-league-b2162749.html",
            "urlToImage": "https://static.independent.co.uk/2022/09/08/18/SEI124032299-1.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2022-09-08T21:19:04Z",
            "content": "Queen Elizabeth II, Britains longest-serving monarch, has died at the age of 96.\r\nA period of mourning is underway in what is an unprecedented time for the country.\r\nIt may also have an impact on pro… [+3962 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Sporting events cancelled after Queen Elizabeth dies",
            "description": "The world of sport reacted to the death of Queen Elizabeth on Thursday with a raft of cancellations across cricket, golf and rugby, while others paid tribute by holding a minute's silence.",
            "url": "https://www.reuters.com/lifestyle/sports/sporting-events-cancelled-after-queen-elizabeth-dies-2022-09-08/",
            "urlToImage": "https://www.reuters.com/resizer/NAudazqyyklKwI2fLcg5wNXi3eg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6LDQEF2UJ5KNXNXDWC7OFZD2FQ.jpg",
            "publishedAt": "2022-09-08T20:31:10Z",
            "content": "Sept 8 (Reuters) - The world of sport reacted to the death of Queen Elizabeth on Thursday with a raft of cancellations across cricket, golf and rugby, while others paid tribute by holding a minute's … [+2319 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super();
        console.log("I am a constructor baby.");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,85)} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
                    </div>
                })}
                </div>
            </div>
        )
    }
}

export default News