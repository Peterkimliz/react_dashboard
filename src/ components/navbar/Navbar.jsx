import "./Navbar.css";
import {
  Search,
  LanguageOutlined,
  DarkModeOutlined,
  NotificationsOutlined,ChatBubbleOutline,
  ListOutlined,
  FullscreenExitOutlined
} from "@mui/icons-material";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        {/* Search item widget */}
        <div className="search">
          <input placeholder="Search..." type="text" />
          <Search />
        </div>
        {/* Items container */}
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icons"/>
            English
          </div>

          <div className="item">
            <DarkModeOutlined className="icons" />
          </div>
          <div className="item">
            < FullscreenExitOutlined className="icons"/>
          </div>
          <div className="item">
            <NotificationsOutlined className="icons"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutline className="icons" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlined className="icons" />
          </div>
          {/* user profile icons*/}
          <div className="item">
            <img src="src/ components/navbar/images/profile.png" className="profileImage"/>
         
          </div>
        </div>
      </div>
    </div>
  );
}
