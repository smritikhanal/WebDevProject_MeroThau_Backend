const Contact = require('../models/contactus');

// Get all messages
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Contact.findAll();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single message by ID
exports.getMessageById = async (req, res) => {
    try {
        const message = await Contact.findByPk(req.params.id);

        if (!message) {
            return res.status(404).json({ message: "Message not found" });
        }

        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new contact message
exports.createMessage = async (req, res) => {
    try {
        const { fullName, email, message } = req.body;

        const newMessage = await Contact.create({
            fullName,
            email,
            message
        });

        res.status(201).json({ message: "Message sent successfully", contact: newMessage });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a message
exports.deleteMessage = async (req, res) => {
    try {
        const message = await Contact.findByPk(req.params.id);

        if (!message) {
            return res.status(404).json({ message: "Message not found" });
        }

        await message.destroy();
        res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
