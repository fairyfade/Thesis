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
  '/about': {view: 'pages/about'}, //about page
  '/user/login': 'UserController.login', // Login action
  '/user/logout': 'UserController.logout', // Logout action
  '/user/register': 'UserController.createAccount', // Register action
  '/user/edit': {controller: 'UserController', action: 'editAccount', policy: 'sessionAuth'}, // Edit account action
  '/parent_dashboard': {view: 'pages/parent_accounts/parent_homepg', controller: 'StudentUserController', action: 'fetchPlants', policy: 'sessionAuth'},
  '/parent_dashboard/view_profile/:id': {view: 'pages/parent_accounts/studentDetail', controller: 'StudentUserController', action: 'fetchPlants', policy: 'sessionAuth'},//action to view specific student profile
  
  '/student/register': {controller:'StudentUserController', action: 'createAccount', policy: 'sessionAuth'}, //create student account
  '/create_student_account': {view: 'pages/create_student_account', policy: 'sessionAuth'}, //student signup form 
  '/plants/fetch': {controller: 'StudentUserController', action: 'fetchPlants', policy: 'sessionAuth'}, //get all plants
  '/viewProgress': {view: 'pages/parent_accounts/progress_parent', policy: 'sessionAuth'}, //view student progress (from parent account)
  '/manage_account': {view: 'pages/parent_accounts/manage_accounts', policy: 'sessionAuth'}, //manage parent accounts
  '/student_dashboard': {view: 'pages/child_accounts/child_homepg', policy: 'sessionAuth'},
  '/student/login': 'StudentUserController.login', //login to student account
  '/coding_profile': {view: 'pages/child_accounts/coding_profile', policy: 'sessionAuth'}, //coding profile page
  '/my_progress': {view: 'pages/child_accounts/progress_child', policy: 'sessionAuth'}, //view student progress (student accout)
  '/rewards_store': {view: 'pages/child_accounts/rewards_store', policy: 'sessionAuth'}, //view Rewards Store
  '/startCoding': {view: 'pages/child_accounts/curriculum/startCoding', policy: 'sessionAuth'},

  '/unit/overview/:unit_number': {view: 'pages/child_accounts/curriculum/unit_intro', controller: 'CurriculumController', action: 'getUnits'}, //view first page of a new unit

  '/unit/review/:unit_number': {view: 'pages/child_accounts/curriculum/unit_review', controller: 'CurriculumController', action: 'getUnitReview'},
  '/unit/quiz/:unit_number': {view: 'pages/child_accounts/curriculum/unit_quiz', controller: 'CurriculumController', action: 'getUnitQuiz'},
  '/unit/challenge/:unit_number': {view: 'pages/child_accounts/curriculum/unit_challenge', controller: 'CurriculumController', action: 'getUnitChallenge'},
  
  '/lesson/overview/:unit_number/:lesson_number': {view: 'pages/child_accounts/curriculum/lesson_intro', controller: 'CurriculumController', action: 'getLessons'}, //view first pa ge of a new lesson
  
  '/sublesson/video/:unit_number/:lesson_number/:sublesson_number': {view: 'pages/child_accounts/curriculum/sublesson_vid', controller: 'CurriculumController', action: 'getSublessons'},
  '/sublesson/guided_activity/:unit_number/:lesson_number/:sublesson_number': {view: 'pages/child_accounts/curriculum/guided_activity', controller: 'CurriculumController', action: 'getGuidedActivity'},
  '/sublesson/activity_answer/:unit_number/:lesson_number/:sublesson_number/:activity_number': {view: 'pages/child_accounts/curriculum/activity_answer', controller: 'CurriculumController', action: 'getAnswer'},
  '/sublesson/activity/:unit_number/:lesson_number/:sublesson_number/:activity_number': {view: 'pages/child_accounts/curriculum/sublesson_activity', controller: 'CurriculumController', action: 'getActivity'},





  

};
