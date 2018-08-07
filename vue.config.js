module.exports = {
  devServer: {
    proxy: {
      // proxy all requests starting with /api to
      '/api': {
        target: 'http://localhost:8000/api',
        changeOrigin: false,
      },
      '/api/v1/login': {
        target: 'http://localhost:8000/login',
        changeOrigin: false,
      }
    }
  }

}
