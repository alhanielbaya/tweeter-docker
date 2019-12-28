import { login, sanitizeInput } from './oauthHelpers';

export async function facebookSuccess(response: any, cb: (x: boolean) => void) {
  const res = response;
  const unsanitizedProfile = { imageUrl: res.picture.data.url, ...res };

  const p = await sanitizeInput(unsanitizedProfile);

  const data = {
    profile: {
      email: p.email,
      name: p.name,
      imageUrl: p.imageUrl,
      atSign: p.atSign
    }
  };

  login(data, cb);
}
