import { kStringMaxLength } from 'buffer';
import { knex } from '../db/connection';
import { User } from '../ts/interfaces/userInterface';

const USERS_TABLE = 'users';
const PROFILES_TABLE = 'users_profiles';

function readEmail(email: string) {
  return knex(USERS_TABLE)
    .select('email', 'username', 'user_id')
    .where({ email });
}

function readUsername(username: string) {
  return knex(USERS_TABLE)
    .select('email', 'username', 'user_id')
    .where({ username });
}

async function create(user: User) {
  const { email, username, password } = user;
  const { first_name, last_name } = user;
  try {
    return knex.transaction(async (trx: any) => {
      const createdUser = await trx(USERS_TABLE)
        .insert({
          email,
          username,
          password,
        })
        .returning('username', 'email', 'user_id')
        .then((data: any) => (Array.isArray(data) ? data[0] : data));
      const createdProfile = await trx(PROFILES_TABLE)
        .insert({
          first_name,
          last_name,
          user_id: createdUser['user_id'],
        })
        .returning('*');
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
