module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.json'
    },
    {
      code: 'ru',
      iso: 'ru-RU',
      name: 'Russian',
      file: 'ru.json'
    }
  ],
  defaultLocale: 'en',
  seo: true,
  lazy: true,
  // detectBrowserLanguage: {
  //   cookieKey: 'redirected',
  //   useCookie: true
  // },
  langDir: 'lang/',
  parsePages: false,
  pages: {},
  vueI18n: {
    fallbackLocale: 'en'
  }
}
