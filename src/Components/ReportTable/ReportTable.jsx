import React from "react";
import { Table } from "react-materialize";
import "./ReportTable.css";
import InfoModal from "../InfoModal/InfoModal";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const ReportTable = ({id}) => {

  const [reports, setReports] = useState([]);
  let history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3333/api/reports", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }) 
      .then((response) =>  response.json())
      .then((reporti) => { 
        if(typeof reporti !== "string") {
    
            return reporti.map((user) => {
              return {
                id: user.id,
                candidateId: user.candidateId,
                candidateName: user.candidateName,
                companyId: user.companyId,
                companyName: user.companyName,
                interviewDate: user.interviewDate,
                phase: user.phase,
                status: user.status,
                note: user.note,
              }
            })
          } else {
            localStorage.clear();
            history.push('/login')
          }
      })
      .then((data) => setReports(data))
  }, [history]);

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
