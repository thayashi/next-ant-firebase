import { Breadcrumb as AntdBreadcrumb } from "antd";
import { withRouter } from "next/router";
import Link from "next/link";
import "antd/lib/breadcrumb/style/index.less";

const Breadcrumb = ({ router }) => {
  const routes = [
    { icon: "home", name: "Home", url: "/" },
    { icon: "layout", name: "Empty", url: "/empty" },
    { icon: "star", name: "Isomorphic Fetch", url: "/isomorphic" },
    { icon: "setting", name: "Settings", url: "/settings" }
  ];

  const breadcrumbItems = routes.reduce(
    (result, route) => {
      if (router.pathname === route.url && router.pathname !== "/") {
        result.push(
          <AntdBreadcrumb.Item key={route.url}>
            {route.name}
          </AntdBreadcrumb.Item>
        );
      }
      return result;
    },
    [
      <AntdBreadcrumb.Item>
        <Link href="/">
          <a>Home</a>
        </Link>
      </AntdBreadcrumb.Item>
    ]
  );

  return (
    <AntdBreadcrumb style={{ margin: "16px 0" }}>
      {breadcrumbItems}
    </AntdBreadcrumb>
  );
};

export default withRouter(Breadcrumb);
