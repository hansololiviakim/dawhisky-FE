import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { Layout, TabMenu, SearchInput, CategorySelect, WhiskyGrid } from '../components';

const WhiskyList = () => {
  // * useState에 0번째 값을 default값으로 넣기 위해 최상단에 선언
  // * 탭 그룹
  // TODO UI 정렬 위해 5개만 출력하고 나머지 주석 처리, 추후 슬라이드 가능한지 찾아보고 적용
  const tabGroup = [
    { name: '전체', type: 'all' },
    { name: '스카치', type: 'scotch' },
    { name: '아메리칸', type: 'american' },
    { name: '아이리시', type: 'irish' },
    { name: '캐나디안', type: 'canadian' },
    // { name: '재패니스', type: 'japanese' },
    // { name: '그 외', type: 'etc' },
  ];

  // * 카테고리 세부 정렬 기준
  const regionList = ['전체', '스페이사이드', '하이랜드', '로우랜드', '캠벨타운', '아일라', '그 외'];
  const blendList = ['전체', '싱글 몰트', '싱글 그레인', '블렌디드 몰트', '블렌디드 그레인', '블렌디드'];
  const americantList = ['전체', '버번', '라이', '테네시', '그 외'];

  const navigate = useNavigate();

  const [tabChosen, setTabChosen] = useState(tabGroup[0].type);
  const [region, setRegion] = useState(regionList[0]);
  const [blend, setBlend] = useState(blendList[0]);
  const [american, setAmerican] = useState(americantList[0]);

  // ? setState 처리해서 넘길 때 e.preventDefault를 쓸지 말지?
  const onTabClickHandler = (type) => setTabChosen(type);
  const onRegionClickHandler = (idx) => setRegion(regionList[idx]);
  const onBlendClickHandler = (idx) => setBlend(blendList[idx]);
  const onAmericanClickHandler = (idx) => setAmerican(americantList[idx]);

  const onLikeListClickHandler = () => navigate(`/LikeList`);

  return (
    <Layout>
      <Header>
        <div>
          <p>다위스키 로고</p>
          <LikeListIcon onClick={onLikeListClickHandler} />
        </div>
        <SearchInput searchtype={'before'} placeholder={'위스키를 검색해보세요!'} />
      </Header>

      <TabMenu tabgroup={tabGroup} tabchosen={tabChosen} ontabclickhandler={onTabClickHandler} />
      {tabChosen === 'scotch' && (
        <CategorySection>
          <CategorySelect
            category={'지역별'}
            list={regionList}
            categorychosen={region}
            onclickhandler={onRegionClickHandler}
          />
          <CategorySelect
            category={'블렌드별'}
            list={blendList}
            categorychosen={blend}
            onclickhandler={onBlendClickHandler}
          />
        </CategorySection>
      )}
      {tabChosen === 'american' && (
        <CategorySection>
          <CategorySelect
            category={'분류'}
            list={americantList}
            categorychosen={american}
            onclickhandler={onAmericanClickHandler}
          />
        </CategorySection>
      )}
      {tabChosen === 'japanese' && (
        <CategorySection>
          <CategorySelect
            category={'블렌드별'}
            list={blendList}
            categorychosen={blend}
            onclickhandler={onBlendClickHandler}
          />
        </CategorySection>
      )}
      <WhiskyGrid />
    </Layout>
  );
};

export default WhiskyList;

const Header = styled.header`
  width: 360px;
  margin-left: -16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  & div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  & p {
    font-size: 18px;
    font-weight: bold;
  }
`;

const LikeListIcon = styled(AiOutlineHeart)`
  font-size: 24px;
  cursor: pointer;
`;

const CategorySection = styled.section`
  margin-bottom: 30px;
  display: flex;
  gap: 8px;
`;
