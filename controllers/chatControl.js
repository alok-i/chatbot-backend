const Chat = require("../models/dataModel");





exports.addMessage = (req, res, next) => {
    const { conversationId, message, role, userID } = req.body;
    console.log(message);
    console.log(typeof(message));
    // let messages = JSON.parse(message);
    const messageContent = message.message;
    const roleMain = message.role;
    // console.log(typeof(messages));
    // console.log(messages.message);
    Chat.findOne({ conversationId })
      .then((chat) => {
        if (!chat) {
          // Chat document not found, handle the case as needed
          chat = new Chat({ conversationId , messages : [], role, userID })
        }
  
        // Add the new message
        chat.addMessage({message:messageContent , role:roleMain});
  
        // Save the updated chat document
        return chat.save();
      })
      .then(() => {
        res.status(201).json({ success: true});
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      });
  };
 
  
  
  