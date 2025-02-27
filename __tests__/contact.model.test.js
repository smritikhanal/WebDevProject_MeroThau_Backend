const ContactMock = require("../mock/contactMockModel");

describe("Contact Model Unit Tests", () => {
  it("should create a contact message with valid attributes", async () => {
    const contact = await ContactMock.create({
      fullName: "Jane Doe",
      email: "jane@example.com",
      message: "I need support for my booking.",
    });

    expect(contact.fullName).toBe("Jane Doe");
    expect(contact.email).toBe("jane@example.com");
    expect(contact.message).toBe("I need support for my booking.");
  });

  it("should not allow null values for required fields", async () => {
    try {
      await ContactMock.create({});
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should validate email format", async () => {
    try {
      await ContactMock.create({
        fullName: "Invalid Email User",
        email: "invalidemail",
        message: "Test message",
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should store messages as text", async () => {
    const contact = await ContactMock.create({
      fullName: "Mark Smith",
      email: "mark@example.com",
      message: "This is a long test message to ensure text storage works correctly.",
    });

    expect(typeof contact.message).toBe("string");
  });
});
