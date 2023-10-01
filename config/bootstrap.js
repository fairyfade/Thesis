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
         total_num_lessons: 'unknown',
         completion_rate: '0',
         complete: false,

       },
     ]);
  }
  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();
};
 
