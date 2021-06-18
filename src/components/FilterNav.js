import React from "react";
import { Nav } from "react-bootstrap";

const FilterNav = () => {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      className="filter-nav d-flex justify-content-around"
    >
      <Nav.Item>
        <Nav.Link className="filter-nav-links" href="/home">
          DESIGNERS
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="filter-nav-links" eventKey="link-1">
          BROWSE BY CATEGORY
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="filter-nav-links" eventKey="link-2">
          SNEAKERS
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="filter-nav-links" href="/home">
          FOOTWEAR
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="filter-nav-links" eventKey="link-1">
          TOPS
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="filter-nav-links" href="/home">
          STAFF PICKS
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="filter-nav-links" eventKey="link-1">
          COLLECTIONS
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default FilterNav;
