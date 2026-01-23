# AI Chat Assistant 🤖

A modern, responsive AI chat application with a beautiful UI and dark mode support. Built with vanilla HTML, CSS, and JavaScript.

![AI Chat Assistant](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 💬 Real-time AI chat interface
- 🌓 Dark/Light mode toggle with persistent preferences
- 📱 Fully responsive design for mobile and desktop
- 💾 Chat history persistence using localStorage
- 🎨 Modern gradient design with smooth animations
- 🗑️ Clear chat functionality
- ⌨️ Enter key to send messages
- 🔄 Typing indicators for better UX
- 🎯 Clean, minimalist interface

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- An API key from [OpenRouter](https://openrouter.ai/)

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <your-repo-url>
   cd ai-chat-assistant
   ```

2. **Get your OpenRouter API key**
   - Visit [OpenRouter](https://openrouter.ai/)
   - Sign up for an account
   - Navigate to API Keys section
   - Generate a new API key

3. **⚠️ IMPORTANT: Replace the API Key**
   
   Open `script.js` and replace the placeholder API key on **line 1**:
   
   ```javascript
   // Replace this with YOUR API key
   const API_KEY = "YOUR_API_KEY_HERE";
   ```
   
   **Note:** The current API key in the code is a placeholder and will NOT work. You must use your own API key from OpenRouter.

4. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

## 📁 Project Structure

```
ai-chat-assistant/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and themes
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## 🎨 Customization

### Change AI Model

In `script.js`, modify the model parameter:

```javascript
body: JSON.stringify({
    model: "openai/gpt-4o-mini",  // Change this to your preferred model
    messages: [{ role: "user", content: text }]
})
```

Available models include:
- `openai/gpt-4o-mini`
- `openai/gpt-4-turbo`
- `anthropic/claude-3-opus`
- And more on [OpenRouter Models](https://openrouter.ai/models)

### Customize Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --accent: #667eea;           /* Primary accent color */
    --bubble-user: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* ... other variables */
}
```

## 🔧 Features Breakdown

### Chat Functionality
- Send messages by clicking send button or pressing Enter
- Messages are displayed in chat bubbles
- User messages appear on the right (gradient purple)
- AI responses appear on the left (neutral gray)

### Dark Mode
- Toggle between light and dark themes
- Preference saved to localStorage
- Smooth color transitions

### Chat History
- Automatically saves chat history
- Persists across browser sessions
- Clear chat option available

### Responsive Design
- Works on desktop, tablet, and mobile devices
- Adaptive layout for different screen sizes
- Touch-friendly interface

## 🛡️ Security Notes

- **Never commit your API key to version control**
- Consider using environment variables for production
- The API key is exposed in client-side code (suitable for personal use only)
- For production apps, use a backend server to hide your API key

## 🐛 Troubleshooting

### Messages not sending?
- Verify your API key is correct
- Check browser console for error messages
- Ensure you have internet connection

### Chat history not saving?
- Check if localStorage is enabled in your browser
- Some browsers in private/incognito mode disable localStorage

### Dark mode not persisting?
- Clear browser cache and try again
- Check if localStorage is enabled

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- OpenRouter for AI API access
- Inter font family by Rasmus Andersson
- Icons inspired by Feather Icons

---

**⚠️ Remember to replace the API key in `script.js` before using!**
