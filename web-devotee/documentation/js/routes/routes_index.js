var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"/","pathMatch":"full"},{"path":"","loadChildren":"src/app/pages/landing-page/landing-page.module#LandingPageModule","canActivate":["LoggedService"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/landing-page/landing-page.module.ts","module":"LandingPageModule","children":[{"path":"","component":"LandingPageComponent"}],"kind":"module"}],"module":"LandingPageModule"}]},{"path":"","loadChildren":"src/app/pages/initial-page/initial-page.module#InitialPageModule","canActivate":["LoggedService"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/initial-page/initial-page-rounting.module.ts","module":"InitialPageRoutingModule","children":[{"path":"","component":"InitialPageComponent","children":[{"path":"login","loadChildren":"src/app/pages/initial-page/components/sign-in/sign-in.module#SignInModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/initial-page/components/sign-in/sign-in-rounting.module.ts","module":"SignInRoutingModule","children":[{"path":"","component":"SignInComponent"}],"kind":"module"}],"module":"SignInModule"}]},{"path":"recuperar","loadChildren":"src/app/pages/initial-page/components/remember-password/remember-password.module#RememberPasswordModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/initial-page/components/remember-password/remember-password-rounting.module.ts","module":"RememberPasswordRoutingModule","children":[{"path":"","component":"RememberPasswordComponent"}],"kind":"module"}],"module":"RememberPasswordModule"}]},{"path":"pre-register","loadChildren":"src/app/pages/initial-page/components/register/register.module#RegisterModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/initial-page/components/register/register-rounting.module.ts","module":"RegisterRoutingModule","children":[{"path":"","component":"RegisterComponent"}],"kind":"module"}],"module":"RegisterModule"}]}]}],"kind":"module"}],"module":"InitialPageModule"}]},{"path":"rules","loadChildren":"src/app/pages/etical-rules/etical-rules.module#EticalRulesModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/etical-rules/etical-rules.module.ts","module":"EticalRulesModule","children":[{"path":"","component":"EticalRulesComponent"}],"kind":"module"}],"module":"EticalRulesModule"}]},{"path":"register","loadChildren":"src/app/pages/continue-register/continue-register.module#ContinueRegisterModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/continue-register/continue-register-rounting.module.ts","module":"ContinueRegisterRoutingModule","children":[{"path":"","component":"ContinueRegisterComponent","children":[{"path":"who-are-you","component":"ChangeUserTypeComponent","canActivate":["WhoAreYouRegistredCorrectService"]},{"path":"user-data","component":"RegisterDataComponent","canActivate":["UserRegistredCorrectService"]}]}],"kind":"module"}],"module":"ContinueRegisterModule"}]},{"path":"","loadChildren":"src/app/pages/logged/logged.module#LoggedModule","canActivate":["AuthGuardService"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/logged/logged-rounting.module.ts","module":"LoggedRoutingModule","children":[{"path":"","component":"LoggedComponent","children":[{"path":"settings","loadChildren":"src/app/pages/user-configurations/user-configurations.module#UserConfigurationsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/user-configurations/user-configurations-rounting.module.ts","module":"UserConfigurationsRoutingModule","children":[{"path":"","component":"UserConfigurationsComponent"}],"kind":"module"}],"module":"UserConfigurationsModule"}]},{"path":"filters","loadChildren":"src/app/pages/filter-preferences/filter-preferences.module#FilterPreferencesModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/filter-preferences/filter-preferences-rounting.module.ts","module":"FilterPreferencesRoutingModule","children":[{"path":"","component":"FilterPreferencesComponent"}],"kind":"module"}],"module":"FilterPreferencesModule"}]},{"path":"chat","loadChildren":"src/app/pages/chat/chat.module#ChatModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/chat/chat-rounting.module.ts","module":"ChatRoutingModule","children":[{"path":"","component":"ChatComponent"}],"kind":"module"}],"module":"ChatModule"}]},{"path":"matchs","loadChildren":"src/app/pages/user-matchs/user-matchs.module#UserMatchsModule","children":[{"kind":"module","children":[],"module":"UserMatchsModule"}]},{"path":"likes","loadChildren":"src/app/pages/liked-me/liked-me.module#LikedMeModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/liked-me/liked-me.module.ts","module":"LikedMeModule","children":[{"path":"","component":"LikedMeComponent"}],"kind":"module"}],"module":"LikedMeModule"}]}]}],"kind":"module"}],"module":"LoggedModule"}]},{"path":"**","redirectTo":"/","pathMatch":"full"},{"path":"error","redirectTo":"/"}],"kind":"module"}]}
