import React from "react";
import { Table } from "react-materialize";
import "./ReportTable.css";

export const ReportTable = ({ reports, catchId }) => {
  let component;
  component = reports.map((report) => {
    if (catchId === report.candidateId) {
      const interviewDate = new Date(report.interviewDate);
      const y = interviewDate.getFullYear();
      const m = interviewDate.getMonth() + 1;
      const d = interviewDate.getDate();
      return (
        <tr key={report.id}>
          <td>{report.companyName}</td>
          <td>{`${d}.${m}.${y}`}</td>
          <td>{report.status}</td>
          <td className="row"><i class="material-icons">visibility</i></td>
        </tr>
      );
    }
    return null;
  });
  return (
    <Table className="content-table">
      <thead>
        <tr>
          <th>Company</th>
          <th>Interview date</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{component}</tbody>
    </Table>
  );
};
