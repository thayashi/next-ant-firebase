import { Layout } from "antd";
import HeadMenu from "./HeadMenu";
import Breadcrumb from "./Breadcrumb";
const { Header, Content, Footer } = Layout;

import "antd/lib/style/index.less";
import "antd/lib/layout/style/index.less";

const App = ({ children }) =>
  <Layout className="layout" style={{ minHeight: "100vh" }}>
    <Header>
      <div className="logo" />
      <HeadMenu />
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb />
      <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Next.js, Ant Design, and Firebase SSR Example
    </Footer>
  </Layout>;

export default App;
