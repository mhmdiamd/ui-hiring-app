import React, {useState} from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import style from "./SearchBar.module.css";

const SearchBar = ({onsearch}) => {
  const [sortBy, setSortBy] = useState('')
  const [search, setSearch] = useState('')
  
  const searchHandler = () => {
    console.log({sortBy, search})
    onsearch({
      sortBy, search
    })
  }
  return (
    <>
      <Form.Group
        className={`${style.searchBar} pe-0 shadow rounded d-flex gap-2 mt-5`}
        controlId="formBasicEmail"
      >
        <InputGroup
          className={
            "border-end border-1 my-1 d-flex gap-2 py-1 pe-3 align-items-center"
          }
        >
          <Form.Control
            type="text"
            className={"shadow-none outline-none border-0 rounded-0"}
            placeholder="Search Here.."
            name={'search'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FontAwesomeIcon
            className={"color-trinary fs-5"}
            icon={faMagnifyingGlass}
          />
        </InputGroup>

        <Form.Select className={`w-25 d-inline mx-2 bg-transparent mt-1 text-secondary border-0 `} aria-label="Default select example" onChange={(e) => setSortBy(e.target.value)}>
          <option>Category</option>
          <option value="name">Sort by Name</option>
          <option value="skills">Sort by Skills</option>
          <option value="address">Sort by Address</option>
          <option value="freelance">Sort by Freelance</option>
          <option value="fulltime">Sort by Fulltime</option>
        </Form.Select>
        {/* <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle
            className={"bg-transparent mt-1 text-secondary border-0"}
            id="dropdown-autoclose-true"
          >
            Category
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#" onClick={(e) => setSort(e.target.value)}>Sort by Name</Dropdown.Item>
            <Dropdown.Item href="#" onClick={(e) => setSort(e.target.value)}>Sort by Skills</Dropdown.Item>
            <Dropdown.Item href="#" onClick={(e) => setSort(e.target.value)}>Sort by Address</Dropdown.Item>
            <Dropdown.Item href="#" onClick={(e) => setSort(e.target.value)}>Sort by Freelance</Dropdown.Item>
            <Dropdown.Item href="#" onClick={(e) => setSort(e.target.value)}>Sort by Fulltime</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        <Button
          className={"rounded-0 bg-purple border-0 d-block pt-0 rounded-end"}
          onClick={searchHandler}
        >
          Search
        </Button>
      </Form.Group>
    </>
  );
};

export default SearchBar;
