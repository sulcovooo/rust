function sendMessage() {
    var nickname = document.getElementById("nickname").value.trim() || "Anonymous";
    var message = document.getElementById("message-input").value.trim();
    if (message) {
        var chatBox = document.getElementById("chat-messages");
        var msgElement = document.createElement("div");
        msgElement.classList.add("chat-message");

        var profilePic = document.createElement("img");
        profilePic.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"; // Profilovka

        var textNode = document.createTextNode(nickname + ": " + message);
        msgElement.appendChild(profilePic);
        
        if (nickname.toLowerCase() === "sulcovo") {
            var ownerTag = document.createElement("span");
            ownerTag.classList.add("owner-tag");
            ownerTag.textContent = "Owner";
            msgElement.appendChild(ownerTag);
        }

        msgElement.appendChild(textNode);
        chatBox.appendChild(msgElement);

        document.getElementById("message-input").value = ""; // Clear input after sending
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }
}
