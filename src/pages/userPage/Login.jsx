import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Layout, Button } from '../../components';

const Login = () => {
  const [userRole, setUserRole] = useState('user');

  const navigate = useNavigate();

  const REST_API_KEY = 'a93e18596b706b608dc95acd3b818f68';
  const REDIRECT_URI = 'http://jjmdev.site/api/auth/login/user';
  const KAKAO_AUTH = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const socialLogin = () => {
    window.location.href = KAKAO_AUTH;
  };

  return (
    <Layout>
      <LoginPageWrapper userrole={userRole}>
        <LogoWrapper>
          <p>{'다위스키 로고'}</p>
        </LogoWrapper>
        <LoginPageCenter>
          <PersonalLogin userrole={userRole}>
            <div>
              <Button onClick={() => setUserRole('user')}>{'개인회원 로그인'}</Button>
            </div>
            <Button onClick={() => socialLogin()}>{'카카오톡으로 시작하기'}</Button>
          </PersonalLogin>
          <OwnerLogin userrole={userRole}>
            <div>
              <Button onClick={() => setUserRole('owner')}>{'사업자회원 로그인'}</Button>
            </div>
            <InputArea>
              <input placeholder={'Email'} type={'text'} />
              <input placeholder={'Password'} type={'password'} />
              <div>
                <Button>{'아이디 / 비밀번호 찾기'}</Button>
              </div>
            </InputArea>
            <Button>{'로그인'}</Button>
          </OwnerLogin>
        </LoginPageCenter>
        <LoginBottom>
          <span>{'다위스키 이용이 처음이신가요?'}</span>&nbsp;&nbsp;
          <Button onClick={() => navigate('/Signup')}>{'회원가입'}</Button>
        </LoginBottom>
      </LoginPageWrapper>
    </Layout>
  );
};

export default Login;

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 148px;
`;

const LoginPageCenter = styled.div`
  height: 327px;
  padding: 0 24px 0 24px;
`;

const PersonalLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 43px;
  height: 74px;
  width: 100%;

  button {
    transform: none;
  }

  & > div:first-child {
    width: 100%;
    button {
      height: 100%;
      width: 120px;
      font-size: 18px;
      background-color: transparent;
      color: ${(props) => (props.userrole === 'user' ? 'black' : '#afb1b6')};
      border-radius: 0;
      margin-top: 0;
      box-shadow: none;
    }
  }

  & button:last-child {
    height: 46px;
    width: 312px;
    background-color: #b4b4b4;
    color: white;
    border-radius: 8px;
    margin-top: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

const OwnerLogin = styled.div`
  height: 146px;

  button {
    transform: none;
  }
  & > div:first-child {
    width: 100%;
    button:first-child {
      width: 130px;
      font-size: 18px;
      background-color: transparent;
      color: ${(props) => (props.userrole === 'owner' ? 'black' : '#afb1b6')};
      margin-bottom: 4px;
    }
  }

  & > div:nth-child(3) {
    button {
      display: flex;
      justify-content: flex-end;
      background-color: transparent;
      font-size: 14px;
    }
  }

  & > div:last-child {
    button {
      height: 46px;
      width: 312px;
      border-radius: 8px;
      color: #72777a;
      background-color: #f3f3f3;
      margin-top: 18px;
    }
  }
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 116px;
  width: 100%;
  margin-top: 5px;
  input {
    height: 46px;
    width: 312px;
    border-radius: 8px;
    margin: 0 auto 8px auto;
    background-color: #f3f3f3;
    padding: 16px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

const LoginBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  margin-top: 20px;

  span {
    font-size: 13px;
  }

  button {
    transform: none;
    background-color: transparent;
    width: 70px;
    font-size: 16px;
    color: #0067a3;
  }
`;

// 개인회원 로그인, 사업자회원 로그인, 카카오톡으로 시작하기 앞에 붙는 '아이콘'
// 개인회원 로그인이 선택돼서 활성화 됐을 때의 '카카오톡으로 시작하기' 버튼의 백그라운드 칼라, 폰트 칼라
// 로그인에 필요한 입력값 충족되었을 때 활성화 될 로그인 버튼의 백그라운드 칼라, 폰트 칼라
