AccountsTemplates.configure({
    defaultLayout: 'mainLayout',
    defaultLayoutRegions: {},
    defaultContentRegion: 'main'
});

// routes.js

AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signIn',
  path: '/sign-in',
/*  template: 'myLogin',
  layoutTemplate: 'myLayout',
  layoutRegions: {
    nav: 'customNav',
    footer: 'customFooter'
  },*/
  contentRegion: 'main'
});