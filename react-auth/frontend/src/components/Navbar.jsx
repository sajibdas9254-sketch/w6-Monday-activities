import { Link } from "react-router-dom";

function Navbar({ setIsAuthenticated, isAuthenticated }) {
  
  const user = JSON.parse(localStorage.getItem("user"));

  const handleClick = () => {
    localStorage.removeItem("user"); 
    setIsAuthenticated(false); 
  };

  return (
    <nav>
      {/* Shown ONLY when the user is logged in */}
      {isAuthenticated && (
        <div>
          <Link to="/">Home</Link>
          <span>Welcome, {user?.email}</span>
          <button onClick={handleClick}>Log out</button>
        </div>
      )}

      {/* Shown ONLY when the user is NOT logged in */}
      {!isAuthenticated && (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;