import styled from 'styled-components';
import main_square from 'assets/main_square.svg'
import { useState } from 'react';
import { textLabel } from 'common/textLabel';

import Header from 'components/Header';

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 40px 270px; */
  gap: 10px;

  position: absolute;
  width: 100%;
  left: 0px;
  top: 0px;
  height: 4vw;

  @media screen and (max-width: 640px) {
    height: 8vw;
  }

  @media screen and (max-width: 480px) {
    height: 12vw;
  }

  background: #F7F7F7;
`

const BodyContent = styled.div`
  display: block;
`

const SquareImg = styled.img`
  margin-top: 15%;
  margin-left: -50%;
`

const BriefContent = styled.div`
  margin-top: -15%;
  margin-left: 40%;
  text-align: left;
`

const BriefWhite = styled.h1`
  color: #F7F7F7;
`

const BriefOrange = styled.h1`
  color: #FF4500;
`

const MainPage = (props) => {
  const [lang, setLang] = useState('ko-KR');

  return (
    <>
      <HeaderDiv>
        <Header />
      </HeaderDiv>
      <BodyContent>
        <SquareImg src={main_square} alt='Main Logo' />
        {lang !== 'ko-KR' ?
        <BriefContent>
          <BriefWhite>{textLabel.Main.introduce_top[0]}</BriefWhite>
          <BriefWhite>{textLabel.Main.introduce_mid[0]}</BriefWhite>
          <BriefOrange>{textLabel.Main.introduce_bot[0]}</BriefOrange>
        </BriefContent>
        :
        <BriefContent>
          <BriefWhite>{textLabel.Main.introduce_top[1]}</BriefWhite>
          <BriefOrange>{textLabel.Main.introduce_mid[1]}</BriefOrange>
          <BriefWhite>{textLabel.Main.introduce_bot[1]}</BriefWhite>
        </BriefContent>
        }
      </BodyContent>
    </>
  )
}

export default MainPage;