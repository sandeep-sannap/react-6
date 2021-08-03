import React from "react";
import { Link } from "react-router-dom";

export default function Pruductlist() {
  return (
    <>
      <h1 class="h3 mb-2 text-gray-800">Tables</h1>
      <p class="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a>
        .
      </p>
      <Link to="/productcreate">Product Create</Link>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Country</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Tiger Nixon</td>

                  <td>USA</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                  <td>
                    <Link to="/productedit/1">Edit Product</Link>
                  </td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>

                  <td>India</td>
                  <td>2011/07/25</td>
                  <td>$170,750</td>
                  <td>
                    <Link to="/productedit/2">Edit Product</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
