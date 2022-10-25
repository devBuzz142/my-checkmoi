module.exports = {
  root: true,
  // 상위 폴더의 린트 규칙에 영향을 받지 않도록 한다.
  // 린트는 선언하지 않고 사용하는 변수는 에러 처리한다.
  // 그러므로 전역 변수를 사용하려면 어떤 환경(전역)인지를 설정해줘야 한다.
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // 린트에는 기본적으로 제공하는 rule 말고도 추가로 rule을 제공하는 다양한 plugin이 제공한다. 해당 plugin을 추가함으로써 plugin의 rule을 적용할 수 있다.
  // eslint-plugin- 으로 시작하는 패키지들
  // 플로그인만 추가한다고 관련 규칙이 활성화 되는 것이 아니다. extends나 rule에 추가해줘야 한다.
  plugins: ["react", "@typescript-eslint"],
  // 기본 rule들 설정해놓은 템플릿을 가져와서 쓰자!
  // eslint-config- 로 시작하는 패키지들
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "prettier", // eslitn의 style forammting에 있어서 prettier의 rlue로 우선하도록 eslint-config-prettier를 사용한다.
  ],

  rules: {},
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
