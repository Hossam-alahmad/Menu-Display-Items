import React from "react";

const Category = ({ category, filterHandler }) => {
    return (
        <li className="m-2 p-2 rounded" onClick={() => filterHandler(category)}>
            {category}
        </li>
    );
};

export default Category;
