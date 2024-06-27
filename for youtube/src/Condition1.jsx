import './App.css';

function Condition(props) {
  if (props.isLoggedIn) {
    return <h3 className="Welcome-msg">Welcome {props.username}</h3>;
  } else {
    return <h3 className="woring-msg">Please login again</h3>;
  }
}

export default Condition;
