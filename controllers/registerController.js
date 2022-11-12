const registerController = {
  async index(req, res) {
    res.render('register.ejs');
  },
};

module.exports = registerController;