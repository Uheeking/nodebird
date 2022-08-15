import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";
import {useSelector} from 'react-redux'

import LoginForm from "../components/LoginForm";
import UserProfile from "../components/UserProfile";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state)=> state.user.isLoggedIn)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // proptypes node에 있는거
  return (
    // <div>
    //     <div>공통메뉴</div>
    //     {children}
    // </div>
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          {/*  주의할 점 a태그에 주소를 적지 않는다. */}
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        {/* 모바일 xs, 태블릿 sm, 작은 데스크탑 md */}
        {/* n/24 ex) 24이면 크기 다 차지*/}
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.notion.so/uheeking/Main-Page-a8dceb27c07247ffa71c2d029b05ca05"
            target="_blank"
            rel="notion_uheeking"
          >
            made by uheeking
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.PropTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
