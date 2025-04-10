import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; 
const ProtectedRoute = ({ children }) => {

    const token = localStorage.getItem('token');
      console.log(token);
    if(!token){
        return <Navigate to='/sign-in' replace={true} />
    }
    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired, 
    // Specify that children is required
};
export default ProtectedRoute;