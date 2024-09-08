import proptypes from 'prop-types';
import Student from './student.jsx';
import Welcome from './welcome.jsx';
function App(){
    return(
    <>
        <Student name="spongebob" age={19} isstudent="true"/>
        <Student name="Pokemon" age={9} isstudent="true"/>
        <Welcome isloggedin={true} username="shivam"/>
        </>
    );
}
Welcome.proptypes={
    isloggedin:proptypes.bool,
    username:proptypes.string,
}
Welcome.defaultProps={
    isloggedin:false,
    username:"guest",
}
export default App