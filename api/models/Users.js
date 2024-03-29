/**
 * Users.js
 *
 * A table holding user information.
 */

module.exports = {
    attributes: {
      firstName: { // First name
        type: 'string',
        required: true,
      },
      lastName: { // Last name
        type: 'string',
        required: true,
      },
      email: { // Email
        type: 'string',
        required: true,
      },
      username: { // Username
        type: 'string',
        required: true,
      },
      password: { // Password
        type: 'string',
        required: true,
      },
      account_type: { //student or parent account
        type: 'string',
        required: true,
      },

    }
  };
  