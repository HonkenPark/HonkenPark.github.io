# 프로젝트명
### `honken-portfolio`

# 프로젝트개요

github 포트폴리오 셀프 제작을 위한 React 프로젝트

## 사용 방법

프로젝트 사용방법에 대한 설명

1. 설치
   ### `$ yarn create react-app honken-portfolio`

2. 실행
   ### `$ yarn start`
   위 명령어로 실행 시,\
   [http://localhost:3000](http://localhost:3010) 주소에서 개발검증이 가능


3. 배포
   ### `$ yarn build` 
   추후 github 또는 nginx 등의 서버 배포 시,\
   위 명령어를 통해 리소스 생성 및 릴리즈 가능


## UX 디자인

Figma Community의 Portfolio v01 디자인 참고
[Portfolio v01 링크](https://www.figma.com/file/mK3BKTUU6OlGfh1bEVazeD/Portfolio-v01-(Community)?node-id=1-2&t=mQizNJbLUrLvVRgT-0)

### 디자인 구성요소

1. Main
A. Header
(1) Home 메뉴 : Main 컴포넌트로 이동
(2) About 메뉴 : About 컴포넌트로 이동
(3) Project 메뉴 : Project 컴포넌트로 이동
(4) Contact 메뉴 : Contact 컴포넌트로 이동
(5) Language 메뉴 : 한/영 스위칭 메뉴
B. 메인 디자인 이미지
C. Simple Text
D. My github Emoji : 클릭 시, Real Photo로 변경
2. About
A. 자기소개 Simply briefing
B. Read More [더 읽기] or Formal View
C. 이름, 학력, 경력, 자격증
D. 장착 스킬 [Embedded, Frontend, Backend, Design, Language]
3. Project
A. 프로젝트명과 기간이 명시된 간략화 화면
B. 클릭 시, 모달 또는 페이지 이동이 되며 상세 설명 (도구, 스킬, 이슈 등)
4. Contact
A. github, facebook, tistory, linkedin, figma, emailaddress, cellphone, lol
5. Language
A. 클릭 시, 드랍다운 버튼 형식으로 한/영 변환 메뉴 출력
6. Desktop 모드 & Mobile 모드 반응형 지원

### 디자인 적용
1. Figma의 Inspect를 이용한 Styled Components 사용
2. ant design 사용