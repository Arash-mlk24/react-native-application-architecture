module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': ['./src/components'],
          '@core': ['./src/core'],
          '@navigation': ['./src/navigation'],
          '@pages': ['./src/pages'],
          '@common': ['./src/framework/common'],
          '@network': ['./src/framework/network']
        },
      },
    ],
  ],
};
