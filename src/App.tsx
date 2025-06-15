import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Dashboard from "./dashboard/Dashboard";
import Maps from "./pages/Maps";
import Team from "./pages/Team";
import Assets from "./pages/Assets";
import Evidence from "./pages/Evidence";
import ReportsAndAnalysis from "./pages/ReportsAndAnalysis";
import Settings from "./pages/Settings";
import Integrations from "./pages/Integrations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="maps" element={<Maps />} />
        <Route path="team" element={<Team />} />
        <Route path="assets" element={<Assets />} />
        <Route path="evidence" element={<Evidence />} />
        <Route path="reports-analysis" element={<ReportsAndAnalysis />} />
        <Route path="settings" element={<Settings />} />
        <Route path="integrations" element={<Integrations />} />
      </Route>
    </Routes>
  );
}

export default App;
