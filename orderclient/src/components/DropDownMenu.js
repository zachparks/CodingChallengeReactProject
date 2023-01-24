import React, { useState } from 'react';
import Constants from '../utilities/Constants';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

//Basic DropDown button, the basic component works but no functionality.
export default function BasicDropDown() {
    return (
        <DropdownButton id="dropdown-basic-button" title="Order Type">
            <Dropdown.Item >Standard</Dropdown.Item>
            <Dropdown.Item >Sale Order</Dropdown.Item>
            <Dropdown.Item >Purchase Order</Dropdown.Item>
            <Dropdown.Item >Transfer Order</Dropdown.Item>
            <Dropdown.Item >Return Order</Dropdown.Item>
        </DropdownButton>
    );
}
