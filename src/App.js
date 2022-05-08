import { useState } from "react";
import "./Css/App.css";
import "./Css/bootstrap.rtl.min.css";
import data from "./Components/data";
import Item from "./Components/Item";
import Header from "./Components/Header";
import Categories from "./Components/Categories";

const categories = ["All", ...new Set(data.map(item => item.category))];

function App() {
    const [items, setItems] = useState(data);

    const filterHandler = category => {
        if (category === "All") {
            setItems(data);
            console.log(`filter is :${category} => `, data);
            return;
        }
        const afterFilter = data.filter(item => item.category === category);
        console.log(`filter is :${category} => `, afterFilter);
        setItems(afterFilter);
    };
    return (
        <div className="menu-app position-relative text-center w-100">
            <div className="container">
                <Header />
                <Categories
                    categories={categories}
                    filterHandler={filterHandler}
                />
                <div className="row">
                    {items.map(item => (
                        <Item key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
