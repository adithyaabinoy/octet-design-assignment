import React from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.scss";

export default function Job(props) {
  const [action, setAction] = React.useState("");

  const handleChange = (event) => {
    setAction(event.target.value);
  };
  return (
    <div className="job-tab">
      <div className="job-data">
        <p className="name">{props.data.name}</p>
        <p>Location: {props.data.location}</p>
        <div className="status">
          <p>Posted on: {props.data.posted}</p>
          <p>Status: {props.data.status}</p>
        </div>
      </div>
      <p className="applied">{props.data.applied} Applied</p>
      <p className="applied">{props.data.jobViews} Job Views</p>
      <div className="premium">
        <div
          className="days-left"
          style={{
            backgroundColor: props.data.premium
              ? "rgba(235, 202, 36, 0.1)"
              : props.data.daysLeft > 2
              ? "rgba(84, 189, 165, 0.18)"
              : "",
          }}
        >
          <p
            style={{
              color: props.data.premium
                ? "#C4A923"
                : props.data.daysLeft > 2
                ? "#458677"
                : "",
            }}
          >
            {props.data.premium ? "Premium" : "Free"} • {props.data.daysLeft}{" "}
            Days Left
          </p>
        </div>
        {props.data.premium ? (
          <p>You are getting better visibility as this is a premium job post</p>
        ) : (
          <p>
            Get more application by extending this job post.{" "}
            <span className="prem">Go Premium</span>
          </p>
        )}
      </div>
      <div className="btn-tab">
        <Button variant="contained" onClick={() => alert("See Applications")}>
          See Applications
        </Button>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Actions</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={action}
            label="Actions"
            onChange={handleChange}
          >
            <MenuItem value={10}>Reject</MenuItem>
            <MenuItem value={20}>Shortlist</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
