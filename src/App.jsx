import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import LoginPage from "./Pages/LoginPage";
import AddNewQoute from "./Pages/AddNewQoute";
import { ContextProvider } from "./Context/ContextProvider";
export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/addnewqoute" element={<AddNewQoute />} />
          <Route path="/bookmarks" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}
