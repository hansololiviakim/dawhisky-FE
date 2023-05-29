import React from 'react';
import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';
import Image from './Image';

const DetailList = () => {
  const location = useLocation();
  const url = location.pathname;

  return (
    <>
      <StockListDiv>
        <ImageDiv>
          <Image width={'80px'} height={'80px'} src={''} alt={''} />
        </ImageDiv>
        <h1>{url === '/WhiskyDetail' || url === '/BarList' ? '위스키바 이름' : '위스키 이름'}</h1>
        <h3>{url === '/WhiskyDetail' || url === '/BarList' ? '서울특별시 강남구 강남대로 7' : 'Whisky name'}</h3>
        {url === '/WhiskyDetail' || url === '/BarList' ? (
          <BarInfoDiv>
            <button type="button">잔여 좌석 2</button>
            <h2>60m</h2>
          </BarInfoDiv>
        ) : (
          <WhiskyInfoDiv>
            <h2>45% vol</h2>
            {/* TODO 아래 버튼은 코멘트 등록, 주류 등록 페이지에서는 버튼 / 주류관리 페이지에서는 삭제, 나머지 페이지는 출력 X */}
            <button type="button">등록</button>
          </WhiskyInfoDiv>
        )}
      </StockListDiv>
      <StockListDiv>
        <ImageDiv>
          <Image width={'80px'} height={'80px'} src={''} alt={''} />
        </ImageDiv>
        <h1>{url === '/WhiskyDetail' || url === '/BarList' ? '위스키바 이름' : '위스키 이름'}</h1>
        <h3>{url === '/WhiskyDetail' || url === '/BarList' ? '서울특별시 강남구 강남대로 7' : 'Whisky name'}</h3>
        {url === '/WhiskyDetail' || url === '/BarList' ? (
          <BarInfoDiv>
            <button type="button">잔여 좌석 2</button>
            <h2>60m</h2>
          </BarInfoDiv>
        ) : (
          <WhiskyInfoDiv>
            <h2>45% vol</h2>
            {/* TODO 아래 버튼은 코멘트 등록, 주류 등록 페이지에서는 버튼 / 주류관리 페이지에서는 삭제, 나머지 페이지는 출력 X */}
            <button type="button">등록</button>
          </WhiskyInfoDiv>
        )}
      </StockListDiv>
    </>
  );
};

export default DetailList;

const StockListDiv = styled.div`
  margin-bottom: 30px;
  & h1 {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & h2 {
    font-size: 14px;
    font-weight: 600;
  }
  & h3 {
    width: 225px;
    margin: 5px 0 17px 0;
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #818181;
  }
`;

const ImageDiv = styled.div`
  float: left;
  margin-right: 15px;
`;

const BarInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & button {
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 12px;
  }
`;

const WhiskyInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & button {
    padding: 5px 10px;
    font-size: 12px;
    background-color: transparent;
    cursor: pointer;
  }
`;