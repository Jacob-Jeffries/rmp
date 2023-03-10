const withAuth = (req, res, next) => {
    //withAuth middleware, if the user is not logged in, redirect to log in page
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next(); //if logged in, continue to execute the rest of route 
    }
  };
  
  module.exports = withAuth;