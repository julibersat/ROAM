AccountsTemplates.configure({
    defaultLayout: 'mainLayout',
    defaultLayoutRegions: {},
    defaultContentRegion: 'main'
});

// routes.js

AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signIn',
  path: '/sing-in',
/*  template: 'myLogin',
  layoutTemplate: 'myLayout',
  layoutRegions: {
    nav: 'customNav',
    footer: 'customFooter'
  },*/
  contentRegion: 'main'
});