import React from "react";
import {Nav} from "react-bootstrap";

const Sidebar =() => {
   

    return (
        <>
            <Nav className=" sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/">Campaign</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Reports</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Reports</Nav.Link>
            </Nav.Item> <Nav.Item>
                <Nav.Link eventKey="link-2">Reports</Nav.Link>
            </Nav.Item> <Nav.Item>
                <Nav.Link eventKey="link-2">Reports</Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };
  export default Sidebar;