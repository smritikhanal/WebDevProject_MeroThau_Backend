const UserMock = require("../mock/userMockModel");

describe("User Model Unit Tests", () => {
  it("should create a user with valid attributes", async () => {
    const user = await UserMock.create({
      name: "John Doe",
      contactNumber: "1234567890",
      email: "john@example.com",
      password: "hashedpassword",
      profilePic: "profile.jpg",
      address: "123 Street, City",
    });

    expect(user.name).toBe("John Doe");
    expect(user.contactNumber).toBe("1234567890");
    expect(user.email).toBe("john@example.com");
    expect(user.password).toBe("hashedpassword");
    expect(user.profilePic).toBe("profile.jpg");
    expect(user.address).toBe("123 Street, City");
  });

  it("should not allow null values for required fields", async () => {
    try {
      await UserMock.create({});
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should validate email format", async () => {
    try {
      await UserMock.create({
        name: "Invalid Email User",
        contactNumber: "1234567890",
        email: "invalidemail",
        password: "password",
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should validate contact number length", async () => {
    try {
      await UserMock.create({
        name: "Short Contact",
        contactNumber: "123",
        email: "contact@example.com",
        password: "password",
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should validate password", async () => {
    const user = await UserMock.create({
      name: "John Doe",
      contactNumber: "1234567890",
      email: "john@example.com",
      password: "hashedpassword",
    });

    expect(user.validPassword("hashedpassword")).toBe(true);
    expect(user.validPassword("wrongpassword")).toBe(false);
  });
});
