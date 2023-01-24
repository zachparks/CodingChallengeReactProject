import React, { useState, useEffect } from 'react';


//code for the searchBar implementation, not properly working right now
const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const orders = [
        {
            orderId: 1,
            orderType: "Standard",
            customerName: "Bob",
            createdDate: "12/30/2022",
            createdByUsername: "Zach"
        },
        {
            orderId: 2,
            orderType: "Standard",
            customerName: "Bridwell",
            createdDate: "1/15/2023",
            createdByUsername: "Zach"
        },
        {
            orderId: 3,
            orderType: "Standard",
            customerName: "Ryan",
            createdDate: "1/25/2023",
            createdByUsername: "Zach"
        },
        {
            orderId: 4,
            orderType: "Standard",
            customerName: "Shawn",
            createdDate: "1/30/2023",
            createdByUsername: "Zach"
        },
    ];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        orders.filter((order) => {
            return order.orderId.match(searchInput);
        });
    }

    return <div>
        <input
            type="search"
            placeholder="Order Type .."
            onChange={handleChange}
            value={searchInput} />
        <table>
            {orders.map((order) => {
                <div>
                    <tr>
                        <td>{order.orderId}</td>
                        <td>{order.orderType}</td>
                    </tr>
                </div>
            })}
        </table>
    </div>
};

export default SearchBar;
