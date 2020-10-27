import px2remOptions from "postcss-px2rem-options";

export default () => ({
  plugins: [
    px2remOptions([
      {
        remUnit: 20,
        include: /src/i
      }
    ])
  ]
});
