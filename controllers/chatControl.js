const Chat = require("../models/dataModel");

exports.addMessage = (req, res, next) => {
   const { userId, message }  = req.body;

   if(userId !== undefined){
      Chat.findOne({ userId }).then((chat)=> {
        if(!chat){
            return res.status(404).json({error: "chat not found"});
        }

        chat.addMessage(message);

        return chat.save();
      }).then()
   }
}


app.post("/addMessage", (req, res) => {
    const { userId, message } = req.body;
  
    Chat.findOne({ userId })
      .then((chat) => {
        if (!chat) {
          // Chat document not found, handle the case as needed
          return res.status(404).json({ error: "Chat not found" });
        }
  
        // Add the new message
        chat.addMessage(message);
  
        // Save the updated chat document
        return chat.save();
      })
      .then(() => {
        res.status(200).json({ success: true });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      });
  });
 
  
  
  