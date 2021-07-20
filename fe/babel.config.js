module.exports = function(api){
    api.cache(true);
  
    const presets = ['@babel/preset-env', '@babel/preset-react'];
    const plugins = ['@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-export-default-from'];
  
    return {
      presets,
      plugins
    };
  };