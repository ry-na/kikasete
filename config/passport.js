const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const {User} = require("../models");

module.exports = function (app) {
  passport.serializeUser((user, done) => {
    console.log('Serialize ...');
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    console.log("deserializeUser");
    try {
      const user = User.findByPk(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });

  passport.use(new TwitterStrategy({
      consumerKey: '',
      consumerSecret: '',
      callbackURL: "http://127.0.0.1/register/twitter/callback"
    },// 認証後のアクション
    (accessToken, refreshToken, profile, done) => {
      let user = User.create({
        name: profile._json.name,
        twitter_id: profile._json.id,
        screen_name: profile._json.screen_name,
        profile_image_url_https: profile._json.profile_image_url_https
      })
      return done(null, user)
    }
  ));

  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/register/twitter', passport.authenticate('twitter'));
  app.get(
    '/register/twitter/callback',
    function (req, res) {
      passport.authenticate('twitter', {failureRedirect: '/'})
      res.redirect('/mypage');
    }
  );
};