import React from "react";
import "../Css/item.css";
const Item = ({ title, img, price, desc }) => {
    return (
        <div className="col-lg-6 mb-5">
            <div className="item">
                <div className="row">
                    <div className="col-sm-5 mb-2 mb-sm-0">
                        <div className="item-img rounded">
                            <img
                                className="w-100"
                                src={img}
                                alt={img.substring(img.lastIndexOf("/") + 1)}
                            />
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="content">
                            <div className="title position-relative d-flex justify-content-between align-items-center mb-2 pb-2 fw-fw-bolder">
                                <h3 className="m-0">{title}</h3>
                                <span>${price}</span>
                            </div>
                            <div className="description text-end">
                                <p>{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
