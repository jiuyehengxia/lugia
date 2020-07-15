import React from "react";
import { Layout, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts/index";

const { Header, Content, Footer, Aside } = Layout;
const header = (
  <div
    style={{
      height: "60px",
      lineHeight: "60px",
      textAlign: "center",
      background: "#F0F2FF"
    }}
  >
    Header
  </div>
);
const content = (
  <div
    style={{
      height: "200px",
      lineHeight: "200px",
      textAlign: "center",
      background: "#B7C0FF"
    }}
  >
    Content
  </div>
);
const footer = (
  <div
    style={{
      height: "60px",
      lineHeight: "60px",
      textAlign: "center",
      background: "#E6E9FF"
    }}
  >
    Footer
  </div>
);

export default class LayoutDemo extends React.Component {
  render() {
    const layoutTheme = {
      [Widget.Aside]: {
        ChildrenWrap: {
          normal: {
            background: {
              color: "#CCD4FF"
            }
          }
        },
        Trigger: {
          normal: {
            background: {
              color: "#CCD4FF"
            }
          }
        }
      }
    };
    return (
      <Layout direction="row">
        <Layout>
          <Header>{header}</Header>
          <Content>{content}</Content>
          <Footer>{footer}</Footer>
        </Layout>
        <Theme config={layoutTheme}>
          <Aside collapsible breakpoint={"lg"}>
            <div>Aside</div>
          </Aside>
        </Theme>
      </Layout>
    );
  }
}
