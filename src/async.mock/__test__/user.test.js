import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const userName = "mockUserName";
    const password = "mockPassword";
    const result = register(userName, password);
    await expect(result).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    const fakeName = "nonExistName";
    const fakepwd = "mockPassword";
    verifyUsername.mockReturnValueOnce(false);
    await expect(register(fakeName, fakepwd)).rejects.toThrow(
      "wrong username or password"
    );
  });
});
