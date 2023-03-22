const chatOutput = document.getElementById("chat-output");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", async () => {
  const userMessage = userInput.value;
  if (!userMessage) return;

  // Display user's message
  addMessageToChat("User", userMessage);
  userInput.value = "";

  // Get AI response
  const aiMessage = await getAIResponse(userMessage);

  // Display AI's message
  addMessageToChat("AI", aiMessage);
});

function addMessageToChat(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatOutput.appendChild(messageElement);
  chatOutput.scrollTop = chatOutput.scrollHeight;
}

async function getAIResponse(message) {
  // Replace this with a call to your AI model's API
  // Example:
  // const response = await fetch('https://your-ai-api.com/generate', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ prompt: message })
  // });
  // const data = await response.json();
  // return data.generated_text;

  // For now, just return a dummy response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello! I'm the AI, but my API isn't connected yet. Replace the 'getAIResponse' function with a call to your AI model's API.");
    }, 1000);
  });
}
