const mypageController = {
  async index(req, res) {
    // ここで認証したユーザーのID等を取得し、DBと照合したい
    // console.log(req) それっぽい値を見つけられず...
    res.render('register.ejs');
  }
};

module.exports = mypageController;