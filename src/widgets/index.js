import React from 'react';
import { createRoute } from '@lugia/lugiax-router';
import '@lugia/lugia-web/dist/css/global.css';
import { Grid, Layout, Theme,BackTop } from '@lugia/lugia-web';
import Router from '../router';
import Asides from '../menu';
import styled from 'styled-components';
import Headers from '../nav';
import PageLoading from '../pageloading';

const { Content} = Layout;
const { Row, Col } = Grid;


const InnerContainer = styled.div`
  width:100%;
  padding:45px 0 50px 50px;
`;


const Container = styled.div`
  width:100%;
  height:100%;
 
`;


const Block = styled.div`
  height:60px;
`;
export default () => {
  const rout = createRoute(Router.routerConfig, PageLoading);
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col span={0}  xl={{ span: 1 }}  xxl={{ span: 2 }}>
            <Block/>
          </Col>
          <Col span={24}  xl={{ span: 22 }}  xxl={{ span: 20 }}>
          <Headers />
          <Row>
            <Col span={6} sm={{span: 10}} md={{span: 9}} lg={{span: 8}} xl={{ span: 6 }}  xxl={{ span: 5 }}>
              <Asides />
              <Block/>
            </Col>
            <Col span={18} sm={{span: 14}} md={{span: 15}} lg={{span: 16}} xl={{ span: 18 }}  xxl={{ span: 19 }}>
              <InnerContainer>{rout}</InnerContainer>
              <BackTop/>
            </Col>
          </Row>
        </Col>
          <Col span={0}  xl={{ span: 1 }}  xxl={{ span: 2 }}>
            <Block/>
          </Col>
        </Row>
      </Container>
    </React.Fragment>

  );
};

