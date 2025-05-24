import React, { useEffect, useState } from 'react';
import API from '../axios';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await API.get('/history/my');
        setHistory(res.data);
      } catch (err) {
        console.error('Failed to fetch history:', err);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="diagnosis-history-page">
      <h1>Diagnosis History</h1>
      {history.length === 0 ? (
        <p className="no-history">No history found.</p>
      ) : (
        history.map((entry, index) => (
          <div className="history-card" key={index}>
            <h3>{entry.nickname}</h3>
            <p><strong>Timestamp:</strong> {new Date(entry.timestamp).toLocaleString()}</p>
            <p><strong>Request:</strong> <pre>{JSON.stringify(entry.request, null, 2)}</pre></p>
            <p><strong>Response:</strong> <pre>{JSON.stringify(entry.response, null, 2)}</pre></p>
          </div>
        ))
      )}
    </div>
  );
};

export default History;
