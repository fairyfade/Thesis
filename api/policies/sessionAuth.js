module.exports = async function (req, res, next) {
    if (req.session.userId) { // Check if user is logged in
      return next(); // User is logged in
    }
    else if(req.session.studentId){
      return next();
    }
    return res.redirect('/login'); // User not logged in
  };
  