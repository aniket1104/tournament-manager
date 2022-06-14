import React from "react";

const Teams = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="d-flex my-3">
        <input
          type="text"
          placeholder="Team 1 Name"
          value={formData.teamOneName}
          onChange={(event) =>
            setFormData({ ...formData, teamOneName: event.target.value })
          }
          className="form-control mx-2"
          style={{ width: "50%" }}
        />
        <select
          value={formData.teamOneSide}
          onChange={(event) =>
            setFormData({ ...formData, teamOneSide: event.target.value })
          }
          style={{ width: "50%" }}
          className="form-select mx-2"
        >
          <option style={{ display: "none" }}></option>
          <option value="Home">Home</option>
          <option value="Away">Away</option>
        </select>
      </div>
      <div>
        <h3 className="text-center">VS</h3>
      </div>
      <div className="d-flex my-3">
        <input
          type="text"
          value={formData.teamTwoName}
          placeholder="Team 2 Name"
          onChange={(event) =>
            setFormData({ ...formData, teamTwoName: event.target.value })
          }
          className="form-control mx-2"
          style={{ width: "50%" }}
        />
        <select
          value={formData.teamTwoSide}
          onChange={(event) =>
            setFormData({ ...formData, teamTwoSide: event.target.value })
          }
          style={{ width: "50%" }}
          className="form-select mx-2"
        >
          <option style={{ display: "none" }}></option>
          <option value="Home">Home</option>
          <option value="Away">Away</option>
        </select>
      </div>
    </div>
  );
};

export default Teams;
