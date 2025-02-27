const HotelMock = require("../mock/hotelMockModel");

describe("Hotel Model Unit Tests", () => {
  it("should create a hotel with valid attributes", async () => {
    const hotel = await HotelMock.create({
      name: "Grand Resort",
      location: "Beachside",
      price: 350.75,
      discountPercent: 15,
      rating: 4,
      rooms: 100,
      description: JSON.stringify(["Spa", "Restaurant", "Private Beach"]),
      mainImage: "resort-main.jpg",
      images: JSON.stringify(["resort1.jpg", "resort2.jpg"]),
    });

    expect(hotel.name).toBe("Grand Resort");
    expect(hotel.location).toBe("Beachside");
    expect(hotel.price).toBe(350.75);
    expect(hotel.discountPercent).toBe(15);
    expect(hotel.rating).toBe(4);
    expect(hotel.rooms).toBe(100);
    expect(JSON.parse(hotel.description)).toContain("Spa");
    expect(hotel.mainImage).toBe("resort-main.jpg");
    expect(JSON.parse(hotel.images)).toContain("resort1.jpg");
  });

  it("should not allow null values for required fields", async () => {
    try {
      await HotelMock.create({});
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should validate numeric values for price, rating, and rooms", async () => {
    try {
      await HotelMock.create({
        name: "Invalid Hotel",
        location: "Unknown",
        price: "invalid", // Should be a number
        rating: "high", // Should be a number
        rooms: "many", // Should be a number
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should allow optional discountPercent", async () => {
    const hotel = await HotelMock.create({
      name: "Budget Stay",
      location: "City Center",
      price: 80,
      rating: 3,
      rooms: 20,
      description: JSON.stringify(["Free Breakfast", "Wi-Fi"]),
      mainImage: "budget.jpg",
    });

    expect(hotel.discountPercent).toBe(10); // Default behavior if not provided
  });
});
