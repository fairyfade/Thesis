
module.exports = {
    createProgress: async function(req, res) {
        try {
          const studentId = req.session.studentId;
          const points = req.param('points');
          const character_file = req.param('character_file');
          const pet_file = req.param('pet_file');
          const house_file = req.param('house_file');
    
          if (!req.session.userId) { // Check if student is logged in
            return res.send({
              error: 'Student User not logged in'
            });
          }
          if (!points || !character_file || !pet_file || !house_file) { // Missing required params
            return res.send({
              error: 'All fields required'
            });
          }
          if (points === '' || character_file === '' || pet_file === '' || house_file === '') { // Empty params
            return res.send({
              error: 'All fields required'
            });
          }
          const existingRewardStore = await RewardStore.find({ // Check if Unit already exists
            or: [{studentId: studentId}]
          });
          if (existingRewardStore && existingRewardStore.length > 0) { // Return error if Unit already exists
            return res.send({
              error: 'Unit already exists'
            });
          }
         // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
          await RewardStore.create({ // Create unit
            studentID: studentId,
            points: points,
            character_file: character_file,
            pet_file: pet_file,
            house_file: house_file,
        });
        return res.send({ // Return success
          success: true
        });
      } catch (error) {
        console.log(error);
      }
    },
    }