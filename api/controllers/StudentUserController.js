const uuidv4 = require('uuid/v4'); // Import uuid

module.exports = {
  /* 
    Login a user.
    @param {string} username
    @param {string} password
    @returns {object} success
  */
    login: async function(req, res) {
        try {
          const username = req.param('username');
          const password = req.param('password');
          if (!username || !password) { // Check if username and password are provided
            return res.send({
              error: 'Username and password required'
            });
          }
          let user = await Student.find({username: username}); // Find user
          if (!user || user.length === 0) { // Check if user exists
            return res.send({ // Return error if user doesn't exist
              error: 'User not found'
            });
          }
          user = user[0];
          const validPassword = await sails.helpers.passwords.comparePasswords(password, user.password); // Check if password is valid
          if (!validPassword) { // Return error if password is invalid
            return res.send({
              error: 'Invalid password'
            });
          }
          req.session.sessionID = uuidv4(); // Generate session ID
          req.session.userId = user.id; // Set user ID
          return res.send({ // Return success
            success: true
          });
        } catch (err) { // Return error if something goes wrong
          return res.send({
            error: 'Error logging in'
          });
        }
      },
  /*
    Logout a user.
    @returns {object} success
  */
  logout:function(req, res) {
    req.session.userId = undefined; // Clear session
    return res.send({ // Return success
      success: true
    });
  },
  /*
    Create a new user.
    @param {string} firstName
    @param {string} lastName
    @param {string} email
    @param {string} username
    @param {string} password
    @returns {object} success
  */
  createAccount: async function(req, res) {
    try {
      //const userID = req.session.userId;
      const firstName = req.param('firstName');
      const lastName = req.param('lastName');
      const username = req.param('username');
      const password = req.param('password');
      //const parent = req.param('parent');

      if (!firstName || !lastName || !username || !password ) { // Missing required params
        return res.send({
          error: 'All fields required'
        });
      }
      if (firstName === '' || lastName === '' || username === '' || password === '' ) { // Empty params
        return res.send({
          error: 'All fields required'
        });
      }
      const existingStudent = await Student.find({ // Check if user already exists
        or: [{username: username}]
      });
      if (existingStudent && existingStudent.length > 0) { // Return error if user already exists
        return res.send({
          error: 'User already exists'
        });
      }
      const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
      await Student.create({ // Create user
       // userID: req.session.userId,
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: hash,
       // parent: parent,
    });
    return res.send({ // Return success
      success: true
    });
  } catch (error) {
    console.log(error);
  }
},
  /*
    Get a user's account information.
    @param {string} accountId
    @returns {object} account
  */
  getAccount: async function(req, res) {
    try {
      const studentId = req.session.userId;
      let accountId = req.param('accountId');
      if (!studentId) { // User not logged in
        return res.view('pages/login', {
          error: 'Missing required params'
        });
      }
      if (!accountId) { // Get own account
        accountId = studentId;
      }
      let isSelfEdit = studentId === accountId;
      const foundStudent = await Student.find({id: accountId});
      if (!foundStudent || foundStudent.length === 0) { // User not found
        return res.view('pages/homepage', {
          error: 'User not found'
        });
      }
      const student = foundStudent[0];
      const account = { // Return account info
        id: student.id,
        firstName: student.firstName,
        lastName: student.lastName,
        username: student.username,
        isSelfEdit: isSelfEdit
      };
      return res.view('pages/profile', {
        account: JSON.stringify(account)
      });
    } catch (err) { // Error getting account
      return res.send({
        error: 'Error getting account'
      });
    }
  },
  fetchPlants: async function(req, res) {
    try {
        //const posts = await Student.find().populate('userID');
        const posts = await Student.find({userID: req.session.userId}).populate('userID');
        return res.view({
          postdata:JSON.stringify(posts)
          //postdata:JSON.stringify(combinedPosts)
        }
        );
      } catch (error) {
        console.log(error);
      }
  },
  fetchStudentProfile: async function(req, res) {
    try {
        //const posts = await Student.find().populate('userID');
        const posts = await Student.find({userID: req.session.userId}).populate('userID');
        return res.view({
          postdata:JSON.stringify(posts)
          //postdata:JSON.stringify(combinedPosts)
        }
        );
      } catch (error) {
        console.log(error);
      }
  },
  /*
    Edit a user's account information.
    @param {string} firstName
    @param {string} lastName
    @param {string} email
    @param {string} interests
    @returns {object} success
  */
  editAccount: async function(req, res) {
    try {
      const firstName = req.param('firstName');
      const lastName = req.param('lastName');
      const userId = req.session.userId;
      if (!userId) { //Redirect to login page if not logged in
        return res.view('pages/login', {
          error: 'Missing required params'
        });
      }
      if (!firstName || !lastName) { //Check for missing params
        return res.send({
          error: 'All fields required'
        });
      }
      if (firstName === '' || lastName === '') { //Check for empty params
        return res.send({
          error: 'All fields required'
        });
      }
      let existingUser = await Student.find({ //Check if user exists
        id: userId
      });
      if (!existingUser || existingUser.length === 0) { //Return error if user doesn't exist
        return res.send({
          error: 'User not found'
        });
      }
      existingUser = existingUser[0];
      await Student.update({id: userId}, { //Update user
        firstName: firstName,
        lastName: lastName,
      }).exec((err, user) => { //Return error if update fails
        if (err) {
          return res.send({
            error: 'Error updating user'
          });
        }
      }
      );
      return res.send({ //Return success if update succeeds
        success: true
      });
    } catch (err) { //Return error if error occurs
      return res.send({
        error: 'Error updating user'
      });
    }
  },
};
