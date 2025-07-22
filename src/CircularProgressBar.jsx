import React from "react";
import styles from "./CircularProgressBar.module.css";

function CircularProgressBar({ percent, label, lastWeek, lastMonth }) {
  return (
    <div className={`card text-center p-3`}>
      <div
        style={{
          background: `conic-gradient(#8a9672 ${percent * 3.6}deg, #e6e6e6 0deg)`,
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{
          width: "85px",
          height: "85px",
          background: "#fff",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{percent}%</span>
        </div>
      </div>

      <h5 className="mt-3">{label}</h5>
      <div className="d-flex justify-content-between mt-3 px-2 text-muted small">
        <div>
          <div className="fw-bold">{lastWeek}</div>
          <div>Last week</div>
        </div>
        <div>
          <div className="fw-bold">{lastMonth}</div>
          <div>Last month</div>
        </div>
      </div>
    </div>
  );
}

export default CircularProgressBar;

