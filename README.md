- _app.js는 전체 레이아웃 잡을때 사용
- index.js는 home 이자 '/' 인 페이지
- pages folder에 생성되는 파일들은 각 라우팅 되는 페이지들
- src/components 폴더에 있는 파일들은 모달 등 각종 기능을 하는 컴포넌트들로써 index.js에 삽입하여 사용 한다.
- public 폴더에는 이미지파일들이나 폰트파일 등을 넣어놓고 index.js에 들어가는 css 용으로도 사용함.
- 기본적으로 static page를 만들고 외부에서 데이터를 받아오거나 할 경우에는 getStaticProps와 getStaticPath를 사용해서 가져온다.
- ssr로 할 경우 getServerSideProps를 사용한다.
- csr은 필요 파일들을 pre-rendering을 하여 요청시 즉각 보여주고 ssr은 요청이 있을시에 서버에 요청하여 전체 만들어진 페이지를 보여준다.


## babel path setting

babel 경로 별칭 사용 시 package 설치 
"dependencies": {
    "@babel/runtime": "^7.15.3",
    "styled-jsx": "^4.0.0"
  },
"devDependencies": {
    "@babel/cli": "^7.14.8",
    "@babel/core": "^7.15.0",
    "@babel/plugin-transform-runtime": "^7.15.0",
    "@babel/preset-env": "^7.15.0",
    "@babel/preset-react": "^7.14.5",
    "babel-plugin-root-import": "^6.5.0",

### .babelrc 파일
{
  "presets": ["@babel/preset-env", ["@babel/preset-react", {
    "runtime": "automatic"
 }]],
  "plugins": [
    ["styled-jsx/babel"],
    ["@babel/plugin-transform-runtime"],
    [
      "babel-plugin-root-import",
      {
        "paths": [
          {
            "rootPathSuffix": ".",
            "rootPathPrefix": "~/"
          },
          {
            "rootPathSuffix": "./src/components",
            "rootPathPrefix": "@components/"
          },
          {
            "rootPathSuffix": "./public/css",
            "rootPathPrefix": "@css/"
          }
        ]
      }
    ]
  ]
}