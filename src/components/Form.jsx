import React from "react";
import { useState } from "react";

const Form = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h6 className="my-3">Start Date : </h6>
          <input
            type="date"
            className="form-control"
            value={formData.startDate}
            onChange={(event) =>
              setFormData({ ...formData, startDate: event.target.value })
            }
          />
          <input
            type="time"
            className="form-control"
            value={formData.startTime}
            onChange={(event) =>
              setFormData({ ...formData, startTime: event.target.value })
            }
          />
          <h6 className="my-3">Start Time :</h6>
          <div>
            <input
              type="text"
              placeholder="Match Location"
              value={formData.matchLocation}
              onChange={(event) =>
                setFormData({ ...formData, matchLocation: event.target.value })
              }
              className="form-control my-3"
            />

            {formData.match === "Tournament" ? (
              <input
                type="text"
                placeholder="Tournament Name"
                value={formData.tournamentName}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    tournamentName: event.target.value,
                  })
                }
                className="form-control my-3"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="col">
          <h6 className="my-3">End Date :</h6>
          <input
            type="date"
            className="form-control"
            value={formData.endDate}
            onChange={(event) =>
              setFormData({ ...formData, endDate: event.target.value })
            }
          />
          <input
            type="time"
            className="form-control"
            value={formData.endTime}
            onChange={(event) =>
              setFormData({ ...formData, endTime: event.target.value })
            }
          />
          <h6 className="my-3">End Time :</h6>
          <textarea
            className="form-control my-3"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            placeholder="Comment"
            value={formData.comment}
            onChange={(event) =>
              setFormData({ ...formData, comment: event.target.value })
            }
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Form;
