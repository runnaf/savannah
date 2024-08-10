import { useContext } from "react";
import { AuthContext } from "../../app/providers/AuthProvider/ui/AuthProvider";

export const useAuth = () => useContext(AuthContext)