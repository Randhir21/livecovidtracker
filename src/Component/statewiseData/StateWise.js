import React, { useEffect, useState } from "react";
import "./statewise.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function StateWise() {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData);
    setData(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-waigth-bold">INDIA </span>COVID-19 Dashbord
          </h1>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="head-dark">
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>recovered</th>
              <th>deths</th>
              <th>Active</th>
              <th>updated</th>
            </tr>
          </thead>
          <tbody>
            {data.map((curEle, index) => {
              return (
                <tr>
                  <td>{curEle.state}</td>
                  <td>{curEle.confirmed}</td>
                  <td>{curEle.recovered}</td>
                  <td>{curEle.deaths}</td>
                  <td>{curEle.active}</td>
                  <td>{curEle.lastupdatedtime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
