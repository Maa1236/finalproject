import './CandidateCard.css';

export const CandidateCard = ({ candidate, setLeadToReport, setCatchId }) => {

    const showMeUserReport = () => {
        setCatchId(candidate.id)
        setLeadToReport(true);
    }

    return (
        <div className="singleElUserCard" key={candidate.id} onClick={showMeUserReport}>
            <img src="./avatar.png" alt="bla" />
            <p className="firstName">{candidate.name} </p>
            <div className="info">
                <p>{candidate.email} </p>
            </div>
        </div>
    )
}