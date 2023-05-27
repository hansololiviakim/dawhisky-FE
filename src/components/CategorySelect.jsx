import React, { useState } from 'react';
import { styled } from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';
import Button from './Button';

const CategorySelect = ({ category, list }) => {
  const [showUlList, setShowUlList] = useState(false);

  const isShowListHandler = () => setShowUlList(!showUlList);

  return (
    <>
      <SelectButton onClick={isShowListHandler}>
        {category}
        <BsChevronDown />
      </SelectButton>
      {showUlList && (
        <>
          <BackgroundDiv onClick={isShowListHandler} />
          <ListUl>
            <p>{category}</p>
            {list.map((item) => {
              return <ListLi>{item}</ListLi>;
            })}
            <ButtonWrapDiv>
              <Button size={'medium'} location={'both'}>
                완료
              </Button>
              <Button size={'medium'} location={'both'} onClick={isShowListHandler}>
                닫기
              </Button>
            </ButtonWrapDiv>
          </ListUl>
        </>
      )}
    </>
  );
};

export default CategorySelect;

const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const SelectButton = styled.button`
  padding: 8px 12px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  background-color: #f3f3f3;
  border: 0.5px solid #dadada;
  border-radius: 16px;
  cursor: pointer;
`;

const ListUl = styled.ul`
  width: 360px;
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 12px 12px 0 0;
  background-color: #fff;
  z-index: 1;
  height: ${(props) => `${props.height}px`};
  overflow-y: auto;
  animation: fadeInUp 0.7s;
  & p {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate(-50%, 100%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
`;

const ListLi = styled.li`
  font-size: 16px;
  margin: 16px 20px;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    font-weight: bold;
  }
`;

const ButtonWrapDiv = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;