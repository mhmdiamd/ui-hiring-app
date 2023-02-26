import React from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import {InputGroup} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import style from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <>
      <Form.Group
        className={`${style.searchBar} pe-0 shadow rounded d-flex gap-2 mt-5`}
        controlId="formBasicEmail"
      >
        <InputGroup className={'border-end border-1 my-1 d-flex gap-2 py-1 pe-3 align-items-center'}>
          <Form.Control
            type="email"
            className={"shadow-none outline-none border-0 rounded-0"}
            placeholder="Search Here.."
          />
          <FontAwesomeIcon className={'color-trinary fs-5'} icon={faMagnifyingGlass} />
        </InputGroup>
       
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle className={'bg-transparent mt-1 text-secondary border-0'} id="dropdown-autoclose-true">
            Category
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button className={'rounded-0 bg-purple border-0 d-block pt-0 rounded-end'}>Search</Button>
      </Form.Group>
    </>
  );
};

export default SearchBar;
