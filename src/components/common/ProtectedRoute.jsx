import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Extract token from URL if present (OAuth redirect)
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      // Save token to localStorage for subsequent protected requests
      localStorage.setItem("token", token);

      // Clean the URL (remove ?token=... from address bar)
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  const token = localStorage.getItem("token");

  if (!token) {
    // No token found → redirect to login
    return <Navigate to="/login" replace />;
  }

  // Token exists → render the protected children
  return children;
}
