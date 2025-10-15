import React, { useEffect, useState } from "react";
import API from "../axios";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await API.get("/history/my");
        setHistory(res.data);
      } catch (err) {
        console.error("Failed to fetch history:", err);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="diagnosis-dashboard">
      <h1>Diagnosis History</h1>
      {history.length === 0 ? (
        <p className="no-history">No history found.</p>
      ) : (
        history.map((entry, index) => (
          <div className="history-card" key={index}>
            <div className="card-header">
              <h3>{entry.nickname}</h3>
              <span className="timestamp">
                {new Date(entry.timestamp).toLocaleString()}
              </span>
            </div>

            <div className="card-section">
              <h4>Patient Information</h4>
              <div className="info-grid">
                {Object.entries(entry.request).map(([key, value]) => (
                  <div key={key} className="info-item">
                    <span className="info-key">{key}</span>
                    <span className="info-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-section">
              <h4>Predicted Diseases</h4>
              <ul className="disease-list">
                {entry.response.diseases?.map((disease, i) => (
                  <li key={i}>{disease}</li>
                ))}
              </ul>
            </div>

            <div className="card-section">
              <h4>Recommendation</h4>
              <p>
                <strong>Doctor:</strong> {entry.response.recommended_doctor}
              </p>
              <p className="brief-recommendation">
                {entry.response.brief_recommendation}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default History;
