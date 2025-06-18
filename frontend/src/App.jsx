import React from "react";
import OperationForm from "./components/OperationForm";
import "./index.css";

const operations = [
  { label: "Insert One", endpoint: "/api/users/insertOne", method: "GET" },
  { label: "Insert Many", endpoint: "/api/users/insertMany", method: "GET" },
  { label: "Find", endpoint: "/api/users/find", method: "GET" },
  { label: "Find One", endpoint: "/api/users/findOne", method: "GET" },
  { label: "Find Limit", endpoint: "/api/users/findLimit", method: "GET" },
  { label: "Find Skip", endpoint: "/api/users/findSkip", method: "GET" },
  { label: "Find Sort", endpoint: "/api/users/findSort", method: "GET" },
  { label: "Distinct", endpoint: "/api/users/distinct", method: "GET" },
  { label: "Count Documents", endpoint: "/api/users/countDocs", method: "GET" },
  { label: "Update One", endpoint: "/api/users/updateOne", method: "GET" },
  { label: "Update Many", endpoint: "/api/users/updateMany", method: "GET" },
  { label: "Replace One", endpoint: "/api/users/replaceOne", method: "GET" },
  { label: "Delete One", endpoint: "/api/users/deleteOne", method: "GET" },
  { label: "Delete Many", endpoint: "/api/users/deleteMany", method: "GET" },
  { label: "Aggregate", endpoint: "/api/users/aggregate", method: "GET" },
  { label: "Create Index", endpoint: "/api/users/createIndex", method: "GET" },
  { label: "Drop Index", endpoint: "/api/users/dropIndex", method: "GET" },
  { label: "Get Indexes", endpoint: "/api/users/getIndexes", method: "GET" },
  { label: "FindOneAndUpdate", endpoint: "/api/users/findOneAndUpdate", method: "GET" },
  { label: "FindOneAndDelete", endpoint: "/api/users/findOneAndDelete", method: "GET" },
  { label: "Bulk Write", endpoint: "/api/users/bulkWrite", method: "GET" },
  { label: "FindOneAndReplace", endpoint: "/api/users/findOneAndReplace", method: "GET" },
  { label: "Rename Collection", endpoint: "/api/users/renameCollection", method: "GET" },
  { label: "Drop Collection", endpoint: "/api/users/drop", method: "POST" },
  { label: "List Collections", endpoint: "/api/users/listCollections", method: "GET" },
];

function App() {
  return (
    <div className="app">
      <h2>MongoDB Operations Demo</h2>
      <div className="operations-container">
        {operations.map((op, idx) => (
          <OperationForm key={idx} {...op} />
        ))}
      </div>
    </div>
  );
}

export default App;