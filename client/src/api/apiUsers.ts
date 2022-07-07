import axios from './axios';
import { User } from '../ts/interfaces/User';
const API_BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';
const headers = new Headers();
headers.append('Content-Type', 'application/json');

export function createUser(user: User, signal: AbortSignal) {
  const URL = `${API_BASE_URL}/users`;
  return axios.post(
    URL,
    { data: user },
    { headers: { 'Content-Type': 'application/json' } }
  );
}
