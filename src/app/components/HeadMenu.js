import { Menu, Icon } from "antd";
import { withRouter } from "next/router";
import Link from "next/link";
import "antd/lib/menu//style/index.less";

const HeadMenu = ({ router }) => {
  const routes = [
    { icon: "home", name: "Home", url: "/" },
    { icon: "layout", name: "Empty", url: "/empty" },
    { icon: "star", name: "Isomorphic Fetch", url: "/isomorphic" },
    { icon: "setting", name: "Settings", url: "/settings" }
  ];
  const selectedKeys = [router.pathname];
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={selectedKeys}
      style={{ lineHeight: "64px" }}
    >
      {routes.map(route =>
        <Menu.Item key={route.url}>
          <Link href={route.url}>
            <a>
              <Icon type={route.icon} />
              {route.name}
            </a>
          </Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default withRouter(HeadMenu);
