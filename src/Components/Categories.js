import React from "react";
import Category from "./Category";
const Categories = ({ categories, filterHandler }) => {
    return (
        <div className="categories mb-4">
            <ul className="d-flex justify-content-center  align-items-center list-unstyled m-auto  p-0 w-75 flex-wrap">
                {categories.map((category, index) => (
                    <Category
                        key={index + 1}
                        category={category}
                        filterHandler={filterHandler}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Categories;
