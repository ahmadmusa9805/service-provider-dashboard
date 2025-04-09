import { jwtDecode } from 'jwt-decode';

export const verifyToken = (token) => {

  try {
    console.log(token,"token");
    const decoded = jwtDecode(token);
    console.log(decoded); // Prints the payload (like user info, exp, etc.)
    return decoded;
  } catch (error) {
    console.error('Invalid token', error);
  }
};
