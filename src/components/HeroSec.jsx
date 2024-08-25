import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import CircularChart from "../pages/CircularChart";
import { ChartData } from "../data/ChartData";
import MyModal from "../components/MyModal"; 
import { FiRefreshCw } from "react-icons/fi";

function HeroSec(dataChange) {
  const [showModal, setShowModal] = useState(false);
  const [activeRow, setActiveRow] = useState(null);
  const [chartData, setChartData] = useState(ChartData);

  const handleShowModal = (index) => {
    setActiveRow(index);
    setShowModal(true);
  };
  useEffect(() => {
    setChartData(dataChange?.dataChange ? dataChange?.dataChange : ChartData);
  }, [dataChange]);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModalSubmit = (data) => {
    const max = 1000;
    const mode = [{
      id:Math.floor(Math.random() * max),
      heading: data.heading,
      labels: [data.label],
      datasets: [
        {
          data: [data.data],
          backgroundColor: [data.backgroundColor],
        },
      ],
      show: true,
    }];
    console.log(mode)
    if (activeRow !== null) {
      
      chartData.map((item, index) => {
        if (index === activeRow) {
          item.chartGraphData = [...item.chartGraphData, ...mode];
        }
      });
      console.log(chartData);
      setChartData(chartData);
      handleCloseModal();
      setActiveRow(null);
    }
  };

  useEffect(() => {
    console.log(chartData);
  }, [chartData]);

  return (
    <>
     
      <Table striped bordered hover style={{ width: "100%" }}>
     
        <tbody>
          {/* <div style={{display:'flex', justifyContent:'space-around',alignItems:'center'}}> */}
            <h3>CNAPP Dashboard</h3>
            {/* <button>Add Widgets +</button>
          <FiRefreshCw/>
          </div> */}
          {chartData.map((item, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr>
                <td colSpan="3">
                  <h4>{item?.title}</h4>
                </td>
              </tr>
              <tr>
                {item?.chartGraphData.map(
                  (data, index) =>
                    data.show && (
                      <td
                        key={index}
                        style={{
                          textAlign: "center",
                          width: "33.33%",
                          height: "150px",
                        }}
                      >
                        <CircularChart chartData={data} />
                      </td>
                    )
                )}

                {item?.chartGraphData?.length !== 3 && (
                  <td
                    style={{
                      textAlign: "center",
                      width: "33.33%",
                      height: "150px",
                    }}
                  >
                    <button
                      onClick={() => handleShowModal(rowIndex)}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <h4>Add Widgets +</h4>
                    </button>
                  </td>
                )}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
      <MyModal
        show={showModal}
        handleClose={handleCloseModal}
        onSubmit={handleModalSubmit}
        position="right" 
      />
    </>
  );
}

export default HeroSec;
