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
      account_type: 'parent',
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
         syntax_link: '',
         introduction_text: 'Greetings adventurers, welcome to your first unit. This unit will guide you through beginning your SpacePython journey.  This unit will introduce you to Python, your text editor, as well as to the basic structure of your SpacePython journey. This unit will also introduce you to the origin of Python and how it is used in modern technology. We\'re looking forward to you joining us for the beginning of our journey through SpacePython. :)',
         lesson_journey: 'This unit will feature three lessons. First, we will explore what Python is in lesson 1. Then, we will learn about the different parts of a python program and why they\'re important in lesson 2. Finally, we will learn about loops and how we can use them to reduce the amount of code we write. ',
         learning_goals: 'You will be able to identify variables in code. \nYou will be able to display information from variables.  \n You will understand a for loop and how it affects the overall program. \n You will understand how a for loop reduces code volume. \nYou will create a short game using variables and for loops. ',
         total_num_lessons: '2',
         completion_rate: '0',
         complete: false,
         new: 'l',

       },
       {
        //unit 1
         unit_number: '2',
         topic: 'Unit 2: Launch to the moon',
         syntax_link: '',
         introduction_text: 'Greetings adventurers, welcome to your second unit. This unit will guide you through conditionals, another kind of loop, and some new data types.  Conditionals will let us choose what will happen in our program depending on our condition.  Conditions check if a statement is true or false. For example, 5 < 10 is true.  On the other hand 10 > 5 is false.  A new kind of loop will let us repeat code in a different way than for loops. New data types will let us store more information in our programs and conditionals will let us make our code able to take multiple paths',
         lesson_journey: 'This unit will feature two lessons.  In the first lesson, we will learn about If Statements and how they can be used to make code run only if a certain condition is true. In the second lesson, we will learn how to use a different kind of loop, a while loop, that only runs while a condition is true.',
         learning_goals: 'You will be able to write a while loop. You will be able to use logical operators to create a condition for an if or if/else statement. You will use your overall Python knowledge to create a program to prepare and follow our rocket ship journey.  ',
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
      topic: "Sublesson 1: Writing Your First Program!",
      url: "https://www.youtube.com/embed/TmTMn3uRQ14?si=0eeeDXh2g8DiI0F1",
      body: "-",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //unit 1 lesson 2 sublesson 1
      unit_number: '1',
      lesson_number: '2',
      sublesson_number: '1',
      topic: "Sublesson 1: Making a Sandwhich",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      body: " -",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //unit 1 lesson 2 sublesson 2
      unit_number: '1',
      lesson_number: '2',
      sublesson_number: '2',
      topic: "Sublesson 2: Variables",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      body: " -",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //unit 1 lesson 2 sublesson 3
      unit_number: '1',
      lesson_number: '2',
      sublesson_number: '3',
      topic: "Sublesson 3: Types of Errors and Debugging",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      body: " -",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //unit 1 lesson 3 sublesson 1
      unit_number: '1',
      lesson_number: '3',
      sublesson_number: '1',
      topic: "Sublesson 1: What are Loops?",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      body: " -",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //unit 1 lesson 3 sublesson 2
      unit_number: '1',
      lesson_number: '3',
      sublesson_number: '2',
      topic: "Sublesson 2: Taking Input",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      body: " -",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //Unit 2 lesson 1 sublesson 1
      unit_number: '2',
      lesson_number: '1',
      sublesson_number: '1',
      topic: "Sublesson 1: If Statement",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      body: "- ",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //sublesson 1
      unit_number: '2',
      lesson_number: '1',
      sublesson_number: '2',
      topic: "Sublesson 2: If/else Statement",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      body: " -",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //sublesson 1
      unit_number: '2',
      lesson_number: '1',
      sublesson_number: '3',
      topic: "Sublesson 3: Conditions and Logical Operators",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      body: " -",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //sublesson 1
      unit_number: '2',
      lesson_number: '2',
      sublesson_number: '1',
      topic: "Sublesson 1: Reviewing For Loops",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      body: "-",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //sublesson 1
      unit_number: '2',
      lesson_number: '2',
      sublesson_number: '2',
      topic: "Sublesson 2: While Loops",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      body: "-",
      total_activities:'1',
      completion_rate: '0',
      complete: false,

     },
     {
      //sublesson 1
      unit_number: '2',
      lesson_number: '2',
      sublesson_number: '3',
      topic: "Sublesson 3: Data Types - Strings, Lists, Tuples, and Dictionaries",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      body: "-",
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
    number_activities: '1',
    number_sublessons: '1',
    topic: "Hello World! ",
    url: "https://www.youtube.com/embed/qvDI9JTkNAY?si=_uhk6Dy4pLpRYLee",
    trinket_url: "https://trinket.io/embed/python/b63c64672f",
    complete: false,

   },
   {
    //unit 1 lesson 2 sublesson 1 guided activity 1
    unit_number: '1',
    lesson_number: '2',
    sublesson_number: '1',
    number_activities: '0',
    number_sublessons: '3',
    topic: "Making a Sandwhich",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/f327f3ab46",
    complete: false,

   },
   {
    //unit 1 lesson 2 sublesson 2 guided activity 1
    unit_number: '1',
    lesson_number: '2',
    sublesson_number: '2',
    number_activities: '1',
    number_sublessons: '3',
    topic: "Create a program that stores the steps of making a sandwich in variables and prints them. ",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/7505b06c7d",
    complete: false,

   },
   {
    //unit 1 lesson 2 sublesson 3 guided activity 1
    unit_number: '1',
    lesson_number: '2',
    sublesson_number: '3',
    number_activities: '1',
    number_sublessons: '3',
    topic: " Debugging a Program with Many Errors",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/a833692125",
    complete: false,

   },
   {
    //unit 1 lesson 3 sublesson 1 guided activity 1
    unit_number: '1',
    lesson_number: '3',
    sublesson_number: '1',
    number_activities: '1',
    number_sublessons: '2',
    topic: "Create a for loop that counts up to 10",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/0890320ed7",
    complete: false,

   },
   {
    //unit 1 lesson 3 sublesson 2 guided activity 1
    unit_number: '1',
    lesson_number: '3',
    sublesson_number: '2',
    number_activities: '1',
    number_sublessons: '2',
    topic: "Take user input such as a name",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/718de4a8c3",
    complete: false,

   },
   {
    //unit 2 lesson 1 sublesson 1 guided activity 1
    unit_number: '2',
    lesson_number: '1',
    sublesson_number: '1',
    number_activities: '1',
    number_sublessons: '3',
    topic: "Making a program that displays whether a number is lower than 10.",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/dc961d0bec",
    complete: false,

   },
   {
    //unit 2 lesson 1 sublesson 1 guided activity 1
    unit_number: '2',
    lesson_number: '1',
    sublesson_number: '2',
    number_activities: '1',
    number_sublessons: '3',
    topic: "How to Write an If/else Statement",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/c92a1ea871",
    complete: false,

   },
   {
    //unit 2 lesson 1 sublesson 3 guided activity 1
    unit_number: '2',
    lesson_number: '1',
    sublesson_number: '3',
    number_activities: '1',
    number_sublessons: '3',
    topic: "Using Conditional Statements",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/5b627f1844",
    complete: false,

   },
   {
    //unit 2 lesson 2 sublesson 1 guided activity 1
    unit_number: '2',
    lesson_number: '2',
    sublesson_number: '1',
    number_activities: '1',
    number_sublessons: '2',
    topic: "Checking Supplies",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/b03ffabe4a",
    complete: false,

   },
   {
    //unit 2 lesson 2 sublesson 2 guided activity 1
    unit_number: '2',
    lesson_number: '2',
    sublesson_number: '2',
    number_activities: '1',
    number_sublessons: '2',
    topic: "Make a While Loop",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/2e45279eda",
    complete: false,
   },
 ]);
}
if (await SubLessonActivity.count() === 0){
  await SubLessonActivity.createEach( [
    {
      //unit 1 lesson 1 sublesson 1
      unit_number: '1',
      lesson_number: '1',
      sublesson_number: '1',
      activity_number: '1',
      topic: "Favorite Foods: Create a program that prints your favorite foods",
      instructions: "Use print statements to create a program that displays three of your favorite foods. ",
      url: "https://www.youtube.com/embed/j2hIHQ0e8os?si=u-cyHTgrAQy4hSgv",
      trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
      complete: false,
      attempts: '0',
      timeSpent: '0',
  
     },
    {
    //unit 1 lesson 2 sublesson 2
    unit_number: '1',
    lesson_number: '2',
    sublesson_number: '2',
    activity_number: '1',
    topic: "Getting Ready For School: Create a program that prints the steps of getting ready for school",
    instructions: "Use variables and print statements to create a program that displays the steps of getting ready for school.",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,
    attempts: '0',
    timeSpent: '0',

   },
   {
    //unit 1 lesson 2 sublesson 3 activity 2
    unit_number: '1',
    lesson_number: '2',
    sublesson_number: '3',
    activity_number: '1',
    topic: " Fix the errors in this rocket launching program",
    instructions: "Debug the following rocket launching program using the strategies discussed in the previous video.",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,
    attempts: '0',
    timeSpent: '0',

   },
   {
    //unit 1 lesson 3 sublesson 1 activity 2
    unit_number: '1',
    lesson_number: '3',
    sublesson_number: '1',
    activity_number: '1',
    topic: " Multiples",
    instructions: "Make a for loop that prints multiples of two for five loops. Multiples of two are: 2, 4, 6, 8, etc",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,
    attempts: '0',
    timeSpent: '0',

   },
   {
    //unit 1 lesson 3 sublesson 2 activity 2
    unit_number: '1',
    lesson_number: '3',
    sublesson_number: '2',
    activity_number: '1',
    topic: "Planning Your Journey",
    instructions: "Ask for five items the user would take on a rocket ship journey. Use a for loop to display the items.",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,
    attempts: '0',
    timeSpent: '0',

   },
   {
    //unit 2 lesson 1 sublesson 1 activity 1
    unit_number: '2',
    lesson_number: '1',
    sublesson_number: '1',
    activity_number: '1',
    topic: " Launch Countdown",
    instructions: "Create a progam that checks the coordinates of a rocket ship. If the x coordinate is 100 and the y coordinate is 100, display that the rocket ship is ready to launch and write a launch countdown using a for loop.",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,
    attempts: '0',
    timeSpent: '0',

   },
   {
    //unit 2 lesson 1 sublesson 2 activity 1
    unit_number: '2',
    lesson_number: '1',
    sublesson_number: '2',
    activity_number: '1',
    topic: " Checking Distance",
    instructions: "Ask the user for the rocketship's current distance from the moon. If the moon is within 200 miles, tell the user to initiate the landing sequence.",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,
    attempts: '0',
    timeSpent: '0',

   },
   {
    //unit 2 lesson 1 sublesson 3 activity 1
    unit_number: '2',
    lesson_number: '1',
    sublesson_number: '3',
    activity_number: '1',
    topic: " Checking Distance and Fuel Levels",
    instructions: "Ask the user for the rocketship's distance from the moon and the rocketship's fuel levels. If the rocketship is within 200 miles of the moon and the fuel levels are greater than 50%, tell the user that we can initiate the landing sequence. If the fuel levels are less than 50%, tell the user that we must turn around due to lack of fuel. ",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,
    attempts: '0',
    timeSpent: '0',

   },
   {
    //unit 2 lesson 2 sublesson 1 activity 1
    unit_number: '2',
    lesson_number: '2',
    sublesson_number: '1',
    activity_number: '1',
    topic: " Calculating Fuel",
    instructions: "Ask for the weight of each of the items aboard your rocketship. Calculate the total weight of the items aboard your rocketship. For every 10 pounds of items aboard the rocketship, we will need 0.5 gallons of fuel. Display the total fuel needed for our journey.",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,
    attempts: '0',
    timeSpent: '0',

   },
   {
    //unit 2 lesson 2 sublesson 2 activity 1
    unit_number: '2',
    lesson_number: '2',
    sublesson_number: '2',
    activity_number: '1',
    topic: " Make Another While Loop",
    instructions: "Create a while loop that stops when you reach 10.",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
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
    number_sublessons: '1',
    number_activities: '1',
    number_lessons: '3',
    topic: "Review: Favorite Foods",
    url: "https://www.youtube.com/embed/1kQBSamWJBk?si=CoaTemJjTc6upqbw",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,

   },
   {
    //unit 1 lesson 2 sublesson 2 activity 1
    unit_number: '1',
    lesson_number: '2',
    sublesson_number: '2',
    activity_number: '1',
    number_sublessons: '3',
    number_activities: '1',
    number_lessons: '3',
    topic: "Review: Getting Ready For School",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,

   },

   {
    //unit 1 lesson 2 sublesson 3 activity 1
    unit_number: '1',
    lesson_number: '2',
    sublesson_number: '3',
    activity_number: '1',
    number_sublessons: '3',
    number_activities: '1',
    number_lessons: '3',
    topic: "Review: Fix the Errors",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,

   },
   {
    //unit 1 lesson 3 sublesson 1 activity 2
    unit_number: '1',
    lesson_number: '3',
    sublesson_number: '1',
    activity_number: '1',
    number_sublessons: '2',
    number_activities: '1',
    number_lessons: '3',
    topic: "Review: Multiples",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,

   },
   {
    //unit 1 lesson 3 sublesson 2 activity 2
    unit_number: '1',
    lesson_number: '3',
    sublesson_number: '2',
    activity_number: '1',
    number_sublessons: '2',
    number_activities: '1',
    number_lessons: '3',
    topic: "Review: Planning Your Journey",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,

   },
   {
    //unit 2 lesson 1 sublesson 1 activity 1
    unit_number: '2',
    lesson_number: '1',
    sublesson_number: '1',
    activity_number: '1',
    number_sublessons: '3',
    number_activities: '1',
    number_lessons: '2',
    topic: "Review: Launch Countdown",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,

   },
   {
    //unit 2 lesson 1 sublesson 2 activity 1
    unit_number: '2',
    lesson_number: '1',
    sublesson_number: '2',
    activity_number: '1',
    number_sublessons: '3',
    number_activities: '1',
    number_lessons: '2',
    topic: "Review: Checking Distance",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,

   },
   {
    //unit 2 lesson 1 sublesson 3 activity 1
    unit_number: '2',
    lesson_number: '1',
    sublesson_number: '3',
    activity_number: '1',
    number_sublessons: '3',
    number_activities: '1',
    number_lessons: '2',
    topic: "Review: Checking Distance and Fuel Level",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,

   },
   {
    //unit 2 lesson 2 sublesson 1 activity 1
    unit_number: '2',
    lesson_number: '2',
    sublesson_number: '1',
    activity_number: '1',
    number_sublessons: '2',
    number_activities: '1',
    number_lessons: '2',
    topic: "Review: Calculating Fuel",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,

   },
   {
    //unit 2 lesson 2 sublesson 2 activity 1
    unit_number: '2',
    lesson_number: '2',
    sublesson_number: '2',
    activity_number: '1',
    number_sublessons: '2',
    number_activities: '1',
    number_lessons: '2',
    topic: "Review: Making Another While Loop",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
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
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,
   },
   {
    //unit 2
    unit_number: '2',
    topic: "Unit 2 Review",
    unit_info: "In this unit you learned some of the basics of Python. You created your first program, your first variables, and your first for loop. Visit any of the following links/activities to review for the quiz. A short review video is provided below as well.",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
    complete: false,
   },
 
 ]);
}
if (await UnitQuiz.count() === 0){
  await UnitQuiz.createEach( [
   {
    //unit 1
    unit_number: '1',
    topic: 'Unit 1 Quiz',
    instructions : 'Answer each question to the best of your ability. Type your answer in the given textbox or select one of the multiple choice options',
    q1: '1. Which of the following shows how you create a variable in Python? ',
    q1_ans1: 'num1 = 10',
    q1_ans2: 'for i in range(10):',
    q1_ans3: 'print("Hello")',
    q1_ans4: 'print("Hello")',
    q1_correct: 'num1 = 10',
    q2: '2. Which of the following variables uses proper naming conventions? ',
    q2_ans1: 'number2',
    q2_ans2: '100',
    q2_ans3: '2number',
    q2_ans4: 'Print',
    q2_correct: 'number2',
    q3: '3. Which of the following show the beginning of a for loop? ',
    q3_ans1: 'var1 = 2014',
    q3_ans2: 'if(var1 == 2013):',
    q3_ans3: 'for i in range(10):',
    q3_ans4: 'print("space")',
    q3_correct: 'for i in range(10):',
    q4: '4. Which of the following variables hold a string?',
    q4_ans1: 'var1 = 10',
    q4_ans2: 'var1 = "SpacePython"',
    q4_ans3: 'var1 = 1.3',
    q4_ans4: 'var1 = True ',
    q4_correct: 'var1 = "SpacePython"',
    q5: '5. Which of the following variables hold an integer (int)?',
    q5_ans1: 'var1 = 10',
    q5_ans2: 'var1 = True',
    q5_ans3: 'var1 = 1.3',
    q5_ans4: 'var1 = "SpacePython"',
    q5_correct: 'var1 = 10',
    correctness : '0',
    complete: false,
   },
   {
    //unit 1
    unit_number: '2',
    topic: 'Unit 2 Quiz',
    instructions : 'Answer each question to the best of your ability. Type your answer in the given textbox or select one of the multiple choice options',
    q1: '1. Which of the following shows the beginning of an if statement?',
    q1_ans1: 'if(var1 == 10):',
    q1_ans2: 'for i in range(10):',
    q1_ans3: 'var1 = 10',
    q1_ans4: '10',
    q1_correct: 'if(var1 == 10):',
    q2: '2. Which of the following shows the beginning of a while loop?',
    q2_ans1: 'if(var1 = 10):',
    q2_ans2: 'for i in range(10):',
    q2_ans3: 'while(i < 10):',
    q2_ans4: 'var1 = 10',
    q2_correct: 'while(i < 10):',
    q3: '3. Which of the following conditions will be True? ',
    q3_ans1: 'if(1 > 10):',
    q3_ans2: 'if(5 < 10):',
    q3_ans3: 'if("fun" == "ten"):',
    q3_ans4: 'if(5 - 10):',
    q3_correct: 'if(5 < 10):',
    q4: '4. Which of the following conditions will be False?',
    q4_ans1: 'if(10 > 5):',
    q4_ans2: 'if(1 > 10):',
    q4_ans3: 'if("fun" == "fun"):',
    q4_ans4: 'if(1 == 10):',
    q4_correct: 'if(1 > 10):',
    q5: '5. Which of the following conditions includes a logical operator? ',
    q5_ans1: 'if(var1 == True):',
    q5_ans2: 'if(10 < 20):',
    q5_ans3: 'if(20 < 30 and 30 > 15):',
    q5_ans4: 'if(var1 == "string"):',
    q5_correct: 'if(20 < 30 and 30 > 15):',
    correctness : '0',
    complete: false,
   },
 
 ]);
}
if (await UnitChallenge.count() === 0){
  await UnitChallenge.createEach( [
   {
    //unit 1
    unit_number: '1',
    total_units: '2',
    topic: 'Unit 1 Challenge: Creating a Character Counter',
    instructions : 'Create a short python program that asks the user for their name and counts the number of letters in their name. ',
    complete: false,
    attempts: '0',
    url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
   },
   {
    //unit 2
    unit_number: '2',
    total_units: '2',
    topic: 'Unit 2 Challenge: ',
    instructions : 'Complete the following challenge to the best of your ability. Create a game using loops, conditionals, and variables.',
    complete: false,
    attempts: '0',
    url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    trinket_url: "https://trinket.io/embed/python/e8b4e7e5f9",
   },
 
 ]);
}
  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();
};
 
