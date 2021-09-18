import React from "react";
import { Table } from "react-materialize";
import InfoModal from "../InfoModal/InfoModal";
import { useState } from "react";
import { SearchAdministrationReport } from "../SearchAdministrationReport/SearchAdministrationReport";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const ReportsAdministration = ({ id, reports }) => {
  const [adminSearch, setAdminSearch] = useState("");

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
            <th></th>
          </tr>
        </thead>
        <tbody>{mappingTheCompanies}</tbody>
      </Table>
      <Footer />
    </div>
  );
};
