import React from "react";
import Aheader from "../Components/Aheader";
import Afooter from "../Components/Afooter";

function Manage_blog() {
  return (
    <>
      <Aheader />
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">Blog</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>Makeup </td>
            <td>Makeup artist</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Afooter />
    </>
  );
}

export default Manage_blog;
