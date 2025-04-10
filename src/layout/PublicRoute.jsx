import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; 
const PublicRoute = ({ children }) => {

    const token = localStorage.getItem('token');
      console.log(token);
    if(token){
        return <Navigate to='/' replace={true} />
    }
    return children;
};

PublicRoute.propTypes = {
    children: PropTypes.node.isRequired, 
    // Specify that children is required
};
export default PublicRoute;