import styled from '@emotion/styled';
import LayoutNav from '../_layout/layoutNav';

const Main = () => {
  const width = window.innerWidth;

  return (
    <LayoutNav>
      {width <= 500 ? (
        <ListMobileStyled>
          <div className='about'>
            <h3>About</h3>
            <p>
              안녕하세요. 사용자 경험을 중시하는 프론트엔드 개발자 이태원입니다.
              <br />
              <br />
              현재 스타트업에서 일하며 재능 있는 사람들과 협업하여 웹/앱 서비스
              개발을 진행하고 있습니다.
              <br />
              <br />
              대표적으로 React와 react-query, react-hook-form을 사용하여 제작한
              누리글로벌 공식 홈페이지 프로젝트를 진행하였고, React-Native로
              개발된 프로젝트의 유지보수 및 고도화 작업을 진행하였습니다.
              <br />
              <br />
              프로젝트가 끝난 후에도 동료 개발자들과 코드 리뷰를 진행하며 좋은
              코드란 무엇인지, 스스로 고민하고 리펙토링하는 시간을 가질 수
              있었습니다.
              <br />
              <br />
              업무 시간 이후에도 부족한 부분을 보완하기 위해 백엔드 개발자와
              함께 기능 구현을 해보며 개발 공부를 게을리하지 않고 있습니다.
              <br />
              <br />
            </p>
          </div>
          <div className='work'>
            <h3>Works</h3>
            <div className='work-inner'>
              <a href='https://nurl.rsad.work/home' target='_blank'>
                누리글로벌 공식 홈페이지
              </a>
              <br />
              <p className='workat'>
                &nbsp;&nbsp;- 개발 기간
                <br />
                (2022.09.26 ~ 2022.11.18)
              </p>
            </div>
            <br />
            <div className='work-inner'>
              <a
                href='https://apps.apple.com/kr/app/kdis-connect/id1547210959'
                target='_blank'
              >
                KDIS 사용자 앱 및 관리자 웹 유지보수/고도화
              </a>
              <br />
              <p className='workat'>
                &nbsp;&nbsp;- 개발 기간
                <br />
                (2022.12.01 ~ 2022.12.27)
              </p>
            </div>
            <h3>Side Projects</h3>
            <div className='work-inner'>
              <a
                href='https://timcodejs.github.io/react-redux-insta-clone-codding/'
                target='_blank'
              >
                인스타그램 클론 코딩
              </a>
            </div>
            <div className='work-inner'>
              <a
                href='https://timcodejs.github.io/react-typescript-movie-app/'
                target='_blank'
              >
                영화 웹 어플리케이션
              </a>
            </div>
          </div>
        </ListMobileStyled>
      ) : (
        <ListStyled>
          <div className='about'>
            <h3>About</h3>
            <p>
              안녕하세요. 사용자 경험을 중시하는 프론트엔드 개발자 이태원입니다.
              <br />
              <br />
              현재 스타트업에서 일하며 재능 있는 사람들과 협업하여 웹/앱 서비스
              개발을
              <br />
              진행하고 있습니다. 대표적으로 React와 react-query,
              react-hook-form을
              <br /> 사용하여 제작한 누리글로벌 공식 홈페이지 프로젝트를
              진행하였고,
              <br />
              React-Native로 개발된 프로젝트의 유지보수 및 고도화 작업을
              진행하였습니다.
              <br />
              <br />
              프로젝트가 끝난 후에도 동료 개발자들과 코드 리뷰를 진행하며
              <br />
              좋은 코드란 무엇인지, 스스로 고민하고 리펙토링하는 시간을 가질 수
              있었습니다.
              <br />
              <br />
              업무 시간 이후에도 부족한 부분을 보완하기 위해 백엔드 개발자와
              <br />
              함께 기능 구현을 해보며 개발 공부를 게을리하지 않고 있습니다.
              <br />
              <br />
            </p>
          </div>
          <div className='work'>
            <h3>Works</h3>
            <p>
              <a href='https://nurl.rsad.work/home' target='_blank'>
                누리글로벌 공식 홈페이지
              </a>
              &nbsp;&nbsp;&nbsp;- 개발 기간 (2022.09.26 ~ 2022.11.18)
            </p>
            <p>
              <a
                href='https://apps.apple.com/kr/app/kdis-connect/id1547210959'
                target='_blank'
              >
                KDIS 사용자 앱 및 관리자 웹 유지보수/고도화
              </a>
              &nbsp;&nbsp;&nbsp;- 개발 기간 (2022.12.01 ~ 2022.12.27)
            </p>
            <h3>Side Projects</h3>
            <p>
              <a
                href='https://timcodejs.github.io/react-redux-insta-clone-codding/'
                target='_blank'
              >
                인스타그램 클론 코딩
              </a>
            </p>
            <p>
              <a
                href='https://timcodejs.github.io/react-typescript-movie-app/'
                target='_blank'
              >
                영화 웹 어플리케이션
              </a>
            </p>
          </div>
        </ListStyled>
      )}
    </LayoutNav>
  );
};

export default Main;

const ListStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  .about p {
    line-height: 23px;
  }
  .work .work-inner {
    margin: 5px 0;
  }
  .work-inner {
    padding: 0;
    margin: 0;
  }
  a {
    color: #000;
  }
  .workat {
    font-size: 14px;
  }
`;

const ListMobileStyled = styled.div`
  height: 100vh;
  .about p {
    line-height: 23px;
  }
  .work {
    padding-bottom: 50px;
  }
  .work .work-inner {
    margin: 5px 0;
  }
  .work-inner {
    padding: 0;
    margin: 0;
  }
  a {
    color: #000;
  }
  .workat {
    font-size: 14px;
  }
`;
