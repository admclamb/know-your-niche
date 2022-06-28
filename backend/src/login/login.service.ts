import { knex } from '../db/connection';
const TABLE = 'users';

function read(email: string) {
  return knex(TABLE).select('*').where({ email });
}

export const service = {
  read,
};
