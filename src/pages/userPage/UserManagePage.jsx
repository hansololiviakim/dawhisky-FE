import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useQuery } from 'react-query';
import { Layout, TabMenu, WhiskyGrid } from '../../components';
import SelectWhisky from './SelectWhisky';
import { getUserInfo } from '../../api/user';

const UserManagePage = () => {
  const tabGroup = [
    { name: '코멘트 관리', type: 'getComment' },
    { name: '코멘트 등록', type: 'setComment' },
    // TODO 2차 스코프
    // { name: '내 정보', type: 'myInfo' },
  ];
  const [tabChosen, setTabChosen] = useState(tabGroup[0].type);
  const [commentList, setCommentList] = useState([]);
  const onTabClickHandler = (type) => setTabChosen(type);

  // * 좋아요 한 내역 조회
  const { data } = useQuery('getUserInfo', () => getUserInfo(), {
    onSuccess: (response) => {
      if (response) {
        setCommentList(response[0].reviews);
      }
    },
  });

  return (
    <Layout>
      <UserNameP>{data && data[0].name}</UserNameP>
      <TabMenu tabgroup={tabGroup} tabchosen={tabChosen} ontabclickhandler={onTabClickHandler} />
      {tabChosen === 'getComment' && <WhiskyGrid list={commentList} />}
      {tabChosen === 'setComment' && <SelectWhisky />}
      {/* // TODO 2차 스코프 */}
      {/* {tabChosen === 'myInfo' && '와이어프레임 미정'} */}
    </Layout>
  );
};

export default UserManagePage;

const UserNameP = styled.header`
  margin-left: -16px;
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
`;
