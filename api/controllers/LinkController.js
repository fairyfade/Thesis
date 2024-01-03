const uuidv4 = require('uuid/v4'); // Import uuid

module.exports = {
    createLink: async function(req, res) {
        const userId = req.session.userId;
        try {
          //const studentId = req.session.studentId;
      //    const userId = userId;
          const curr_unit = req.param('curr_unit');
          const curr_lesson = req.param('curr_lesson');
          const unit_intro = req.param('unit_intro');
          const lesson_intro = req.param('lesson_intro');
          const curr_sublesson = req.param('curr_sublesson');
          const sublesson_vid = req.param('sublesson_vid');
          const sublesson_guided_activity = req.param('curr_activity');
          const curr_activity = req.param('completion_rate');
          const activity_answer = req.param('activity_answer');
          const unit_review = req.param('unit_review');
          const unit_quiz = req.param('unit_quiz');
          const unit_challenge = req.param('unit_challenge');
          const total_units = req.param('total_units');
          const total_lessons = req.param('total_lessons');
          const total_sublessons = req.param('total_sublessons');
          const total_guided_act = req.param('total_guided_act');
          const total_activities = req.param('total_activities');
          if (!req.session.userId) { // Check if student is logged in
            return res.send({
              error: 'Student User not logged in'
            });
          }
          if (!curr_unit || !curr_lesson || !unit_intro || !lesson_intro || !curr_sublesson || !sublesson_vid || !sublesson_guided_activity || !curr_activity || !activity_answer || !unit_review || !unit_quiz || !unit_challenge || !total_units || !total_lessons || !total_sublessons || !total_guided_act || !total_activities) { // Missing required params
            return res.send({
              error: 'All fields required'
            });
          }
          if (curr_unit === '' || curr_lesson === '' || unit_intro === '' || lesson_intro === '' || curr_sublesson === ''|| sublesson_vid === '' || sublesson_guided_activity === '' || curr_activity === '' || activity_answer === '' || unit_review === '' || unit_quiz === '' || unit_challenge === '' || total_units === '' || total_lessons === '' || total_sublessons === '' || total_guided_act === '' || total_activities === '') { // Empty params
            return res.send({
              error: 'All fields required'
            });
          }
          const existingLink = await Link.find({ // Check if Link already exists

          });
          if (existingLink && existingLink.length > 0) { // Return error if Link already exists
            return res.send({
              error: 'Link already exists'
            });
          }
         // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
          await Link.create({ // Create link
            //userId: userId,
            curr_unit: curr_unit,
            unit_intro: unit_intro,
            curr_lesson: curr_lesson,
            lesson_intro: lesson_intro,
            curr_sublesson: curr_sublesson,
            sublesson_vid: sublesson_vid,
            sublesson_guided_activity: sublesson_guided_activity,
            curr_activity: curr_activity,
            activity_answer: activity_answer,
            unit_review: unit_review,
            unit_quiz:  unit_quiz,
            unit_challenge: unit_challenge,
            total_units :total_units,
            total_lessons: total_lessons,
            total_sublessons: total_sublessons,
            total_guided_act: total_guided_act,
            total_activities: total_activities,

        });
        return res.send({ // Return success
          success: true
        });
      } catch (error) {
        console.log(error);
      }
    },
     /*
    Edit a link */
  editLink: async function(req, res) {
    const userId = req.session.userId;
    try {
      //  const userId = userId;
        const curr_unit = req.param('curr_unit');
        const curr_lesson = req.param('curr_lesson');
        const unit_intro = req.param('unit_intro');
        const lesson_intro = req.param('lesson_intro');
        const curr_sublesson = req.param('curr_sublesson');
        const sublesson_vid = req.param('sublesson_vid');
        const sublesson_guided_activity = req.param('curr_activity');
        const curr_activity = req.param('completion_rate');
        const activity_answer = req.param('activity_answer');
        const unit_review = req.param('unit_review');
        const unit_quiz = req.param('unit_quiz');
        const unit_challenge = req.param('unit_challenge');
        const total_units = req.param('total_units');
        const total_lessons = req.param('total_lessons');
        const total_sublessons = req.param('total_sublessons');
        const total_guided_act = req.param('total_guided_act');
        const total_activities = req.param('total_activities');
        if (!req.session.userId) { // Check if student is logged in
            return res.send({
              error: 'Student User not logged in'
            });
          }
          if (!curr_unit || !curr_lesson || !unit_intro || !lesson_intro || !curr_sublesson || !sublesson_vid || !sublesson_guided_activity || !curr_activity || !activity_answer || !unit_review || !unit_quiz || !unit_challenge || !total_units || !total_lessons || !total_sublessons || !total_guided_act || !total_activities) { // Missing required params
            return res.send({
              error: 'All fields required'
            });
          }
          if (curr_unit === '' || curr_lesson === '' || unit_intro === '' || lesson_intro === '' || curr_sublesson === ''|| sublesson_vid === '' || sublesson_guided_activity === '' || curr_activity === '' || activity_answer === '' || unit_review === '' || unit_quiz === '' || unit_challenge === '' || total_units === '' || total_lessons === '' || total_sublessons === '' || total_guided_act === '' || total_activities === '') { // Empty params
            return res.send({
              error: 'All fields required'
            });
          }
          const existingLink = await Link.find({ // Check if Link already exists
            
          });
          if (existingLink && existingLink.length > 0) { // Return error if Link already exists
            return res.send({
              error: 'Link already exists'
            });
          }
      existingLink = existingLink[0];
      await Link.update({id: id}, { //Update user
        curr_unit: curr_unit,
        unit_intro: unit_intro,
        curr_lesson: curr_lesson,
        lesson_intro: lesson_intro,
        curr_sublesson: curr_sublesson,
        sublesson_vid: sublesson_vid,
        sublesson_guided_activity: sublesson_guided_activity,
        curr_activity: curr_activity,
        activity_answer: activity_answer,
        unit_review: unit_review,
        unit_quiz:  unit_quiz,
        unit_challenge: unit_challenge,
        total_units :total_units,
        total_lessons: total_lessons,
        total_sublessons: total_sublessons,
        total_guided_act: total_guided_act,
        total_activities: total_activities,

      }).exec((err, user) => { //Return error if update fails
        if (err) {
          return res.send({
            error: 'Error updating link'
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
  getLinkInfo: async function(req, res) {
    try {
        const userId = req.session.userId;
      //const unit_number = req.param('unit_number');
      if (!userId) { // Check if unit Number is valid
        return res.send({
          error: 'Invalid userID'
        });
      }
      const linkInfo = await Link.find({

      });
      return res.view('pages/child_accounts/curriculum/unit_intro', {
        linkInfo: JSON.stringify(linkInfo[0])
      }
      );
    } catch (error) {
      console.log(error);
    }
  },
};
