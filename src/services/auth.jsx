import { auth, provider } from "../firebase";

export const signInWithGoogle = async () => {
  let user;
  await auth
    .signInWithPopup(provider)
    .then((res) => {
      console.log(res.user);
      user = {
        fullName: res.user.displayName,
        avatar: res.user.photoURL,
        accessToken: res.credential.accessToken,
        refreshToken: res.user.refreshToken,
      };
    })
    .catch((error) => {
      console.log(error.message);
    });
 
  return user;
};

export const logout = async () => {
  let logout_sucess;
  await auth
    .signOut()
    .then(() => {
      logout_sucess = true;
    })
    .catch((error) => {
      console.log(error.message);
    });

  return logout_sucess;
};
