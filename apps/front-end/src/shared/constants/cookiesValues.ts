import { parseCookies } from 'nookies'
import { GYM_DAY_ACCESS_TOKEN } from './cookiesNames'

const cookies = parseCookies()

export const userAccesToken = cookies[GYM_DAY_ACCESS_TOKEN]
