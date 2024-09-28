import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import FormSelect from "react-bootstrap/FormSelect";

export default function ContractsTable(props) {
  const [rows, setRows] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});

  function handleSelect(event) {
    const { name, value } = event.target;
    setSelectedValues({ ...selectedValues, [name]: value });
  }

  async function fetchRows() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/${props.contracts}`
    );
    setRows(response.data.contracts);
  }

  useEffect(() => {
    fetchRows();
  }, []);
  return (
    <div className="table-responsive">
      <Table striped bordered hover responsive>
        <thead>
          {/* Secondary danger color for header */}
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Signing Date</th>
            <th>Approved By</th>
            <th>Status</th>
            <th>Subscription</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.length !== 0
            ? rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.contract_name}</td>
                  <td>{row.signing_date}</td>
                  {row.admin ? (
                    <th>{row.admin.full_name}</th>
                  ) : (
                    <th>Not Yet Approved</th>
                  )}
                  <td>
                    <FormSelect
                      size="sm"
                      name={row.id}
                      onChange={handleSelect}
                      value={selectedValues[row.id]}
                    >
                      <option
                        value="Approved"
                        selected={row.status === "Approved"}
                      >
                        Approved
                      </option>
                      <option
                        value="Expired"
                        selected={row.status === "Expired"}
                      >
                        Expired
                      </option>
                      <option
                        value="Pending"
                        selected={row.status === "Pending"}
                      >
                        Pending
                      </option>
                    </FormSelect>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </div>
  );
}
