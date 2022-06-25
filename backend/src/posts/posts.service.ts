import { knex } from '../db/connection';

const TABLE = 'posts';

function list(query: string) {
  const orderBy =
    query === 'top' ? 'likes' : query === 'latest' ? 'created_at' : '';
  if (orderBy) {
    return knex(TABLE).select('*').orderBy(orderBy);
  } else {
    return knex(TABLE).select('*');
  }
}

export const service = {
  list,
};
