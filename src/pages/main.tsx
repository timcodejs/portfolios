import styled from '@emotion/styled';
import LayoutNav from '../_layout/layoutNav';

const Main = () => {
  const width = window.innerWidth;

  return (
    <LayoutNav>
      <ListStyled>
        <div className='about'>
          <h3>About</h3>
          {width <= 500 ? (
            <p>
              안녕하세요. 사용자 경험을 중시하는 프론트엔드 개발자 이태원입니다.
              <br />
              <br />
              대표적인 프로젝트로는 React와 전역상태관리 툴인 Redux +
              Redux-saga를 사용하여 제작한 인스타그램 클론 코딩과 영화 웹
              어플리케이션이 있습니다.
              <br />
              백엔드 개발없이 제작하였기 때문에 유사하게 동작하도록 더미데이터와
              faker 라이브러리를 이용하거나 무료 api를 이용하여 동작하도록
              제작하였습니다.
              <br />
              <br />
              이렇듯 토이 프로젝트 이후에도 Typescript, Eslint, Jest와 같은
              기술적인 공부를 하며 더 나은 코드를 위해 노력을 게을리하지 않고
              있습니다.
              <br />
              <br />
            </p>
          ) : (
            <p>
              안녕하세요. 사용자 경험을 중시하는 프론트엔드 개발자 이태원입니다.
              <br />
              <br />
              대표적인 프로젝트로는 React와 전역상태관리 툴인 Redux +
              Redux-saga를
              <br />
              사용하여 제작한 인스타그램 클론 코딩과 영화 웹 어플리케이션이
              있습니다.
              <br />
              백엔드 개발없이 제작하였기 때문에 유사하게 동작하도록 더미데이터와
              <br />
              faker 라이브러리를 이용하거나 무료 api를 이용하여 동작하도록
              제작하였습니다.
              <br />
              <br />
              또한, 사용자 경험 증대를 위해 사용자가 정의되지 않은 경로로의
              접근을
              <br />
              방지하기 위해 라우터 경로 수정과 에러페이지를 추가하는 등의
              개선작업을
              <br />
              진행한 경험이 있습니다.
              <br />
              <br />
              이렇듯 토이 프로젝트 이후에도 Typescript, Eslint, Jest와 같은
              기술적인
              <br />
              공부를 하며 더 나은 코드를 위해 노력을 게을리하지 않고 있습니다.
              <br />
              <br />
            </p>
          )}
        </div>
        <div className='work'>
          <h3>Works</h3>
          <p>
            <a href='https://timcodejs.github.io/react-redux-insta-clone-codding/'>
              인스타그램 클론 코딩
            </a>
          </p>
          <p>
            <a href='https://timcodejs.github.io/react-typescript-movie-app/'>
              영화 웹 어플리케이션
            </a>
          </p>
        </div>
      </ListStyled>
    </LayoutNav>
  );
};

export default Main;

const ListStyled = styled.div`
  .about p {
    line-height: 23px;
  }
  .work p {
    margin: 5px 0;
  }
  p {
    padding: 0;
    margin: 0;
  }
  a {
    color: #000;
  }
`;
