import { React } from "react";
import { useParams } from "react-router-dom";
import Tasks from "./Tasks";

export default function TaskDetails() {
  const stepsArray = [
    "Describe your task",
    "Browse Taskers & prices",
    "Choose date & time",
    "Confirm details",
  ];

  var id = useParams();
  var taskName;
  switch (parseInt(id.id)) {
    case 1:
      taskName = "Furniture Assembly";
      break;
    case 2:
      taskName = "Mounting";
      break;
    case 3:
      taskName = "Home Repairs";
      break;
    case 4:
      taskName = "Help Moving";
      break;
    case 5:
      taskName = "Delivery";
      break;
    case 6:
      taskName = "Cleaning";
      break;
  }
  return (
    <>
      <div>
        <div className="taskDetailsHeader bg-white px-5 mt-5">
          <div className="d-flex justify-content-start mx-5">
          </div>
          <hr style={{ height: 3 }} />
          <p className="text-center">
            <i className="bi bi-journal-plus"></i> Tell us about your task. We
            use these details to show Taskers in your area who fit your needs.
          </p>
        </div>
        <div className="container my-5 px-5">
          <h5>{taskName}</h5>
          <Tasks taskName={taskName} />
        </div>
      </div>
    </>
  );
}
