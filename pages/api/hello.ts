// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/'
})
