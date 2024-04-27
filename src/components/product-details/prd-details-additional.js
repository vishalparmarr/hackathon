import React from "react";

const PrdDetailsAdditional = () => {
  return (
    <div className="product__details-additional">
      <div className="row">
        <div className="col-xl-9">
          <div className="product__details-additional-inner">
            <table>
              <tbody>
                <tr> 
                  <th scope="row">Brand:</th>
                  <td>Apple</td>
                </tr>
                <tr>
                  <th scope="row">Style:</th>
                  <td>GPS</td>
                </tr>
                <tr>
                  <th scope="row">Screen Size:</th>
                  <td>41 Millimeters</td>
                </tr>
                <tr>
                  <th scope="row">Color:</th>
                  <td>Green Aluminum Case with Clover Sport Band</td>
                </tr>
                <tr>
                  <th scope="row">Compatible Devices:</th>
                  <td>Smartphone</td>
                </tr>
                <tr>
                  <th scope="row">Special Feature:</th>
                  <td>
                    Activity Tracker, Heart Rate Monitor, Sleep Monitor, Blood
                    Oxygen
                  </td>
                </tr>
                <tr>
                  <th scope="row">Capacity:</th>
                  <td>32GB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrdDetailsAdditional;
