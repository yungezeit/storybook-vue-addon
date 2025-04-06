export const viteFinal = async (config: any) => {
  console.log("This addon is augmenting the Vite config");
  return config;
};

export const webpack = async (config: any) => {
  console.log("This addon is augmenting the Webpack config");
  return config;
};
