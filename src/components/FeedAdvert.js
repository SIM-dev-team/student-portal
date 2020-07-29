import React from 'react'
import '../App.css'

function FeedAdvert() {
    return (
        <div>
           <div className="feed-content">
                <div className="row short-advert-top-row">
                    <div className="short-advert-top-row-left">
                    <div className="short-advert-company-logo">
                        logo
                    </div>
                    <div className="short-advert-company-details">
                        <div className="short-advert-company-name">comapany name</div>
                        <div className="short-advert-company-website">comp website</div>
                    </div>
                    </div>
                    <div className="short-advert-top-row-right">
                        <button>View more</button>
                        <button>Save</button>
                    </div>
                </div>
                <hr/>
                <div className="short-advert-posisiton-name">Position</div>
            <div className="short-advert-posisiton-desc-title">Short Description about position</div>
            <div className="short-advert-position-decs-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, alias iure inventore consectetur ullam eligendi odit deserunt totam veritatis molestias aliquam qui illum quam dolorum atque itaque fuga sit minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vero optio numquam explicabo! Amet aliquam veniam</div>
           </div>
        </div>
    )
}

export default FeedAdvert
