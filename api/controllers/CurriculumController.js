const SubLessonActivity = require("../models/SubLessonActivity");

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
    @param {string} userID
    @param {string} unit_number
    @param {string} topic
    @param {string} total_num_lessons
    @param {string} completion_rate
    @param {boolean} complete
  */
    createUnit: async function(req, res) {
        try {
          const studentId = req.session.studentId;
          const unit_number = req.param('unit_number');
          const topic = req.param('topic');
          const total_num_lessons = req.param('total_num_lessons');
          const completion_rate = req.param('completion_rate');
          const complete = req.param('complete');
          if (!req.session.userId) { // Check if student is logged in
            return res.send({
              error: 'Student User not logged in'
            });
          }
          if (!unit_number || !topic || !total_num_lessons || !completion_rate || !complete) { // Missing required params
            return res.send({
              error: 'All fields required'
            });
          }
          if (unit_number === '' || topic === '' || total_num_lessons === '' || completion_rate === '' || complete === '') { // Empty params
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
    @param {string} studentId
    @param {string} unit_number
    @param {string} topic
    @param {string} total_num_lessons
    @param {string} completion_rate
    @param {boolean} complete
  */
  getUnits: async function(req, res) {
    try {
      const unit_number = req.param('unit_number');
      if (!unit_number) { // Check if plant ID is valid
        return res.send({
          error: 'Invalid plant ID'
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
    @param {string} total_num_sub_lessons
    @param {string} completion_rate
    @param {boolean} complete
  */
    createLesson: async function(req, res) {
      try {
        const userId = req.session.userId;
        const unit_number = req.param('unit_number');
        const lesson_number = req.param('lesson_number');
        const topic = req.param('topic');
        const total_num_sub_lessons = req.param('total_num_sub_lessons');
        const completion_rate = req.param('completion_rate');
        const complete = req.param('complete');
        if (!req.session.userId) { // Check if student is logged in
          return res.send({
            error: 'Student User not logged in'
          });
        }
        if (!unit_number || !lesson_number || !topic || !total_num_sub_lessons || !completion_rate || !complete) { // Missing required params
          return res.send({
            error: 'All fields required'
          });
        }
        if (unit_number === '' || lesson_number === '' || topic === '' || total_num_sub_lessons === '' || completion_rate === '' || complete === '') { // Empty params
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
        const foundLesson = await Lesson.find({userID: req.session.userId}).populate('userID');
       // const foundStudent = await Student.find({id: accountId});
        if (!foundLesson || foundLesson.length === 0) { // Lesson not found
          return res.view('pages/homepage', {
            error: 'Lesson not found'
          });
        }
        const lesson = foundLesson[0];
        const account = { // Return account info
          id: lesson.id,
          unit_number: lesson.unit_number,
          lesson_number: lesson.lesson_number,
          topic: lesson.topic,
          total_num_sub_lessons: lesson.total_num_sub_lessons,
          completion_rate: lesson.completion_rate,
          complete: lesson.complete,
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
        const lesson_number = req.param('lesson_number');
        const sublesson_number = req.param('sublesson_number');
        const topic = req.param('topic');
        const total_activities = req.param('total_num_activities');
        const completion_rate = req.param('completion_rate');
        const complete = req.param('complete');
        if (!req.session.userId) { // Check if student is logged in
          return res.send({
            error: 'Student User not logged in'
          });
        }
        if (!unit_number || !lesson_number || !sublesson_number || !topic || !total_activities || !completion_rate || !complete) { // Missing required params
          return res.send({
            error: 'All fields required'
          });
        }
        if (unit_number === '' || lesson_number === '' || sublesson_number === '' || topic === '' || total_activities === '' || completion_rate === '' || complete === '') { // Empty params
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
          lesson_number: lesson_number,
          sublesson_number: sublesson_number,
          topic: topic,
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
    getSubLessons: async function(req, res) {
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
        const foundSubLesson = await SubLesson.find({userID: req.session.userId}).populate('userID');
       // const foundStudent = await Student.find({id: accountId});
        if (!foundSubLesson || foundSubLesson.length === 0) { // Unit not found
          return res.view('pages/homepage', {
            error: 'Sublesson not found'
          });
        }
        const sublesson = foundSubLesson[0];
        const account = { // Return account info
          id: unit.id,
          lesson_number: sublesson.lesson_number,
          sublesson_number: sublesson.sublesson_number,
          topic: sublesson.topic,
          total_activities: sublesson.total_activities,
          completion_rate: sublesson.completion_rate,
          complete: sublesson.complete,
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
        if (!unit_number || !sublesson_number || !activity_number || !topic || !url || !attempts || !timeSpent || !complete) { // Missing required params
          return res.send({
            error: 'All fields required'
          });
        }
        if (unit_number === '' || sublesson_number === '' || activity_number === '' || topic === '' || url === '' || attempts === '' || timeSpent === '' || complete === '') { // Empty params
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
        const foundActivity = await SubLessonActivity.find({userID: req.session.userId}).populate('userID');
       // const foundStudent = await Student.find({id: accountId});
        if (!foundActivity || foundActivity.length === 0) { // Unit not found
          return res.view('pages/homepage', {
            error: 'Sublesson Activity not found'
          });
        }
        const activity = foundSubLessonActivity[0];
        const account = { // Return account info
          id: activity.id,
          sublesson_number: activity.sublesson_number,
          activity_number: activity.activity_number,
          topic: activity.topic,
          url: activity.url,
          attempts: activity.attempts,
          timeSpent: activity.timeSpent,
          complete: activity.complete,
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
        const sublesson_number = req.param('sublesson_number');
        const topic = req.param('topic');
        const url = req.param('url');
        const complete = req.param('complete');
        if (!req.session.userId) { // Check if student is logged in
          return res.send({
            error: 'Student User not logged in'
          });
        }
        if (!sublesson_number || !topic || !url || !complete) { // Missing required params
          return res.send({
            error: 'All fields required'
          });
        }
        if (sublesson_number === '' || topic === '' || url === '' || complete === '') { // Empty params
          return res.send({
            error: 'All fields required'
          });
        }
        const existingGuided = await SubLessonGuided.find({ // Check if sublesson activity guided already exists
          or: [{sublesson_number: sublesson_number}]
        });
        if (existingGuided && existingGuided.length > 0) { // Return error if sublesson guided activity already exists
          return res.send({
            error: 'Sublesson Guided Activity already exists'
          });
        }
       // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
        await SubLessonGuided.create({ // Create sublesson activity
          userID: userId,
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
        const foundGuidedActivity = await SubLessonGuided.find({userID: req.session.userId}).populate('userID');
       // const foundStudent = await Student.find({id: accountId});
        if (!foundGuidedActivity || foundGuidedActivity.length === 0) { // Unit not found
          return res.view('pages/homepage', {
            error: 'Sublesson Guided Activity not found'
          });
        }
        const activity = foundGuidedActivity[0];
        const account = { // Return account info
          id: activity.id,
          sublesson_number: activity.sublesson_number,
          topic: activity.topic,
          url: activity.url,
          complete: activity.complete,
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
    Create a new SubLesson Video.
    @param {string} userID
    @param {string} sublesson_number
    @param {string} topic
    @param {string} url
    @param {boolean} complete

  */
    createSubLessonVideo: async function(req, res) {
      try {
        const userId = req.session.userId;
        const sublesson_number = req.param('sublesson_number');
        const topic = req.param('topic');
        const url = req.param('url');
        const complete = req.param('complete');
        if (!req.session.userId) { // Check if student is logged in
          return res.send({
            error: 'Student User not logged in'
          });
        }
        if (!sublesson_number || !topic || !url || !complete) { // Missing required params
          return res.send({
            error: 'All fields required'
          });
        }
        if (sublesson_number === '' || topic === '' || url === '' || complete === '') { // Empty params
          return res.send({
            error: 'All fields required'
          });
        }
        const existingVid = await SubLessonVid.find({ // Check if sublesson video already exists
          or: [{sublesson_number: sublesson_number}]
        });
        if (existingVid && existingVid.length > 0) { // Return error if sublesson video already exists
          return res.send({
            error: 'Sublesson Video already exists'
          });
        }
       // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
        await SubLessonVid.create({ // Create sublesson video
          userID: userId,
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
    Get a student's sublesson video information
    @param {string} userID
    @param {string} sublesson_number
    @param {string} topic
    @param {string} url
    @param {boolean} complete
  */
    getSublessonVid: async function(req, res) {
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
        const foundVideo = await SubLessonVid.find({userID: req.session.userId}).populate('userID');
       // const foundStudent = await Student.find({id: accountId});
        if (!foundVideo || foundVideo.length === 0) { // Unit not found
          return res.view('pages/homepage', {
            error: 'Sublesson Video not found'
          });
        }
        const vid = foundVideo[0];
        const account = { // Return account info
          id: vid.id,
          sublesson_number: vid.sublesson_number,
          topic: vid.topic,
          url: vid.url,
          complete: vid.complete,
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
    Create a new SubLesson Written.
    @param {string} userID
    @param {string} sublesson_number
    @param {string} topic
    @param {string} body
    @param {boolean} complete

  */
    createSubLessonWritten: async function(req, res) {
      try {
        const userId = req.session.userId;
        const sublesson_number = req.param('sublesson_number');
        const topic = req.param('topic');
        const body = req.param('body');
        const complete = req.param('complete');
        if (!req.session.userId) { // Check if student is logged in
          return res.send({
            error: 'Student User not logged in'
          });
        }
        if (!sublesson_number || !topic || !body || !complete) { // Missing required params
          return res.send({
            error: 'All fields required'
          });
        }
        if (sublesson_number === '' || topic === '' || body === '' || complete === '') { // Empty params
          return res.send({
            error: 'All fields required'
          });
        }
        const existingWritten = await SubLessonWritten.find({ // Check if sublesson written already exists
          or: [{sublesson_number: sublesson_number}]
        });
        if (existingWritten && existingWritten.length > 0) { // Return error if sublesson written already exists
          return res.send({
            error: 'Sublesson Written already exists'
          });
        }
       // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
        await SubLessonWritten.create({ // Create sublesson written
          userID: userId,
          sublesson_number: sublesson_number,
          topic: topic,
          body : body,
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
    Get a student's sublesson written information
    @param {string} userID
    @param {string} sublesson_number
    @param {string} topic
    @param {string} body
    @param {boolean} complete
  */
    getSublessonWritten: async function(req, res) {
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
        const foundWritten = await SubLessonWritten.find({userID: req.session.userId}).populate('userID');
       // const foundStudent = await Student.find({id: accountId});
        if (!foundWritten || foundWritten.length === 0) { // Unit not found
          return res.view('pages/homepage', {
            error: 'Sublesson Video not found'
          });
        }
        const written = foundWritten[0];
        const account = { // Return account info
          id: written.id,
          sublesson_number: written.sublesson_number,
          topic: written.topic,
          body: written.body,
          complete: written.complete,
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
        const quiz = req.param('quiz');
        const correctness = req.param('correctness')
        const complete = req.param('complete');
        if (!req.session.userId) { // Check if student is logged in
          return res.send({
            error: 'Student User not logged in'
          });
        }
        if (!unit_number || !topic || !quiz || !correctness || !complete) { // Missing required params
          return res.send({
            error: 'All fields required'
          });
        }
        if (unit_number === '' || topic === '' || quiz === '' || correctness === '' || complete === '') { // Empty params
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
          quiz : quiz,
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
        const foundQuiz = await UnitQuiz.find({userID: req.session.userId}).populate('userID');
       // const foundStudent = await Student.find({id: accountId});
        if (!foundQuiz || foundQuiz.length === 0) { // Unit not found
          return res.view('pages/homepage', {
            error: 'Unit Quiz not found'
          });
        }
        const quiz = foundQuiz[0];
        const account = { // Return account info
          id: quiz.id,
          unit_number: quiz.unit_number,
          topic: quiz.topic,
          quiz: quiz.quiz,
          correctness: quiz.correctness,
          complete: quiz.complete,
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
        const foundReview = await UnitReview.find({userID: req.session.userId}).populate('userID');
       // const foundStudent = await Student.find({id: accountId});
        if (!foundReview || foundReview.length === 0) { // Unit not found
          return res.view('pages/homepage', {
            error: 'Unit Review not found'
          });
        }
        const review = foundReview[0];
        const account = { // Return account info
          id: review.id,
          unit_number: review.unit_number,
          topic: review.topic,
          unit_info: review.unit_info,
          complete: quiz.complete,
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
    }
  };
