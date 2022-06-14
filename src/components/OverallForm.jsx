import React, { useState } from "react";
import MatchType from "./MatchType";
import Form from "./Form";
import Teams from "./Teams";
import Fixture from "./Fixture";

const OverallForm = () => {
  const [page, setPage] = useState(0);

  const titles = ["Match Type", "General Information", "Teams", "Fixtures"];

  const [formData, setFormData] = useState({
    match: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    matchLocation: "",
    tournamentName: "",
    comment: "",
    teamOneName: "",
    teamOneSide: "",
    teamTwoName: "",
    teamTwoSide: "",
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <MatchType formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Form formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Teams formData={formData} setFormData={setFormData} />;
    } else {
      return <Fixture formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="container my-5">
      <div className="container-fluid" style={{ border: "1px solid black" }}>
        <div className="my-2">
          <h2 className="text-center text-danger">{titles[page]}</h2>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="d-flex justify-content-end">
          {page < 3 ? (
            <div className="footer my-4">
              <button
                disabled={page === 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
                className="btn btn-danger rounded-0"
              >
                Prev
              </button>
              <button
                onClick={() => {
                  if (page === titles.length - 1) {
                    // alert("FORM SUBMITTED");
                    console.log(formData);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
                className="btn btn-danger rounded-0 mx-3"
              >
                {page === titles.length - 2 ? "Submit" : "Next"}
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default OverallForm;
