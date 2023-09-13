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
  '/login': { view: 'pages/login_form' }, // Login form page
  '/signup': {view: 'pages/signup_form'}, //sign up form
  '/signup_and_login': {view: 'pages/signup_and_login'}, //page taking you to signup or log in options
  '/student_dashboard': {view: 'pages/child_homepage'}, //child homepg and dashboard
  '/student_progress': {view: 'pages/progress_child'}, //progress page for child accounts
  '/rewards_store': {view: 'pages/rewards_store'}, //rewards store page
  '/parent_dashboard': {view: 'pages/parent_homepg'}, //parent homepg and dashboard
  '/progress_reports': {view: 'pages/progress_parent'}, //parent progress report page (what student is up to)
  '/manage_accounts': {view: 'pages/manage_accounts'}, //manage student and parent accounts


};
