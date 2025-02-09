// 'use server';

// import { cookies } from 'next/headers';
// import { Locale, defaultLocale } from '../i18n/config';

// const COOKIE_NAME = 'NEXT_LOCALE';

// export async function getUserLocale() {
//   const cookieStore = await cookies();
//   return cookieStore.get(COOKIE_NAME)?.value || defaultLocale;
// }

// export async function setUserLocale(locale: Locale) {
//   console.log('✅ 服务器端：setUserLocale 被调用', locale);
//   const cookieStore = await cookies();

//   cookieStore.set(COOKIE_NAME, locale, { path: '/' });  // 重要：加 path
//   console.log('✅ Cookie 设置成功:', COOKIE_NAME, locale);
// }

'use server';

import {cookies} from 'next/headers';
import {Locale, defaultLocale} from '@/i18n/config';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, locale);
}