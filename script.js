const API_KEY = "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";
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

let messagesDiv = document.getElementById("messages");

// Load chat history and dark mode preference
window.onload = () => {
    let old = localStorage.getItem("chat_history");
    if (old) {
        messagesDiv.innerHTML = old;
        // Remove welcome message if there's chat history
        const welcome = document.querySelector(".welcome-message");
        if (welcome && messagesDiv.children.length > 1) {
            welcome.remove();
        }
    }
    
    // Load dark mode preference
    const darkMode = localStorage.getItem("dark_mode");
    if (darkMode === "true") {
        document.body.classList.add("dark");
    }
    
    scrollToBottom();
};

function saveChat() {
    localStorage.setItem("chat_history", messagesDiv.innerHTML);
}

function toggleDark() {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("dark_mode", isDark);
}

function clearChat() {
    if (confirm("Are you sure you want to clear the chat history?")) {
        messagesDiv.innerHTML = `
            <div class="welcome-message">
                <div class="welcome-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"></path>
                    </svg>
                </div>
                <h2>Welcome to AI Assistant</h2>
                <p>Start a conversation by typing your message below</p>
            </div>
        `;
        localStorage.removeItem("chat_history");
    }
}

document.getElementById("userInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

function addMessage(text, sender) {
    // Remove welcome message on first message
    const welcome = document.querySelector(".welcome-message");
    if (welcome) {
        welcome.remove();
    }
    
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.textContent = text;
    messagesDiv.appendChild(msg);
    saveChat();
    scrollToBottom();
}

function addTyping() {
    const box = document.createElement("div");
    box.classList.add("message", "bot", "typing");
    box.innerHTML = `
        <div class="typing-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>`;
    messagesDiv.appendChild(box);
    scrollToBottom();
}

function removeTyping() {
    let typing = document.querySelector(".typing");
    if (typing) typing.remove();
}

function scrollToBottom() {
    messagesDiv.scrollTo({
        top: messagesDiv.scrollHeight,
        behavior: 'smooth'
    });
}

async function sendMessage() {
    let input = document.getElementById("userInput");
    let text = input.value.trim();
    if (!text) return;
    input.value = "";

    addMessage(text, "user");
    addTyping();

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost",
                "X-Title": "AI Chat"
            },
            body: JSON.stringify({
                model: "openai/gpt-4o-mini",
                messages: [{ role: "user", content: text }]
            })
        });

        const data = await res.json();
        removeTyping();

        let reply = data.choices?.[0]?.message?.content || "No response";
        addMessage(reply, "bot");

    } catch (error) {
        removeTyping();
        addMessage("⚠️ Error connecting to server. Please try again.", "bot");
        console.error("Error:", error);
    }
}
