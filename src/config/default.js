module.exports = {
  port: process.env.PORT,
  defaultLocale: 'en',
  api: 'https://api.giphy.com/',
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'React Starter Boilerplate',
    titleTemplate: 'React Starter Boilerplate - %s',
    meta: [
      {
        name: 'description',
        content: 'The best react universal starter boilerplate in the world.',
      },
    ],
  },
};
