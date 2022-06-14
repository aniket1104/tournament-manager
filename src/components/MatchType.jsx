import React from "react";
import { useState } from "react";

const MatchType = ({ formData, setFormData }) => {
  return (
    <div className="my-5">
      <h6>Select Match Type: </h6>
      <select
        value={formData.match}
        onChange={(event) =>
          setFormData({ ...formData, match: event.target.value })
        }
        className="form-select my-3"
      >
        <option style={{ display: "none" }} disabled></option>
        <option value="Friendly">Friendly</option>
        <option value="Tournament">Tournament</option>
      </select>
    </div>
  );
};

export default MatchType;
