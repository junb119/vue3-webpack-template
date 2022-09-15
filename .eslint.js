module.exports = {
  env : {
    // 코드검사할 전역 환경
    browser: true,
    node: true
  },
  extends: [
    // 코드 검사 규칙

    // vue
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended',  // Lv2
    // 'plugin:vue/vue3-recommended',  // Lv3
    // js
    'eslint:recommended' // eslint에서 권장
  ],
  parserOptions: { // 코드분석기 지정
    parser: 'babel-eslint'
     // es6이상의 문법을 구버젼 브라우저에서도 동작할 수 있게 es5로 변경
  },
  rules: {
    
  }
}