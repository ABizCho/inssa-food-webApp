import "./Footer.css";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ReplyIcon from "@mui/icons-material/Reply";
import SearchIcon from "@mui/icons-material/Search";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CollectionsIcon from "@mui/icons-material/Collections";

import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
        onClick={() => {
          window.history.back();
        }}
      >
        <ReplyIcon color="action" />
        back
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <HomeIcon />
        home
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
        onClick={() => {
          navigate("/core");
        }}
      >
        <SearchIcon />
        search
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
        onClick={() => {
          navigate("/history/list");
        }}
      >
        <CollectionsIcon />
        history
      </div>

      <div
        onClick={() => {
          navigate("about");
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
      >
        <PeopleAltIcon />
        about
      </div>

      {/* <ul className="footer-ul">
        <li className="footer-li">메뉴1</li>
        <li className="footer-li">메뉴2</li>
        <li className="footer-li">메뉴3</li>
      </ul> */}
    </footer>
  );
};

export default Footer;
