import React, { useState } from 'react'
import Constants from '../utilities/Constants'

export default function OrderCreateForm(props) {
    const initialFormData = Object.freeze({
        type: "ex. Standard, Sale Order, Purchase Order, Transfer Order, Return Order",
        name: "ex. Sally Sue",
        date: "ex. 1/20/2023",
        by: "ex. Jim Bob"
    });

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSumbit = (e) => {
        e.preventDefault();

        const orderToCreate = {
            orderId: 0,
            type: formData.type,
            name: formData.name,
            date: formData.date,
            by: formData.by
        };

        const url = Constants.API_URL_CREATE_ORDER;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderToCreate)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

        props.onOrderCreated(orderToCreate);
    };

    return (
        <div>
            <form className="w-100 px-5">
                <h1 className="mt-5">Create New Order</h1>

                <div className="mt-5">
                    <label className="h3 form-label">Order type</label>
                    <input value={formData.type} name="type" type="text" className="form-control" onChange={handleChange} />
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Customer name </label>
                    <input value={formData.name} name="name" type="text" className="form-control" onChange={handleChange} />
                </div>

                <div className="mt-3">
                    <label className="h3 form-label">Created date </label>
                    <input value={formData.date} name="date" type="date" className="form-control" onChange={handleChange} />
                </div>

                <div className="mt-2">
                    <label className="h3 form-label">Created by </label>
                    <input value={formData.by} name="by" type="text" className="form-control" onChange={handleChange} />
                </div>

                <button onClick={handleSumbit} className="btn btn-dark btn-lg w-100 mt-5">Submit</button>
                <button onClick={() => props.onOrderCreated(null)} className="btn btn-secondary btn-lg w-100 mt-3">Cancel</button>
            </form>
        </div>
    )
}

