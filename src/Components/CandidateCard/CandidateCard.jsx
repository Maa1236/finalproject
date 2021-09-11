import { Candidates } from '../Candidates/Candidates';
import './CandidateCard.css';

export const CandidateCard = ({ candidate }) => {
    return (
        <div className="singleElUserCard">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="bla" key={candidate.id} />
            <p className="firstName">{candidate.name} </p>
            <div className="info">
                <p>{candidate.email} </p>
            </div>
        </div>
    )
}