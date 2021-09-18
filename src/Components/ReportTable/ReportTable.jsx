import React from "react";
import { Table } from "react-materialize";
import "./ReportTable.css";
import InfoModal from "../InfoModal/InfoModal";

export const ReportTable = ({ reports, id}) => {
  let component;
  
  component = reports.map((report) => {
   
    if (parseInt(report.candidateId) === parseInt(id)) {
      const interviewDate = new Date(report.interviewDate);
      const y = interviewDate.getFullYear();
      const m = interviewDate.getMonth() + 1;
      const d = interviewDate.getDate();
      return (
        <tr key={report.id} className="listElementReports">
          <td className="cmpName">{report.companyName}</td>
          <td>{`${d}.${m}.${y}`}</td>
          <td>{report.status}</td>
          <InfoModal reports={reports} id={id} reportsId={report.id} />
         
        </tr>
      );
    }
    return null;
  });
  return (
    <div>
      <h5 className="reportsTitle">reports</h5>
      <Table className="content-table">
        <thead>
          <tr>
            <th className="cmpName">Company</th>
            <th>Interview date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{component}</tbody>
      </Table>
    </div>
  );
};
