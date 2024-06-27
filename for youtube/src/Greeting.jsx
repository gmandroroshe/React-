import PropTypes from 'prop-types'

function Greeting(props) {

    const WelcomeMsg = <h2 className="Welcome-msg">Welcome {props.username}</h2>;
    const woringMmsg = <h2 className="woring-msg">Place Loging agnain</h2>;

    return (props.isLoggedIn ? WelcomeMsg : woringMmsg) ;
  }
  
  Greeting.prototype = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string,
  }
  Greeting.defaultprops = {
    isLoggedIn : false,
    username : "gest",
  }


  export default Greeting;
  