import { Candidates } from '../Candidates/Candidates';
import './CandidateCard.css';

export const CandidateCard = ({ candidate, setLeadToReport }) => {

    const showMeUserReport = () => {
        setLeadToReport(true);
    }

    return (
        <div className="singleElUserCard" key={candidate.id} onClick={showMeUserReport}>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="bla" />
            <p className="firstName">{candidate.name} </p>
            <div className="info">
                <p>{candidate.email} </p>
            </div>
        </div>
    )
}