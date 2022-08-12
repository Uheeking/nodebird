import React from "react";
import Head from 'next/head'
import {Form} from 'ant'
import AppLayout from "../components/AppLayout";

const Signup = () => {
  const onSubmit
  return (
    <AppLayout>
      <Head>
        <title>내 회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>

      </Form>
    </AppLayout>
  );
};
export default Signup;
