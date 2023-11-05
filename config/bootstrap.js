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
     if (await Link.count() === 0){
      await Link.createEach( [
       {
        //unit 1
         curr_unit: '1',
         curr_lesson: '0',
         unit_intro: false,
         lesson_intro: false,
         curr_sublesson: '0',
         sublesson_vid: false,
         sublesson_guided_activity: false,
         curr_activity: '0',
         activity_answer: false,
         unit_review: false,
         unit_quiz: false,
         unit_challenge: false,
         total_units: '2',
         total_lessons: '0',
         total_sublessons: '0',
         total_guided_act: '0',
         total_activities: '0',

       },
      ]);

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
       {
        //unit 1
         unit_number: '2',
         topic: 'Unit 2: Launch to the moon',
         syntax_link: 'Syntax link will be provided here after sheet is created',
         introduction_text: 'Greetings adventurers, welcome to your second unit. This unit will guide you through conditionals, another kind of loop, and some new data types.  Conditionals will let us choose what will happen in our program depending on our condition.  Conditions check if a statement is true or false. For example, 5 < 10 is true.  On the other hand 10 > 5 is false.  A new kind of loop will let us repeat code in a different way than for loops. New data types will let us store more information in our programs',
         lesson_journey: 'This unit will feature two lessons: \n Lesson 1: If statements and conditions \nLesson 2: While Loops',
         learning_goals: 'Learning Goals: You will be able to write a while loop.  You will be able to write an if/else statement using logical operators. You will be able to write a list, tuple, or dictionary.  ',
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
         introduction: "new info",
         newData: "We\'ll be launching into our first Python mission soon.  \n Python is a commonly used programming language.  Programming languages allow us to give computers instructions (aka code) so that they can create programs. Programs are built with lines of code written in a programming language, like Python. Python is used to build something like Spotify or even make games. ",
         lesson_goal: 'Create your first program',
         total_num_sub_lessons: '1',
         completion_rate: '0',
         complete: false,

       },
       {
        //unit 1
         unit_number: '1',
         lesson_number: '2',
         topic: 'Unit 1, Lesson 2: Introduction to Coding in Python',
         introduction: "n/a ",
         newData: "In this lesson, we're going to learn how to write a longer program. Programs are a set of instructions to your computer. A computer can only do exactly as it's told, so it is important to make sure the instructions you give it are clear. Computers are not able to guess what you want them to do if you miss a step in your instructions. It is important to plan what you want your program to accomplish, so you can make sure that all the steps are completed.",
         lesson_goal: 'Learn how to write an algorithm and learn what variables are. ',
         total_num_sub_lessons: '3',
         completion_rate: '0',
         complete: false,
       },
       {
        //unit 1 lesson 3
         unit_number: '1',
         lesson_number: '3',
         topic: 'Unit 1, Lesson 3: For Loops',
         introduction: "n/a ",
         newData: "In this lesson, we're going to learn about loops. Loops can be used to repeat code. Using a loop helps cut down on the amount of code you need to write.  For loops repeat code for a given number of times. For example, you can create a for loop that creates 5 times. ",
         lesson_goal: 'Learn how to write a for loop ',
         total_num_sub_lessons: '2',
         completion_rate: '0',
         complete: false,
       },
       {
        //unit 1
         unit_number: '2',
         lesson_number: '1',
         topic: 'Unit 2, Lesson 1: If Statements and Conditions',
         introduction: "new info",
         newData: "If statements let something happened based on a condition.  Conditions check if a statement (like x < 10 or 5 < 10) is true or false. Based on the outcome of checking the condition, a program will be able to take two different paths. For example, if 5 < 10, then print your name. Because 5 is less than 10, we will then be able to print a name.  However, if we used the statement, 10 < 5, we would not be able to print a name due to the statement being false.  10 is not less than 5. ",
         lesson_goal: 'Create your first if statement',
         total_num_sub_lessons: '1',
         completion_rate: '0',
         complete: false,

       },
       {
        //unit 1
         unit_number: '2',
         lesson_number: '2',
         topic: 'Unit 2, Lesson 2: While Loops',
         introduction: "new info",
         newData: "While Loops are similar to for loops except you will stay in the loop until you reach a certain condition.  A condition in a while loop is similar to conditions we saw in if/else statements. For example, a while loop could repeat until a variable reaches 5. Using while loops allows us to repeat code for an unspecified number of times, unline a for loop.  For loops will always run the same number of times, but while loops will run different numbers of times based on what is inside of your while loop. ",
         lesson_goal: 'Create your first while loop',
         total_num_sub_lessons: '1',
         completion_rate: '0',
         complete: false,

       },
     ]);
  }
  if (await SubLesson.count() === 0){
    await SubLesson.createEach( [
     {
      //sublesson 1
      unit_number: '1',
      lesson_number: '1',
      sublesson_number: '1',
      topic: "Writing Your First Program!",
      url: "youtube URL link",
      body: "What is described in this youtube video",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //unit 1 lesson 2 sublesson 1
      unit_number: '1',
      lesson_number: '2',
      sublesson_number: '1',
      topic: "Making a Sandwhich",
      url: "youtube URL link",
      body: "What is described in this youtube video",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //unit 1 lesson 2 sublesson 2
      unit_number: '1',
      lesson_number: '2',
      sublesson_number: '2',
      topic: "Variables",
      url: "youtube URL link",
      body: "What is described in this youtube video",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //unit 1 lesson 2 sublesson 3
      unit_number: '1',
      lesson_number: '2',
      sublesson_number: '3',
      topic: "Types of Errors and Debugging",
      url: "youtube URL link",
      body: "What is described in this youtube video",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //unit 1 lesson 3 sublesson 1
      unit_number: '1',
      lesson_number: '3',
      sublesson_number: '1',
      topic: "What are Loops?",
      url: "youtube URL link",
      body: "What is described in this youtube video",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //unit 1 lesson 3 sublesson 2
      unit_number: '1',
      lesson_number: '3',
      sublesson_number: '2',
      topic: "Taking Input",
      url: "youtube URL link",
      body: "What is described in this youtube video",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //Unit 2 lesson 1 sublesson 1
      unit_number: '2',
      lesson_number: '1',
      sublesson_number: '1',
      topic: "If Statement",
      url: "youtube URL link",
      body: "What is described in this youtube video",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //sublesson 1
      unit_number: '2',
      lesson_number: '1',
      sublesson_number: '2',
      topic: "If/else Statement",
      url: "youtube URL link",
      body: "What is described in this youtube video",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //sublesson 1
      unit_number: '2',
      lesson_number: '1',
      sublesson_number: '3',
      topic: "Conditions and Logical Operators",
      url: "youtube URL link",
      body: "What is described in this youtube video",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //sublesson 1
      unit_number: '2',
      lesson_number: '2',
      sublesson_number: '1',
      topic: "Reviewing For Loops",
      url: "youtube URL link",
      body: "What is described in this youtube video",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //sublesson 1
      unit_number: '2',
      lesson_number: '2',
      sublesson_number: '2',
      topic: "While Loops",
      url: "youtube URL link",
      body: "What is described in this youtube video",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //sublesson 1
      unit_number: '2',
      lesson_number: '2',
      sublesson_number: '3',
      topic: "Data Types - Strings, Lists, Tuples, and Dictionaries",
      url: "youtube URL link",
      body: "What is described in this youtube video",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
   ]);
}
if (await SubLessonGuidedActivity.count() === 0){
  await SubLessonGuidedActivity.createEach( [
   {
    //unit 1 lesson 1 sublesson 1
    unit_number: '1',
    lesson_number: '1',
    sublesson_number: '1',
    topic: "Create a program that prints out the names of your favorite foods",
    url: "youtube URL link",
    complete: false,

   },
   {
    //unit 1 lesson 2 sublesson 2 guided activity 1
    unit_number: '1',
    lesson_number: '2',
    sublesson_number: '2',
    topic: "Create a program that stores the steps of making a sandwich in variables and prints them. ",
    url: "youtube URL link",
    complete: false,

   },
   {
    //unit 1 lesson 2 sublesson 3 guided activity 1
    unit_number: '1',
    lesson_number: '2',
    sublesson_number: '3',
    topic: " debugging a program with lots of errors",
    url: "youtube URL link",
    complete: false,

   },
   {
    //unit 1 lesson 3 sublesson 1 guided activity 1
    unit_number: '1',
    lesson_number: '3',
    sublesson_number: '1',
    topic: "Create a for loop that counts up to 10",
    url: "youtube URL link",
    complete: false,

   },
   {
    //unit 1 lesson 3 sublesson 2 guided activity 1
    unit_number: '1',
    lesson_number: '3',
    sublesson_number: '2',
    topic: "Take user input such as a name",
    url: "youtube URL link",
    complete: false,

   },
   {
    //unit 2 lesson 1 sublesson 1 guided activity 1
    unit_number: '2',
    lesson_number: '1',
    sublesson_number: '1',
    topic: "Making a program that displays whether a number is lower than 10.",
    url: "youtube URL link",
    complete: false,

   },
   
 ]);
}
if (await SubLessonActivity.count() === 0){
  await SubLessonActivity.createEach( [
   {
    //unit 1 lesson 1 sublesson 1
    unit_number: '1',
    lesson_number: '2',
    sublesson_number: '2',
    activity_number: '2',
    topic: "Create a program that prints the steps of getting ready for school",
    url: "youtube URL link",
    complete: false,
    attempts: '0',
    timeSpent: '0',

   },
   {
    //unit 1 lesson 2 sublesson 3 activity 2
    unit_number: '1',
    lesson_number: '2',
    sublesson_number: '3',
    activity_number: '2',
    topic: " fix the errors in this rocket launching program",
    url: "youtube URL link",
    complete: false,
    attempts: '0',
    timeSpent: '0',

   },
   {
    //unit 1 lesson 3 sublesson 1 activity 2
    unit_number: '1',
    lesson_number: '3',
    sublesson_number: '1',
    activity_number: '2',
    topic: " Make a for loop that prints multiples of two for five loops",
    url: "youtube URL link",
    complete: false,
    attempts: '0',
    timeSpent: '0',

   },
   {
    //unit 1 lesson 3 sublesson 2 activity 2
    unit_number: '1',
    lesson_number: '3',
    sublesson_number: '2',
    activity_number: '2',
    topic: " Ask for five items the user would take on a rocket ship journey. Use a for loop.",
    url: "youtube URL link",
    complete: false,
    attempts: '0',
    timeSpent: '0',

   },
 ]);
}
if (await ActivityAnswer.count() === 0){
  await ActivityAnswer.createEach( [
   {
    //sublesson 1
    unit_number: '1',
    lesson_number: '1',
    sublesson_number: '1',
    activity_number: '1',
    topic: "Answer for - Create a program that prints out the names of your favorite foods",
    url: "youtube URL link",
    complete: false,

   },
   {
    //unit 1 lesson 2 sublesson 2 activity 1
    unit_number: '1',
    lesson_number: '2',
    sublesson_number: '2',
    activity_number: '1',
    topic: "Answer for - Create a program that stores the steps of making a sandwich in variables and prints them.",
    url: "youtube URL link",
    complete: false,

   },
   {
    //unit 1 lesson 2 sublesson 2 activity 2
    unit_number: '1',
    lesson_number: '2',
    sublesson_number: '2',
    activity_number: '2',
    topic: "Answer for - Create a program that prints the steps of getting ready for school",
    url: "youtube URL link",
    complete: false,

   },
   {
    //unit 1 lesson 2 sublesson 3 activity 1
    unit_number: '1',
    lesson_number: '2',
    sublesson_number: '3',
    activity_number: '1',
    topic: "Answer for - debugging a program with lots of errors",
    url: "youtube URL link",
    complete: false,

   },
   {
    //unit 1 lesson 2 sublesson 3 activity 2
    unit_number: '1',
    lesson_number: '2',
    sublesson_number: '3',
    activity_number: '2',
    topic: "Answer for - fix the errors in this rocket launching program",
    url: "youtube URL link",
    complete: false,

   },
   {
    //unit 1 lesson 3 sublesson 1 activity 2
    unit_number: '1',
    lesson_number: '3',
    sublesson_number: '1',
    activity_number: '2',
    topic: "Answer for - Make a for loop that prints multiples of two for five loops",
    url: "youtube URL link",
    complete: false,

   },
   {
    //unit 1 lesson 3 sublesson 2 activity 2
    unit_number: '1',
    lesson_number: '3',
    sublesson_number: '2',
    activity_number: '2',
    topic: "Answer for - Ask for five items the user would take on a rocket ship journey. Use a for loop.",
    url: "youtube URL link",
    complete: false,

   },
 ]);
}
if (await UnitReview.count() === 0){
  await UnitReview.createEach( [
   {
    //unit 1
    unit_number: '1',
    topic: "Unit 1 Review",
    unit_info: "In this unit you learned some of the basics of Python. You created your first program, your first variables, and your first for loop. Visit any of the following links/activities to review for the quiz. A short review video is provided below as well.",
    complete: false,
   },
 
 ]);
}
if (await UnitQuiz.count() === 0){
  await UnitQuiz.createEach( [
   {
    //unit 1
    unit_number: '1',
    topic: 'Unit 1, Quiz 1',
    instructions : 'Answer each question to the best of your ability. Type your answer in the given textbox or select one of the multiple choice options',
    q1: 'True or False. You can store information in a variable',
    q1_ans: 'true',
    q2: 'True or False. You should always start your variables with a number.',
    q2_ans: 'false',
    q3: 'True or False. You can use for loops to repeat code. ',
    q3_ans: 'true',
    q4: 'True or False. Programs contain lines of code.',
    q4_ans: 'true',
    q5: 'True or False. Variables can hold a type of value other then strings',
    q5_ans: 'true',
    correctness : '0',
    complete: false,
   },
 
 ]);
}
  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();
};
 
