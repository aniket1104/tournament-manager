import React from "react";

const Fixture = ({ formData, setFormData }) => {
  return (
    <table class="table my-3">
      <thead>
        <tr>
          <th scope="col">Team 1</th>
          <th scope="col">Team 2</th>
          <th scope="col">Match Type</th>
          <th scope="col">Tournament Name</th>
          <th scope="col">Start Date & Time</th>
          <th scope="col">End Date & Time</th>
          <th scope="col">Location</th>
          <th scope="col">Comments</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">{formData.teamOneName}</td>
          <td>{formData.teamTwoName}</td>
          <td>{formData.match}</td>
          <td>{formData.tournamentName}</td>
          <td>
            {formData.startDate} - {formData.startTime}
          </td>
          <td>
            {formData.endDate} - {formData.endTime}
          </td>
          <td>{formData.matchLocation}</td>
          <td style={{ width: "15%" }}>{formData.comment}</td>
        </tr>
        {/* <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Fixture;
