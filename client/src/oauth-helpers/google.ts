import { IgoogleRes } from './oauthTypes';
import { sanitizeInput, login } from './oauthHelpers';

export async function googleSuccess(
  response: IgoogleRes,
  cb: (x: boolean) => void
) {
  const unsanitizedProfile = response.profileObj;

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

export function googleFailure(response: any) {
  console.log(response);
}
