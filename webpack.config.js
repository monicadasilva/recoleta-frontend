module.exports = {
  // Storybook provê este hook para configurar o Webpack
  webpackFinal: async (config, { configType }) => {
    // Como o loader de SVG pode conflitar com o file loader
    // Nós precisamos excluir .svg do file loader
    const filesRule = config.module.rules.find((r) => r.test.test(".svg"));
    filesRule.exclude = /\.svg$/;

    // Adicionamos o loader, como de costume
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      }
    );
	// Novamente, o config modificado precisa ser retornado
    return config;
  },
};