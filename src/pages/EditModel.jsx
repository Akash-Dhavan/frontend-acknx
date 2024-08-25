import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import { ChartData as initialChartData } from "../data/ChartData";
import "../styles/EditModal.css";

function EditModal({ show, handleClose, onSubmit }) {
  const [activeTab, setActiveTab] = useState("CNAPP Dashboard");
  const [updatedChartData, setChartData] = useState(initialChartData);

  const handleCheckboxChange = (dashboardIndex, widgetId) => {
    const newChartData = updatedChartData.map((dashboard, index) => {
      if (index === dashboardIndex) {
        return {
          ...dashboard,
          chartGraphData: dashboard.chartGraphData.map((widget, i) => {
            if (i === widgetId) {
              return {
                ...widget,
                show: !widget.show,
              };
            }
            return widget;
          }),
        };
      }
      return dashboard;
    });

    setChartData(newChartData);
  };

  const handleSubmit = () => {
    onSubmit(updatedChartData);
    handleClose(); // Close the modal after submission
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName="modal-dialog-custom"
      contentClassName="custom-modal-content"
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Widget Visibility</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          id="edit-modal-tabs"
        >
          {updatedChartData.map((dashboard, index) => (
            <Tab
              eventKey={dashboard.title}
              title={dashboard.title}
              key={dashboard.title}
            >
              <div style={{ padding: "1rem" }}>
                {updatedChartData[index].chartGraphData.map((widget, i) => (
                  <div key={widget.id} style={{ marginBottom: "1rem" }}>
                    <Form.Check
                      type="checkbox"
                      id={`widget-${widget.id}`}
                      label={widget.heading}
                      checked={widget.show}
                      onChange={() => handleCheckboxChange(index, i)}
                    />
                  </div>
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
