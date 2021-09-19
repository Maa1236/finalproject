import React from "react";
import { Table } from "react-materialize";
import InfoModal from "../InfoModal/InfoModal";
import { useState } from "react";
import { SearchAdministrationReport } from "../SearchAdministrationReport/SearchAdministrationReport";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const ReportsAdministration = ({ id, reports, getReports }) => {
  const [adminSearch, setAdminSearch] = useState("");

  function deleteReport(id) {

    fetch(`http://localhost:3333/api/reports/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }) 
      .then((response) =>  response.json())
      
      getReports()
  }
  

  let mappingTheCompanies = reports
    .filter((rep) => {
      let result = null;
      if (adminSearch === "") {
        result = rep;
      } else if (
        rep.companyName.toLowerCase().includes(adminSearch.toLowerCase())
      ) {
        result = rep;
      }
      return result;
    })
    .map((report) => {
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
          <td><img
              src="../Webp.png"
              alt="bla"
              onClick={() => deleteReport(report.id)}
              className="img"
              style={{width: "20px"}}
            />
             </td>
        </tr>
      );
    });

  return (
    <div>
      <Header />
      <SearchAdministrationReport setAdminSearch={setAdminSearch} />
      <Table className="content-table">
        <thead>
          <tr>
            <th className="cmpName">Company</th>
            <th>Interview date</th>
            <th>Status</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{mappingTheCompanies}</tbody>
      </Table>
      <Footer />
    </div>
  );
};
