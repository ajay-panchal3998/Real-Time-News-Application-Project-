import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, auther, date, source } = props;
  return (
    <>
      <div className="my-3">
        <div className="card">
          <div
            className="d-flex justify-content-end position-absolute "
            style={{ right: 0 }}
          >
            <span
              className=" badge rounded-pill bg-danger"
              style={{ zIndex: "1", left: "85%" }}
            >
              {source}
            </span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://cdn.vox-cdn.com/thumbor/DAjvAVK0orK3XSQ5c_Fu-XK8pSA=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/24628301/236640_UK_online_safety_bill_HHerrera.jpeg"
            }
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title} <span className="badge bg-secondary"> New</span>
            </h5>
            <p className="card-text">
              {description
                ? description
                : "China's consumer prices swung lower in October, as key gauges of domestic demand pointed"}
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {!auther ? "Unknown" : auther} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
