import React, { useState } from "react";
import axios from "axios";

const OperationForm = ({ label, endpoint, method }) => {
  const [response, setResponse] = useState("");

  const handleExecute = async () => {
    try {
      const res = await axios({ method, url: `http://localhost:5000${endpoint}` });
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (err) {
      setResponse(err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="operation-card">
      <h4>{label}</h4>
      <button onClick={handleExecute}>Execute</button>
      <pre className="response-box">{response}</pre>
    </div>
  );
};

export default OperationForm;
