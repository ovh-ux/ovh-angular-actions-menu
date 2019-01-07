import rollupConfig from '@ovh-ux/component-rollup-config';

const config = rollupConfig({
  input: 'src/ovh-angular-actions-menu.js',
});

export default [
  config.es(),
  config.cjs(),
  config.umd({
    output: {
      globals: {
        angular: 'angular',
      },
    },
  }),
];
