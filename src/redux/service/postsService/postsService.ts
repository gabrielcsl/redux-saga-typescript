import axios from 'axios'
import { IPost } from '../../../models/IPost'
export const getPosts = () => axios.get<IPost[]>('https://jsonplaceholder.typicode.com/todos')