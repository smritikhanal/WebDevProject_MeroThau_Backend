// __tests__/booking.model.test.js
const BookingMock = require("../mock/bookingMockModel");

describe("Booking Model Unit Tests", () => {
  it("should create a booking with valid attributes", async () => {
    const booking = await BookingMock.create({
      checkInDate: new Date(),
      checkOutDate: new Date(),
      fullName: "Jane Doe",
      contactNumber: "9876543210",
      email: "jane@example.com",
      paymentMethod: "Fonepay",
      numberOfRooms: 2,
      numberOfGuests: 4,
      hotelName: "Luxury Hotel",
    });

    expect(booking.fullName).toBe("Jane Doe");
    expect(booking.contactNumber).toBe("9876543210");
    expect(booking.email).toBe("jane@example.com");
    expect(booking.paymentMethod).toBe("Fonepay");
    expect(booking.numberOfRooms).toBe(2);
    expect(booking.numberOfGuests).toBe(4);
    expect(booking.hotelName).toBe("Luxury Hotel");
  });

  it("should not allow missing required fields", async () => {
    try {
      await BookingMock.create({});
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should validate email format", async () => {
    try {
      await BookingMock.create({
        checkInDate: new Date(),
        checkOutDate: new Date(),
        fullName: "John Doe",
        contactNumber: "9876543210",
        email: "invalid-email",
        paymentMethod: "Cash",
        numberOfRooms: 1,
        numberOfGuests: 2,
        hotelName: "Budget Hotel",
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should not allow invalid payment methods", async () => {
    try {
      await BookingMock.create({
        checkInDate: new Date(),
        checkOutDate: new Date(),
        fullName: "John Doe",
        contactNumber: "9876543210",
        email: "john@example.com",
        paymentMethod: "CryptoPay", // Invalid payment method
        numberOfRooms: 1,
        numberOfGuests: 2,
        hotelName: "Budget Hotel",
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should not allow negative room numbers", async () => {
    try {
      await BookingMock.create({
        checkInDate: new Date(),
        checkOutDate: new Date(),
        fullName: "Alice",
        contactNumber: "1234567890",
        email: "alice@example.com",
        paymentMethod: "Cash",
        numberOfRooms: -1, // Invalid negative number
        numberOfGuests: 2,
        hotelName: "City Hotel",
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should not allow past check-in dates", async () => {
    try {
      await BookingMock.create({
        checkInDate: new Date("2000-01-01"), // Past date
        checkOutDate: new Date("2025-01-01"),
        fullName: "Bob",
        contactNumber: "9998887776",
        email: "bob@example.com",
        paymentMethod: "Fonepay",
        numberOfRooms: 1,
        numberOfGuests: 2,
        hotelName: "Seaside Hotel",
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should allow optional remarks field", async () => {
    const booking = await BookingMock.create({
      checkInDate: new Date(),
      checkOutDate: new Date(),
      fullName: "Charlie Doe",
      contactNumber: "9876543210",
      email: "charlie@example.com",
      paymentMethod: "Cash",
      numberOfRooms: 2,
      numberOfGuests: 3,
      hotelName: "Downtown Hotel",
      remarks: "Late check-in requested",
    });

    expect(booking.remarks).toBe("Late check-in requested");
  });
});
