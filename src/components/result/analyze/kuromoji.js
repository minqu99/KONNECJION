import kuromoji from "kuromoji";

const analyzeText = (text) => {
  return new Promise((resolve, reject) => {
    kuromoji
      .builder({ dicPath: "node_modules/kuromoji/dict/" })
      .build((err, tokenizer) => {
        if (err) {
          reject(err);
        } else {
          const tokens = tokenizer.tokenize(text);
          const results = tokens.map((token) => ({
            surface_form: token.surface_form,
            basic_form: token.basic_form,
          }));
          resolve(results);
        }
      });
  });
};

export default analyzeText;
