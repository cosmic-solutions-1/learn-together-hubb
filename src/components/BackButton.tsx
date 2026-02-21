import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-20 left-4 z-40 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:bg-primary/90 transition-all hover:scale-110"
      aria-label="Go back"
    >
      <ArrowLeft className="h-5 w-5" />
    </button>
  );
};

export default BackButton;
