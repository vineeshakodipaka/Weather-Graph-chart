import React, { useState } from "react";
import Chart from "react-apexcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {
  faTint,        // Humidity
  faWind,        // Wind Speed 
  faCloudSun,
  faCloud, // Precipitation
  faSun,         // UV Index
  faThermometer, // Feels like
  faCloudRain    // Chance of rain
} from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [weatherData] = useState([
    { title: 'Humidity', value: '82% bad', icon: faTint },
    { title: 'Wind Speed', value: '10 km/h', icon: faWind },
    { title: 'Precipitation', value: '1.4cm', icon: faCloud },
    { title: 'UV Index', value: '4 medium', icon: faSun },
    { title: 'Feels like', value: '30°', icon: faThermometer },
    { title: 'Chance of rain', value: '32%', icon: faCloudRain },
  ]);

  const [annotations] = useState([
    { x: "23%", text: "27°" },
    { x: "29%", text: "28°" },
    { x: "58%", text: "28°" },
    { x: "75%", text: "29°" },
    { x: "33%", text: "30°" },
    { x: "20%", text: "29°" },
    { x: "73%", text: "29°" },
    { x: "49%", text: "28°" },
  ]);

  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["23%", "29%", "58%", "75%", "33%", "20%", "73%", "49%"],
        labels: {
          show: true,
        },
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + "°";
          },
        },
      },
      annotations: {
        xaxis: annotations.map(annotation => ({
          x: annotation.x,
          label: {
            borderColor: "transparent",
            text: annotation.text,
          },
        })),
      },
      tooltip: {
        shared: true,
      },
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "Temperature",
        data: [27, 28, 28, 29, 30, 29, 29, 28],
      },
    ],
  });

  // Wind speed
  const windSpeed = 8;

  return (
    <center>
      <div className="app">
        <Container className="rowgrid mt-2 mb-2">
          <Row className="rowgrid1 no-gutters" style={{ background: "none", boxShadow: "none" }}>
            <Col lg={3}>
              {/* Left column content */}
            </Col>
            <Col lg={9} xs={12} md={12} className="chartcol">
              {/* Chart */}
              <div className="row">
                <div className="mixed-chart">
                  <h2 className='mt-3 text-left ml-0'>
                    Check out today's weather
                    &nbsp;&nbsp;<FontAwesomeIcon icon={faCloudSun} size="lg" className="mr-2" style={{ color: 'orange' }} />
                  </h2>

                  <Chart
                    options={state.options}
                    series={state.series}
                    type="area"
                    width="100%"
                    height="350"
                  />

                </div>
              </div>
              {/* Humidity and Wind Cards */}
              <Row style={{ background: 'none', boxShadow: 'none' }} >
                {weatherData.map((data, index) => (
                  <Col key={index} lg={4} md={6} xs={12}>
                    <Card className='m-1 p-3' style={{ height: '8rem' }}>
                      <div>
                        <div className="d-flex justify-content-around align-items-center">
                          <h2>{data.title}</h2>
                          <FontAwesomeIcon
                            icon={data.icon}
                            size="2x"
                            className={`weather-icon ${data.title.toLowerCase().replace(/ /g, '-')}`}
                          />
                        </div>


                        <div>{data.value}</div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
              {/* <Row  style={{ background: "none", boxShadow: "none" }}>
              
              </Row> */}
            </Col>
          </Row>
        </Container>
      </div>
    </center>
  );
}

export default Home;
