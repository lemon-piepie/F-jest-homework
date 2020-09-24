// TODO feedback: 这里axios在你测试里面并没有被使用啊

// import axios from "axios"

jest.mock("axios");

const { default: getUsers } = require("../users");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    await expect(getUsers()).resolves.toEqual({});
  });
});
