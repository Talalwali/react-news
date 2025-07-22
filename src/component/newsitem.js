import React from 'react';

 const NewsItem =(props)=>
  {
    let { title, description, imageUrl, newsUrl,author,date } = props;
    return (
      <div className='my-3'>
        <div className="card">
          <img
            src={imageUrl ? imageUrl : "https://techcrunch.com/wp-content/uploads/2024/03/JPM-hero-GettyImages-1492413753.jpg?resize=1200,800"}
            className="card-img-top"
            alt="news"
          />
          <div className="card-body">
            <h5 className="card-title">{title }<span className="badge rounded-pill bg-success">New</span></h5>
            <p className="card-text">{description ? description: ""}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown": author } on {date }</small></p>
            <a rel= "noreferrer"href={newsUrl} target="_blank"  className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;