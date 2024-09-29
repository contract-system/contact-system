import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import FormSelect from "react-bootstrap/FormSelect";
import { Link } from "react-router-dom";
import AddContract from "./AddContract";

export default function ContractsTable(props) {
  const [rows, setRows] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});

  async function changeStatus(id, status) {
    await axios.post(`http://127.0.0.1:8000/api/Status/${id}`, {
      status,
    });
  }

  async function deleteContract(event) {
    await axios.delete(
      `http://127.0.0.1:8000/api/Contract/${event.target.name}`
    );
    fetchRows();
  }

  function handleSelect(event) {
    const { name, value } = event.target;
    setSelectedValues({ ...selectedValues, [name]: value });
    changeStatus(name, value);
  }

  async function fetchRows() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/${props.contracts}`
    );
    setRows(response.data.contracts);
  }

  useEffect(() => {
    fetchRows();
  }, [props]);
  return (
    <div className="table-responsive">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          height: "60px",
        }}
      >
        <h2>{props.contracts} Contracts</h2>
        <Button
          as={Link}
          to="/Admin/AddContract"
          variant="secondary"
          size="md"
          style={{ marginBottom: "8px" }}
        >
          Add Contract
        </Button>
      </div>

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
            <th>Action</th>
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
                  <td>{row.subscriptions.name}</td>
                  <td>
                    <Button
                      variant="danger"
                      name={row.id}
                      onClick={deleteContract}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </div>
  );
}
