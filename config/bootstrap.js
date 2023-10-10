/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {
  // Set up administrators when there is no users and devMode is true
  if ((await Users.count()) === 0 && sails.config.custom.devMode) {
    await Users.create({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@admin.com',
      username: 'admin',
      password: await sails.helpers.passwords.hashPassword('admin'), // Hash password
    });
  }
    //Unit Information database
   if (await Unit.count() === 0){
      await Unit.createEach( [
       {
        //unit 1
         unit_number: '1',
         topic: 'Unit 1: Blasting Off With Space Python',
         syntax_link: 'Syntax link will be provided here after sheet is created',
         introduction_text: 'Greetings adventurers, welcome to your first unit. This unit will guide you through beginning your SpacePython journey.  This unit will introduce you to Python, your text editor, as well as to the basic structure of your SpacePython journey. This unit will also introduce you to the origin of Python and how it is used in modern technology. We\'re looking forward to you joining us for the beginning of our journey through SpacePython. :)',
         lesson_journey: 'This unit will feature three lessons: \n Lesson 1: What is Python? \nLesson 2: Introduction to Coding in Python \n Lesson 3: Using For Loops',
         learning_goals: 'Learning Goals: \n You will be able to identify variables in code. \nYou will be able to display information from variables.  \n You will understand a for loop and how it affects the overall program. \n You will understand how a for loop reduces code volume. \nYou will create a short game using variables and for loops. ',
         total_num_lessons: '2',
         completion_rate: '0',
         complete: false,
         new: 'l',

       },
     ]);
  }
    //Lesson Information database
    if (await Lesson.count() === 0){
      await Lesson.createEach( [
       {
        //unit 1
         unit_number: '1',
         lesson_number: '1',
         topic: 'Unit 1, Lesson 1: What is Python?',
         total_num_sub_lessons: '0',
         completion_rate: '0',
         complete: false,

       },
     ]);
  }
  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();
};
 
