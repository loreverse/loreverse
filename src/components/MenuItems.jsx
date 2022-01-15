import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        marginRight: "40px",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "right",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/lores">
        <NavLink to="/lores">🖼 Lores</NavLink>
      </Menu.Item>
      <Menu.Item key="/write">
        <NavLink to="/write">📄 Write</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
