import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBell, FaEdit } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import { ChartData } from "../data/ChartData";
import EditModal from "./EditModel"; 

function NavbarPage({ chartData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [visibility, setVisibility] = useState({});

  // Function to handle search input change
  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setFilteredData([]);
    } else {
      const results = ChartData.flatMap((item) =>
        item.chartGraphData
          .filter(
            (data) =>
              data.heading.toLowerCase().includes(term) ||
              data.labels.some((label) => label.toLowerCase().includes(term))
          )
          .map((data) => ({
            ...data,
            title: item.title,
          }))
      );

      // Filter based on visibility
      const visibleResults = results.filter(
        (data) => visibility[`${data.title}-${data.id}`] !== false
      );

      setFilteredData(visibleResults);
    }
  };

  // Function to format data
  const formatData = (data) => {
    if (Array.isArray(data)) {
      return data.join(", ");
    }
    return data; // For non-array data
  };

  // Toggle the edit modal
  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);
  const onSubmitAction = (data) => {
    chartData(data);
    // setShowEditModal(false);
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Dashboard
              </Nav.Link>
            </Nav>
            <Form className="d-flex align-items-center">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Button variant="outline-success" className="me-2">
                Search
              </Button>
              <FaEdit
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
                onClick={handleShowEditModal}
              />
              <FaBell style={{ fontSize: "1.5rem", cursor: "pointer" }} />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <EditModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        onSubmit={onSubmitAction}
      />
      <div
        className="search-results"
        style={{ padding: "1rem", backgroundColor: "#f8f9fa" }}
      >
        {searchTerm && filteredData.length > 0 ? (
          <ul>
            {filteredData.map((data, index) => (
              <li key={index}>
                <strong>Title:</strong> {data.title} <br />
                <strong>Heading:</strong> {data.heading} <br />
                <strong>Labels:</strong> {data.labels.join(", ")} <br />
                <strong>Data:</strong> {formatData(data.datasets[0].data)}{" "}
                <br />
              </li>
            ))}
          </ul>
        ) : searchTerm ? (
          <p>No results found</p>
        ) : null}
      </div>
    </>
  );
}

export default NavbarPage;
