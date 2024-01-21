import { User } from "../models/user.model";
import { LoginInputType } from "../redux/user.slice";

const loginInfo: LoginInputType = {
  email: "test@gmail.com",
  password: "123",
};

export function userLogin({ email, password }: LoginInputType) {
  return new Promise<{ data: { user: User } }>((resolve, reject) => {
    if (email === loginInfo.email && password === loginInfo.password) {
      setTimeout(
        () =>
          resolve({
            data: {
              user: {
                username: "test",
                email: "test@gmail.com",
                bio: "I am test",
                image: "",
                token: "123abc",
              },
            },
          }),
        300
      );
    } else {
      setTimeout(() => reject(), 300);
    }
  });
}
