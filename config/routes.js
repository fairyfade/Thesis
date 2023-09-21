/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  '/': { view: 'pages/homepage'},
  '/login': { view: 'pages/login_form' }, // Login page
  '/register': { view: 'pages/signup_form' }, // Register page
  '/user/login': 'UserController.login', // Login action
  '/user/logout': 'UserController.logout', // Logout action
  '/user/register': 'UserController.createAccount', // Register action
  '/user/edit': {controller: 'UserController', action: 'editAccount', policy: 'sessionAuth'}, // Edit account action
  '/parent_dashboard': {view: 'pages/parent_accounts/parent_homepg', policy: 'sessionAuth'},
  // '/messages': {view: 'pages/messages', policy: 'sessionAuth' },
 // '/residence_halls': {view: 'pages/residence_halls', policy: 'sessionAuth'},
 // '/dining': {view: 'pages/dining', policy: 'sessionAuth'},
 // '/supplies': {view: 'pages/supplies', policy: 'sessionAuth'},
 // '/events': {view: 'pages/events', policy: 'sessionAuth'},
 // '/sarasota': {view: 'pages/sarasota', policy: 'sessionAuth'},
 // '/leaderboard': {view: 'pages/leaderboard', policy: 'sessionAuth'},
  //'/profile': {view: 'pages/profile', policy: 'sessionAuth', controller: 'UserController', action: 'getAccount'}, // Profile page


  

};
