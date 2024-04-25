import React from "react";
import Aheader from "../Components/Aheader";

function Manage_artist() {
  return (
    <>
      <Aheader />
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Main_profile</th>
            <th scope="col">Contact</th>
            <th scope="col">address_title</th>
            <th scope="col">Full_address</th>
            <th scope="col">Address_map_url</th>
            <th scope="col">About_us</th>
            <th scope="col">Services_included</th>
            <th scope="col">Port_Folio_images</th>
            <th scope="col">Since_workd</th>
            <th scope="col">Product_used</th>
            <th scope="col">Advance_ammount</th>
            <th scope="col">Trave_to_venue</th>
            <th scope="col">Airbrush</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ashish</td>
            <td>ash@123gmial.com</td>
            <td>76884845</td>
            <td>Makeup</td>
            <td>its good</td>
            <td>Ashish</td>
            <td>ash@123gmial.com</td>
            <td>76884845</td>
            <td>Makeup</td>
            <td>its good</td>
            <td>Ashish</td>
            <td>ash@123gmial.com</td>
            <td>76884845</td>
            <td>Makeup</td>
            <td>its good</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Manage_artist;
