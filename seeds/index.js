  
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
   
  
  await seedUsers();
    console.log("User seeded")
  
  await seedPosts();
  console.log("post seeded")
  
  await seedComments();
  console.log("comments seeded")
   

  process.exit(0);
};

seedAll();