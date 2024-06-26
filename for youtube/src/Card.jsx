import './css/Card.css'
import Btn1 from './Btn1';
function Card (props){
    return (
        <>
        <div className="card">
            <img className="img" src={props.Card1} alt="profile pic" />
            <h1 >home</h1>
            <p>{props.p1}</p>
            <Btn1/>
            
            
        </div>
        
        </>
    );
}

export default Card