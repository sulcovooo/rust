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
 
document.getElementById('steamLogin').addEventListener('click', function() {
    window.location.href = `https://steamcommunity.com/openid/login?openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.mode=checkid_setup&openid.ns=http://specs.openid.net/auth/2.0&openid.realm=https://sulcovooo.github.io/rust/&openid.return_to=https://sulcovooo.github.io/rust/auth/&response_type=code&client_id=C7A50EEF043FC18D873E6C8AA7FAB8DE`;
});
