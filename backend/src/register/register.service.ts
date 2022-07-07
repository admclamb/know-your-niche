import { kStringMaxLength } from 'buffer';
import { knex } from '../db/connection';
import { User } from '../ts/interfaces/userInterface';

const USERS_TABLE = 'users';
const PROFILES_TABLE = 'users_profiles';

function readEmail(email: string) {
  return knex(USERS_TABLE)
    .select('email', 'username', 'user_id')
    .where({ email })
    .first();
}

function readUsername(username: string) {
  return knex(USERS_TABLE)
    .select('email', 'username', 'user_id')
    .where({ username })
    .first();
}

async function create(user: User) {
  const { email, username, password } = user;
  const { first_name, last_name } = user;
  console.log('user: ', email, username, password);
  console.log(first_name, last_name);
  try {
    return knex.transaction(async (trx: any) => {
      const createdUser = await trx(USERS_TABLE)
        .insert({
          email,
          username,
          password,
        })
        .returning('*')
        .then((createdUser: any) => createdUser[0]);
      console.log('Created User: ', createdUser);
      const createdProfile = await trx(PROFILES_TABLE)
        .insert({
          first_name,
          last_name,
          user_id: createdUser['user_id'],
        })
        .returning('*')
        .then((createdProfile: any) => createdProfile[0]);
      return { ...createdUser, ...createdProfile };
    });
  } catch (error) {
    return error;
  }
}

export const service = {
  readEmail,
  readUsername,
  create,
};
