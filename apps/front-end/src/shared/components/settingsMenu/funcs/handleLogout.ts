import { GYM_DAY_ACCESS_TOKEN } from '@/shared/constants/cookiesNames'

export function handleLogout() {
  document.cookie = `${GYM_DAY_ACCESS_TOKEN}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`
  window.location.href = '/'
}
