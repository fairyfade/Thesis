

/*CurriculumController.js

*/
module.exports = {
/* Brainstorming useful functions
   1. Need to fetch Unit information as well as update it
   2. Need to fetch Lesson information as well as update it
   3. Need to fetch Sublesson information as well as update it
   4. Need to fecth different parts of the sublesson as well as update it (ie actvity, vid, guided activity, written activity)
   5. Need to fetch Unit quiz information as well as update it
   6. Need to fecth unit challenge information as well as update it
   7. Need to fetch unit review information as well as update it
*/
    /*
    Create a new Unit.
    @param {string} studentID
    @param {string} unit_number
    @param {string} topic
    @param {string} syntax_link
    @param {string} introduction_text
    @param {string} lesson_journey
    @param {string} learning_goals
    @param {string} total_num_lessons
    @param {string} completion_rate
    @param {boolean} complete
  */
    createUnit: async function(req, res) {
        try {
          const studentId = req.session.studentId;
          const unit_number = req.param('unit_number');
          const topic = req.param('topic');
          const syntax_link = req.param('syntax_link');
          const introduction_text = req.param('introduction_text');
          const lesson_journey = req.param('lesson_journey');
          const learning_goals = req.param('learning_goals');
          const total_num_lessons = req.param('total_num_lessons');
          const completion_rate = req.param('completion_rate');
          const complete = req.param('complete');
          if (!req.session.userId) { // Check if student is logged in
            return res.send({
              error: 'Student User not logged in'
            });
          }
          if (!unit_number || !topic || !syntax_link || !introduction_text || !lesson_journey || !learning_goals || !total_num_lessons || !completion_rate || !complete) { // Missing required params
            return res.send({
              error: 'All fields required'
            });
          }
          if (unit_number === '' || topic === '' || syntax_link === '' || introduction_text === '' || lesson_journey === ''|| learning_goals === '' || total_num_lessons === '' || completion_rate === '' || complete === '') { // Empty params
            return res.send({
              error: 'All fields required'
            });
          }
          const existingUnit = await Unit.find({ // Check if Unit already exists
            or: [{unit_number: unit_number}]
          });
          if (existingUnit && existingUnit.length > 0) { // Return error if Unit already exists
            return res.send({
              error: 'Unit already exists'
            });
          }
         // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
          await Unit.create({ // Create unit
            studentID: studentId,
            unit_number: unit_number,
            topic: topic,
            syntax_link: syntax_link,
            introduction_text: introduction_text,
            lesson_journey: lesson_journey,
            learning_goals: learning_goals,
            total_num_lessons: total_num_lessons,
            completion_rate: completion_rate,
            complete: complete,
        });
        return res.send({ // Return success
          success: true
        });
      } catch (error) {
        console.log(error);
      }
    },
  /*
    Get a student's unit information.
    @param {string} studentID
    @param {string} unit_number
    @param {string} topic
    @param {string} syntax_link
    @param {string} introduction_text
    @param {string} lesson_journey
    @param {string} learning_goals
    @param {string} total_num_lessons
    @param {string} completion_rate
    @param {boolean} complete
  */
  getUnits: async function(req, res) {
    try {
      const unit_number = req.param('unit_number');
      if (!unit_number) { // Check if unit Number is valid
        return res.send({
          error: 'Invalid Unit Number'
        });
      }
      const unitInfo = await Unit.find({
        where: {unit_number: unit_number},
      });
      return res.view('pages/child_accounts/curriculum/unit_intro', {
        unitInfo: JSON.stringify(unitInfo[0])
      }
      );
    } catch (error) {
      console.log(error);
    }
  },
        /*
    Create a new Lesson.
    @param {string} userID
    @param {string} unit_number
    @param {string} lesson_number
    @param {string} topic
    @param {string} lesson_intro
    @param {string} lesson_goal
    @param {string} lesson_plan
    @param {string} total_num_sub_lessons
    @param {string} completion_rate
    @param {boolean} complete
  */
    createLesson: async function(req, res) {
      try {
        const userId = req.session.studentId;
        const unit_number = req.param('unit_number');
        const lesson_number = req.param('lesson_number');
        const topic = req.param('topic');
        const introduction = req.param('introduction');
        const lesson_goal = req.param('lesson_goal');
       // const lesson_plan = req.param('lesson_plan');
        const newData = req.param('newData');
        const total_num_sub_lessons = req.param('total_num_sub_lessons');
        const completion_rate = req.param('completion_rate');
        const complete = req.param('complete');
        
        if (!req.session.userId) { // Check if student is logged in
          return res.send({
            error: 'Student User not logged in'
          });
        }
        if (!unit_number || !lesson_number || !introduction || !newData || !lesson_goal || !topic || !total_num_sub_lessons || !completion_rate || !complete) { // Missing required params
          return res.send({
            error: 'All fields required'
          });
        }
        if (unit_number === '' || lesson_number === '' || topic === ''  || newData === '' || introduction === '' || lesson_goal === '' || total_num_sub_lessons === '' || completion_rate === '' || complete === '') { // Empty params
          return res.send({
            error: 'All fields required'
          });
        }
        const existingLesson = await Lesson.find({ // Check if Lesson already exists
          or: [{lesson_number: lesson_number}]
        });
        if (existingLesson && existingLesson.length > 0) { // Return error if Lesson already exists
          return res.send({
            error: 'Lesson already exists'
          });
        }
       // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
        await Lesson.create({ // Create lesson
          userID: userId,
          unit_number: unit_number,
          lesson_number: lesson_number,
          topic: topic,
          introduction: introduction,
          lesson_goal: lesson_goal,
          newData: newData,
          total_num_sub_lessons: total_num_sub_lessons,
          completion_rate: completion_rate,
          complete: complete,
      });
      return res.send({ // Return success
        success: true
      });
    } catch (error) {
      console.log(error);
    }
  },
    /*
    Get a student's lesson information
    @param {string} userID
    @param {string} unit_number
    @param {string} lesson_number
    @param {string} topic
    @param {string} total_num_sub_lessons
    @param {string} completion_rate
    @param {boolean} complete
  */
    getLessons: async function(req, res) {
        try {
          const unit_number = req.param('unit_number');
          const lesson_number = req.param('lesson_number');
          if (!lesson_number) { // Check if lesson Number is valid
            return res.send({
              error: 'Invalid Lesson Number'
            });
          }
          const lessonInfo = await Lesson.find({
            where: {unit_number, lesson_number: unit_number, lesson_number},
          });
          return res.view('pages/child_accounts/curriculum/lesson_intro', {
            lessonInfo: JSON.stringify(lessonInfo[0])
          }
          );
        } catch (error) {
          console.log(error);
        }
    },
       /*
    Create a new SubLesson.
    @param {string} userID
    @param {string} lesson_number
    @param {string} sublesson_number
    @param {string} topic
    @param {string} total_activities
    @param {string} completion_rate
    @param {boolean} complete
  */
    createSubLesson: async function(req, res) {
      try {
        const userId = req.session.userId;
        const unit_number = req.param('unit_number');
        const lesson_number = req.param('lesson_number');
        const sublesson_number = req.param('sublesson_number');
        const topic = req.param('topic');
        const url = req.param('url');
        const body = req.param('body');
        const total_activities = req.param('total_num_activities');
        const completion_rate = req.param('completion_rate');
        const complete = req.param('complete');
        if (!req.session.userId) { // Check if student is logged in
          return res.send({
            error: 'Student User not logged in'
          });
        }
        if (!unit_number || !unit_number || !lesson_number || !sublesson_number || !topic || !url || !body || !total_activities || !completion_rate || !complete) { // Missing required params
          return res.send({
            error: 'All fields required'
          });
        }
        if (unit_number === '' || unit_number ==='' || lesson_number === '' || sublesson_number === '' || topic === '' || url === '' || body === '' || total_activities === '' || completion_rate === '' || complete === '') { // Empty params
          return res.send({
            error: 'All fields required'
          });
        }
        const existingSubLesson = await SubLesson.find({ // Check if sublesson already exists
          or: [{sublesson_number: sublesson_number}]
        });
        if (existingSubLesson && existingSubLesson.length > 0) { // Return error if sublesson already exists
          return res.send({
            error: 'Sublesson already exists'
          });
        }
       // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
        await SubLesson.create({ // Create sublesson
          userID: userId,
          unit_number: unit_number,
          lesson_number: lesson_number,
          sublesson_number: sublesson_number,
          topic: topic,
          url: url,
          body: body,
          total_activities: total_activities,
          completion_rate: completion_rate,
          complete: complete,
      });
      return res.send({ // Return success
        success: true
      });
    } catch (error) {
      console.log(error);
    }
  },
     /*
    Get a student's sublesson information
    @param {string} userID
    @param {string} lesson_number
    @param {string} sublesson_number
    @param {string} topic
    @param {string} total_activities
    @param {string} completion_rate
    @param {boolean} complete
  */
    getSublessons: async function(req, res) {
      try {
        const unit_number = req.param('unit_number');
        const lesson_number = req.param('lesson_number');
        const sublesson_number = req.param('sublesson_number');
        if (!sublesson_number) { // Check if unit Number is valid
          return res.send({
            error: 'Invalid Unit Number'
          });
        }
        const sublessonInfo = await SubLesson.find({
          where: {unit_number, lesson_number, sublesson_number: unit_number, lesson_number, sublesson_number},
        });
        return res.view('pages/child_accounts/curriculum/sublesson_vid', {
          sublessonInfo: JSON.stringify(sublessonInfo[0])
        }
        );
      } catch (error) {
        console.log(error);
      }
    },
       /*
    Create a new SubLesson Activity.
    @param {string} userID
    @param {string} sublesson_number
    @param {string} activity_number
    @param {string} topic
    @param {string} url
    @param {string} attemps
    @param {string} timeSpent
    @param {boolean} complete

  */
    createSubLessonActivity: async function(req, res) {
      try {
        const userId = req.session.userId;
        const unit_number = req.param('unit_number');
        const lesson_number = req.param('lesson_number');
        const sublesson_number = req.param('sublesson_number');
        const activity_number = req.param('activity_number');
        const topic = req.param('topic');
        const url = req.param('url');
        const attempts = req.param('attempts');
        const timeSpent = req.param('timeSpent');
        const complete = req.param('complete');
        if (!req.session.userId) { // Check if student is logged in
          return res.send({
            error: 'Student User not logged in'
          });
        }
        if (!unit_number ||!lesson_number || !sublesson_number || !activity_number || !topic || !url || !attempts || !timeSpent || !complete) { // Missing required params
          return res.send({
            error: 'All fields required'
          });
        }
        if (unit_number === '' || lesson_number === '' || sublesson_number === '' || activity_number === '' || topic === '' || url === '' || attempts === '' || timeSpent === '' || complete === '') { // Empty params
          return res.send({
            error: 'All fields required'
          });
        }
        const existingActivity = await SubLessonActivity.find({ // Check if sublesson activity already exists
          or: [{activity_number: activity_number}]
        });
        if (existingActivity && existingActivity.length > 0) { // Return error if sublesson activity already exists
          return res.send({
            error: 'Sublesson already exists'
          });
        }
       // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
        await SubLessonActivity.create({ // Create sublesson activity
          userID: userId,
          sublesson_number: sublesson_number,
          activity_number: activity_number,
          topic: topic,
          url : url,
          attempts: attempts,
          timeSpent: timeSpent,
          complete: complete,
      });
      return res.send({ // Return success
        success: true
      });
    } catch (error) {
      console.log(error);
    }
  },
       /*
    Get a student's sublesson activity information
    @param {string} userID
    @param {string} sublesson_number
    @param {string} activity_number
    @param {string} topic
    @param {string} url
    @param {string} attemps
    @param {string} timeSpent
    @param {boolean} complete
  */
    getActivity: async function(req, res) {
      try {
        const unit_number = req.param('unit_number');
        const lesson_number = req.param('lesson_number');
        const sublesson_number = req.param('sublesson_number');
        const activity_number = req.param('activity_number');
        if (!activity_number) { // Check if unit Number is valid
          return res.send({
            error: 'Invalid Unit Number'
          });
        }
        const activityInfo = await SubLessonActivity.find({
          where: {unit_number, lesson_number, sublesson_number, activity_number: unit_number, lesson_number, sublesson_number, activity_number},
        });
        return res.view('pages/child_accounts/curriculum/sublesson_activity', {
          activityInfo: JSON.stringify(activityInfo[0])
        }
        );
      } catch (error) {
        console.log(error);
      }
    },
       /*
    Create a new SubLesson Guided Activity.
    @param {string} userID
    @param {string} sublesson_number
    @param {string} topic
    @param {string} url
    @param {boolean} complete

  */
    createSubLessonGuided: async function(req, res) {
      try {
        const userId = req.session.userId;
        const unit_number = req.param('unit_number');
        const lesson_number = req.param('lesson_number');
        const sublesson_number = req.param('sublesson_number');
        const topic = req.param('topic');
        const url = req.param('url');
        const complete = req.param('complete');
        if (!req.session.userId) { // Check if student is logged in
          return res.send({
            error: 'Student User not logged in'
          });
        }
        if (!unit_number || !lesson_number || !sublesson_number || !topic || !url || !complete) { // Missing required params
          return res.send({
            error: 'All fields required'
          });
        }
        if (unit_number === '' || lesson_number === '' || sublesson_number === '' || topic === '' || url === '' || complete === '') { // Empty params
          return res.send({
            error: 'All fields required'
          });
        }
        const existingGuided = await SubLessonGuidedActivity.find({ // Check if sublesson activity guided already exists
          or: [{sublesson_number: sublesson_number}]
        });
        if (existingGuided && existingGuided.length > 0) { // Return error if sublesson guided activity already exists
          return res.send({
            error: 'Sublesson Guided Activity already exists'
          });
        }
       // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
        await SubLessonGuidedActivity.create({ // Create sublesson activity
          userID: userId,
          unit_number: unit_number,
          lesson_number, lesson_number,
          sublesson_number: sublesson_number,
          topic: topic,
          url : url,
          complete: complete,
      });
      return res.send({ // Return success
        success: true
      });
    } catch (error) {
      console.log(error);
    }
  },
  /*
    Get a student's sublesson guided activity information
    @param {string} userID
    @param {string} sublesson_number
    @param {string} topic
    @param {string} url
    @param {boolean} complete
  */
    getGuidedActivity: async function(req, res) {
      try {
        const unit_number = req.param('unit_number');
        const lesson_number = req.param('lesson_number');
        const sublesson_number = req.param('sublesson_number');
        if (!sublesson_number) { // Check if unit Number is valid
          return res.send({
            error: 'Invalid Unit Number'
          });
        }
        const guidedInfo = await SubLessonGuidedActivity.find({
          where: {unit_number, lesson_number, sublesson_number: unit_number, lesson_number, sublesson_number},
        });
        return res.view('pages/child_accounts/curriculum/guided_activity', {
          guidedInfo: JSON.stringify(guidedInfo[0])
        }
        );
      } catch (error) {
        console.log(error);
      }
    },

           /*
    Create a new Activity Answer.
    @param {string} userID
    @param {string} unit_number
    @param {string} lesson_number
    @param {string} sublesson_number
    @param {string} activity_number
    @param {string} topic
    @param {string} url
    @param {boolean} complete

  */
    createAnswer: async function(req, res) {
      try {
        const userId = req.session.userId;
        const unit_number = req.param('unit_number');
        const lesson_number = req.param('lesson_number');
        const sublesson_number = req.param('sublesson_number');
        const activity_number = req.param('activity_number');
        const topic = req.param('topic');
        const url = req.param('url');
        const complete = req.param('complete');
        if (!req.session.userId) { // Check if student is logged in
          return res.send({
            error: 'Student User not logged in'
          });
        }
        if (!unit_number || !lesson_number || !sublesson_number || !activity_number || !topic || !url || !complete) { // Missing required params
          return res.send({
            error: 'All fields required'
          });
        }
        if (unit_number === '' || lesson_number === '' || sublesson_number === '' || activity_number === '' || topic === '' || url === '' || complete === '') { // Empty params
          return res.send({
            error: 'All fields required'
          });
        }
        const existingActivity = await ActivityAnswer.find({ // Check if sublesson activity guided already exists
          or: [{activity_number: activity_number}]
        });
        if (existingActivity && existingActivity.length > 0) { // Return error if sublesson guided activity already exists
          return res.send({
            error: 'Sublesson Guided Activity already exists'
          });
        }
       // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
        await ActivityAnswer.create({ // Create sublesson activity
          userID: userId,
          unit_number: unit_number,
          lesson_number, lesson_number,
          sublesson_number: sublesson_number,
          activity_number: activity_number,
          topic: topic,
          url : url,
          complete: complete,
      });
      return res.send({ // Return success
        success: true
      });
    } catch (error) {
      console.log(error);
    }
  },
  getAnswer: async function(req, res) {
    try {
      const unit_number = req.param('unit_number');
      const lesson_number = req.param('lesson_number');
      const sublesson_number = req.param('sublesson_number');
      const activity_number = req.param('activity_number');
      if (!activity_number) { // Check if unit Number is valid
        return res.send({
          error: 'Invalid Unit Number'
        });
      }
      const activityInfo = await ActivityAnswer.find({
        where: {unit_number, lesson_number, sublesson_number, activity_number: unit_number, lesson_number, sublesson_number, activity_number},
      });
      return res.view('pages/child_accounts/curriculum/activity_answer', {
        activityInfo: JSON.stringify(activityInfo[0])
      }
      );
    } catch (error) {
      console.log(error);
    }
  },
    /*
    Create a new Unit challenge.
    @param {string} userID
    @param {string} unit_number
    @param {string} topic
    @param {string} attempts
    @param {string} url
    @param {boolean} complete

  */
    createUnitChallenge: async function(req, res) {
      try {
        const userId = req.session.userId;
        const unit_number = req.param('unit_number');
        const topic = req.param('topic');
        const attempts = req.param('attempts');
        const url = req.param('url')
        const complete = req.param('complete');
        if (!req.session.userId) { // Check if student is logged in
          return res.send({
            error: 'Student User not logged in'
          });
        }
        if (!unit_number || !topic || !attempts || !url || !complete) { // Missing required params
          return res.send({
            error: 'All fields required'
          });
        }
        if (unit_number === '' || topic === '' || attempts === '' || url === '' || complete === '') { // Empty params
          return res.send({
            error: 'All fields required'
          });
        }
        const existingChallenge = await UnitChallenge.find({ // Check if unit challenge written already exists
          or: [{unit_number: unit_number}]
        });
        if (existingChallenge && existingChallenge.length > 0) { // Return error if unit challenge already exists
          return res.send({
            error: 'Unit challenge already exists'
          });
        }
       // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
        await UnitChallenge.create({ // Create unit challenge 
          userID: userId,
          unit_number: unit_number,
          topic: topic,
          attempts : attempts,
          url : url,
          complete: complete,
      });
      return res.send({ // Return success
        success: true
      });
    } catch (error) {
      console.log(error);
    }
  },
       /*
    Get a student's unit challenge information
    @param {string} userID
    @param {string} unit_number
    @param {string} topic
    @param {string} attempts
    @param {string} url
    @param {boolean} complete
  */
    getUnitChallenge: async function(req, res) {
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
        const foundChallenge = await UnitChallenge.find({userID: req.session.userId}).populate('userID');
       // const foundStudent = await Student.find({id: accountId});
        if (!foundChallenge || foundChallenge.length === 0) { // Unit not found
          return res.view('pages/homepage', {
            error: 'Unit Challenge not found'
          });
        }
        const challenge = foundChallenge[0];
        const account = { // Return account info
          id: challenge.id,
          unit_number: challenge.unit_number,
          topic: challenge.topic,
          attempts: challenge.attempts,
          url: challenge.url,
          isSelfEdit: isSelfEdit
        };
        return res.view('pages/profile', { /*TODO need to change this link to the unit info page or something */
          account: JSON.stringify(account)
        });
      } catch (err) { // Error getting account
        return res.send({
          error: 'Error getting account'
        });
      }
    },
      /*
    Create a new Unit quiz
    @param {string} userID
    @param {string} unit_number
    @param {string} topic
    @param {string} quiz
    @param {string} correctness
    @param {boolean} complete

  */
    createUnitQuiz: async function(req, res) {
      try {
        const userId = req.session.userId;
        const unit_number = req.param('unit_number');
        const topic = req.param('topic');
        const instructions = req.param('instructions');
        const q1 = req.param('q1');
        const q1_ans = req.param('q1_ans');
        const q2 = req.param('q2');
        const q2_ans = req.param('q2_ans');
        const q3 = req.param('q3');
        const q3_ans = req.param('q3_ans');
        const q4 = req.param('q4');
        const q4_ans = req.param('q4_ans');
        const q5 = req.param('q5');
        const q5_ans = req.param('q5_ans');
        const correctness = req.param('correctness')
        const complete = req.param('complete');
        if (!req.session.userId) { // Check if student is logged in
          return res.send({
            error: 'Student User not logged in'
          });
        }
        if (!unit_number || !topic || !instructions || !q1 || !q1_ans || !q2 || !q2_ans || !q3 || !q3_ans || !q4 || !q4_ans || !q5 || !q5_ans || !correctness || !complete) { // Missing required params
          return res.send({
            error: 'All fields required'
          });
        }
        if (unit_number === '' || topic === '' || instructions === '' || q1 === '' || q1_ans === '' ||q2 === '' || q2_ans === '' || q3 === '' ||  q3_ans === '' || q4 === '' || q4_ans === ''|| q5 === '' || q5_ans === '' ||correctness === '' || complete === '') { // Empty params
          return res.send({
            error: 'All fields required'
          });
        }
        const existingQuiz = await UnitQuiz.find({ // Check if unit quiz already exists
          or: [{unit_number: unit_number}]
        });
        if (existingQuiz && existingQuiz.length > 0) { // Return error if unit quiz already exists
          return res.send({
            error: 'Unit quiz already exists'
          });
        }
       // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
        await UnitQuiz.create({ // Create unit quiz
          userID: userId,
          unit_number: unit_number,
          topic: topic,
          instructions : instructions,
          q1: q1,
          q1_ans: q1_ans,
          q2: q2,
          q2_ans: q2_ans,
          q3: q3,
          q3_ans: q3_ans,
          q4: q4,
          q4_ans: q4_ans,
          q5: q5,
          q5_ans: q5_ans,
          correctness : correctness,
          complete: complete,
      });
      return res.send({ // Return success
        success: true
      });
    } catch (error) {
      console.log(error);
    }
  },
    /*
    Get a student's unit quiz information
    @param {string} userID
    @param {string} unit_number
    @param {string} topic
    @param {string} quiz
    @param {string} correctness
    @param {boolean} complete
  */
    getUnitQuiz: async function(req, res) {
      try {
        const unit_number = req.param('unit_number');
        if (!unit_number) { // Check if unit Number is valid
          return res.send({
            error: 'Invalid Unit Number'
          });
        }
        const unitInfo = await UnitQuiz.find({
          where: {unit_number: unit_number},
        });
        return res.view('pages/child_accounts/curriculum/unit_quiz', {
          unitInfo: JSON.stringify(unitInfo[0])
        }
        );
      } catch (error) {
        console.log(error);
      }
    },

        /*
    Create a new Unit Review
    @param {string} userID
    @param {string} unit_number
    @param {string} topic
    @param {string} unit_info
    @param {boolean} complete

  */
    createUnitReview: async function(req, res) {
      try {
        const userId = req.session.userId;
        const unit_number = req.param('unit_number');
        const topic = req.param('topic');
        const unit_info = req.param('unit_info');
        const correctness = req.param('correctness')
        const complete = req.param('complete');
        if (!req.session.userId) { // Check if student is logged in
          return res.send({
            error: 'Student User not logged in'
          });
        }
        if (!unit_number || !topic || !unit_info || !correctness || !complete) { // Missing required params
          return res.send({
            error: 'All fields required'
          });
        }
        if (unit_number === '' || topic === '' || unit_info === '' || correctness === '' || complete === '') { // Empty params
          return res.send({
            error: 'All fields required'
          });
        }
        const existingReview = await UnitReview.find({ // Check if unit review already exists
          or: [{unit_number: unit_number}]
        });
        if (existingReview && existingReview.length > 0) { // Return error if unit review already exists
          return res.send({
            error: 'Unit review already exists'
          });
        }
       // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
        await UnitReview.create({ // Create unit review
          userID: userId,
          unit_number: unit_number,
          topic: topic,
          unit_info : unit_info,
          correctness : correctness,
          complete: complete,
      });
      return res.send({ // Return success
        success: true
      });
    } catch (error) {
      console.log(error);
    }
  },
      /*
    Get a student's unit review information
    @param {string} userID
    @param {string} unit_number
    @param {string} topic
    @param {string} unit_info
    @param {boolean} complete
  */
    getUnitReview: async function(req, res) {
      try {
        const unit_number = req.param('unit_number');
        if (!unit_number) { // Check if unit Number is valid
          return res.send({
            error: 'Invalid Unit Number'
          });
        }
        const unitInfo = await UnitReview.find({
          where: {unit_number: unit_number},
        });
        return res.view('pages/child_accounts/curriculum/unit_review', {
          unitInfo: JSON.stringify(unitInfo[0])
        }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };
