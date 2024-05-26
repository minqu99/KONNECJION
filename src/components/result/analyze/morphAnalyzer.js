import kuromoji from "kuromoji";
// npm install kuromoji
// npm install path-browserify
// npm install react-app-rewired --save-dev --> 개발 폴더 안에서 설치 필수

const analyzeText = (text) => {
  return new Promise((resolve, reject) => {
    kuromoji
      .builder({ dicPath: "/node_modules/kuromoji/dict" })
      .build((err, tokenizer) => {
        if (err) {
          reject(err);
        } else {
          const tokens = tokenizer.tokenize(text);
          const results = tokens.map((token) => ({
            basic_form: token.basic_form,
          }));
          resolve(results);
        }
      });
  });
};

export default analyzeText;
