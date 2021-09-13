import React, { useState } from "react";

import { Modal } from 'react-bootstrap';

import './InfoModal.css';





export default function InfoModal({ reports, catchId, reportId }) {
    

    var modalComponent;
    const [show, setShow] = useState(false);
    const [catchReportId, setCatchReportId] = useState("undefined")
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setCatchReportId(reportId);
    }


    modalComponent = reports.map((report) => {
        if (catchReportId === report.id) {
            const interviewDate = new Date(report.interviewDate);
            const y = interviewDate.getFullYear();
            const m = interviewDate.getMonth() + 1;
            const d = interviewDate.getDate();
            return (
                <Modal show={show} onHide={handleClose} centered size="lg">
                    <Modal.Header >
                        <Modal.Title>{report.candidateName} </Modal.Title>
                        <img src="./Webp.png" alt="bla" onClick={handleClose} className="img" />
                    </Modal.Header>
                    <Modal.Body>
                        <div className="col modalClass">
                            <div className="details">
                                <div className="coll">
                                    <p>Company</p>
                                    <h3>{report.companyName} </h3>
                                </div>
                                <div className="coll">
                                    <p>Interview Date</p>
                                    <h3> {`${d}.${m}.${y}`} </h3>
                                </div>
                                <div className="coll">
                                    <p>Phase</p>
                                    <h3>{report.phase} </h3>
                                </div>
                                <div className="coll">
                                    <p>Status</p>
                                    <h3>{report.status}</h3>
                                </div>
                            </div>

                            <div className="col1">
                                <p>Notes</p>
                                {report.note}
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )

        }
        return null;
    })
    return (
        <>
            <div onClick={handleShow}><i className="material-icons eye">visibility</i>
            </div>
            {modalComponent}
        </>
    )
}