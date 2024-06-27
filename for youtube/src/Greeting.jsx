import PropTypes from 'prop-types';

function Greeting(props) {
    const WelcomeMsg = <h2 className="Welcome-msg">Welcome {props.username}</h2>;
    const WarningMsg = <h2 className="woring-msg">Please log in again</h2>;

    return (props.isLoggedIn ? WelcomeMsg : WarningMsg);
}

Greeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};

Greeting.defaultProps = {
    isLoggedIn: false,
    username: "guest",
};

export default Greeting;
