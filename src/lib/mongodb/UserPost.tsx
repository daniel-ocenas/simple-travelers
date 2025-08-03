// import { ObjectId } from 'bson';
// import { UserDbModel } from 'src/lib/domains/User/User.types';
// import { connectToDatabase } from 'src/lib/mongodb/mongodb';
//
// const bcrypt = require('bcrypt');
//
// async function hashPass(unHashedPass: string) {
//   return bcrypt.hash(unHashedPass, 10).then(function (hash: string) {
//     return hash;
//   });
// }
//
// async function createUser(user: UserDbModel) {
//   const { db } = await connectToDatabase();
//   const _id = new ObjectId(user._id);
//   const query = { _id };
//   const update = { $set: user };
//   const options = { upsert: true };
//   return await db.collection('users').updateOne(query, update, options);
// }
//
// async function UserPost({ userName, password }: { userName: string; password: string }) {
//   try {
//     const pass = await hashPass(password);
//     const result = await createUser({ userName, password: pass });
//
//     if (!result) {
//       return {
//         message: 'User could not be created',
//         status: 500,
//       };
//     }
//     return {
//       user: result,
//       code: 200,
//     };
//   } catch (e) {
//     console.error(e);
//     return {
//       message: 'There was a problem loading user from the database',
//       status: 500,
//       errorMap: e,
//     };
//   }
// }
//
// export default UserPost;
