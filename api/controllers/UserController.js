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
      let user = await Users.find({username: username}); // Find user
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
    return res.view('pages/homepage', {
      
    });
  },
  createAnotherStudent:function(req, res) {
    req.session.userId = undefined; // Clear session
    return res.view('pages/create_student_account', {
      
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
      //const userId = req.session.userId;
      const firstName = req.param('firstName');
      const lastName = req.param('lastName');
      const email = req.param('email');
      const username = req.param('username');
      const password = req.param('password');
      const account_type = req.param('account_type');
      if (!firstName || !lastName || !email || !username || !password || !account_type) { // Missing required params
        return res.send({
          error: 'All fields required'
        });
      }
      if (firstName === '' || lastName === '' || email === '' || username === '' || password === '' || account_type === '') { // Empty params
        return res.send({
          error: 'All fields required'
        });
      }
      const existingUser = await Users.find({ // Check if user already exists
        or: [{username: username}]
      });
      if (existingUser && existingUser.length > 0) { // Return error if user already exists
        return res.send({
          error: 'User already exists'
        });
      }
      const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
      await Users.create({ // Create user
        //id: userId,
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: hash,
        account_type: account_type,
      }).exec((err, user) => { // Error handling
        if (err) {
          return res.send({
            error: 'Error creating user'
          });
        }
      });
      return res.send({ // Return success
        success: true
      });
    } catch (err) { // Error creating user
      return res.send({
        error: 'Error creating user'
      });
    }
  },
  /*
    Get a user's account information.
    @param {string} accountId
    @returns {object} account
  */
  getAccount: async function(req, res) {
    try {
      const userId = req.session.userId;
      let accountId = req.param('accountId');
      if (!userId) { // User not logged in
        return res.view('pages/login', {
          error: 'Missing required params'
        });
      }
      if (!accountId) { // Get own account
        accountId = userId;
      }
      let isSelfEdit = userId === accountId;
      const foundUser = await Users.find({id: accountId});
      if (!foundUser || foundUser.length === 0) { // User not found
        return res.view('pages/homepage', {
          error: 'User not found'
        });
      }
      const user = foundUser[0];
      const account = { // Return account info
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        isSelfEdit: isSelfEdit
      };
      return res.view( {
        parentdata:JSON.stringify(account)
      });
    } catch (err) { // Error getting account
      return res.send({
        error: 'Error getting account'
      });
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
      if (!firstName || !lastName ) { //Check for missing params
        return res.send({
          error: 'All fields required'
        });
      }
      if (firstName === '' || lastName === '' ) { //Check for empty params
        return res.send({
          error: 'All fields required'
        });
      }
      let existingUser = await Users.find({ //Check if user exists
        id: userId
      });
      if (!existingUser || existingUser.length === 0) { //Return error if user doesn't exist
        return res.send({
          error: 'User not found'
        });
      }
      existingUser = existingUser[0];
      await Users.update({id: userId}, { //Update user
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

fetchParent: async function(req, res) {
  try {
      //const posts = await Student.find().populate('userID');
      const parents = await Users.find({id: req.session.userId});
      return res.view( {
        parentdata:JSON.stringify(parents)
        //postdata:JSON.stringify(combinedPosts)
      }
      );
    } catch (error) {
      console.log(error);
    }
},

viewStudents: async function(req, res) {
  try {
    const userId = req.session.userId;
    let accountId = req.param('accountId');
      if (!userId) { // User not logged in
        return res.view('pages/login', {
          error: 'Missing required params'
        });
      }
      if (!accountId) { // Get own account
        accountId = userId;
      }
    const foundUser = await Users.find({id: accountId})
      if (!foundUser || foundUser.length === 0) { // User not found
        return res.view('pages/homepage', {
          error: 'User not found'
        });
      }
      const user = foundUser[0];
      const account = { // Return account info
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        account_type: user.account_type,
      };
    //const posts = await Student.find().populate('userID');
 //   const parent = await Users.find({id: accountId});
    const students = await Users.find({});
    return res.view( {
      accountdata:JSON.stringify(account),
      studentdata:JSON.stringify(students)
      //postdata:JSON.stringify(combinedPosts)
      //console.log("Success");
    }
    );
  } catch (error) {
    console.log(error);
  }
},

viewStudentProfile: async function(req, res){
  try {
    const userId = req.session.userId;
    let accountId = req.param('accountId');
    const username = req.param('username');
    if (!userId) { // User not logged in
      return res.view('pages/login', {
        error: 'Missing required params'
      });
    }
    if (!accountId) { // Get own account
      accountId = userId;
    }
    let isSelfEdit = userId === accountId;
    const foundUser = await Users.find({username: username});
    
    if (!foundUser || foundUser.length === 0) { // User not found
      return res.view('pages/homepage', {
        error: 'User not found'
      });
    }
    const user = foundUser[0];
    const account = { // Return account info
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      isSelfEdit: isSelfEdit
    };
    const studentProgress = await Progress.find({userID: account.id});
    return res.view( {
      parentdata:JSON.stringify(account),
      progressdata:JSON.stringify(studentProgress)
    });
  } catch (err) { // Error getting account
    return res.send({
      error: 'Error getting account'
    });
  }
}
};
