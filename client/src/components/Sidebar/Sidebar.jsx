import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                Home
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/mask_admin" className="link">
                            <li className="sidebarListItem">
                                Masks
                            </li>
                        </Link>
                        <Link to="/kolam_admin" className="link">
                            <li className="sidebarListItem">
                                Kolam
                            </li>
                        </Link>
                        <Link to="/puppet_admin" className="link">
                            <li className="sidebarListItem">
                                Puppets
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}