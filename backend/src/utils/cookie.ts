import type { Response, CookieOptions } from 'express';

const setCookie = (
  req: Response,
  key: string,
  value: string,
  opts: CookieOptions = {}
) => {
  const options: CookieOptions = {
    httpOnly: true,
    sameSite: 'strict',
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week
    secure: import.meta.env.PROD,
    ...opts,
  };
  req.cookie(key, value, options);
};

export default setCookie;
