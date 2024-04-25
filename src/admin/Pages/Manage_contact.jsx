import React from "react";
import Aheader from "../Components/Aheader";
import Afooter from "../Components/Afooter";

function Manage_contact() {
  return (
    <>
      <Aheader />
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ashish</td>
            <td>ash@123gmial.com</td>
            <td>76884845</td>
            <td>Makeup</td>
            <td>its good</td>
          </tr>
          <tr>
            <td>Ashish</td>
            <td>ash@123gmial.com</td>
            <td>76884845</td>
            <td>Makeup</td>
            <td>its good</td>
          </tr>
          <tr>
            <td>Ashish</td>
            <td>ash@123gmial.com</td>
            <td>76884845</td>
            <td>Makeup</td>
            <td>its good</td>
          </tr>
        </tbody>
      </table>
      <Afooter />
    </>
  );
}

export default Manage_contact;
