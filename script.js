document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const message = document.getElementById('message');
    const audio = document.querySelector('audio');
    const emojisBackground = document.getElementById('emojis-background');
  
    envelope.addEventListener('click', function() {
      message.classList.toggle('hidden');
      audio.play();
      animateEmojis();
    });
  
    function animateEmojis() {
      for (let i = 0; i < 50; i++) { // Adjust the number of emojis as needed
        createEmoji();
      }
    }
  
    function createEmoji() {
      const emoji = document.createElement('div');
      emoji.textContent = "❤️"; // Use any emoji you like
      emoji.classList.add('emoji');
      emoji.style.left = Math.random() * window.innerWidth + 'px';
      emoji.style.top = Math.random() * window.innerHeight + 'px';
      emojisBackground.appendChild(emoji);
      animateEmoji(emoji);
    }
  
    function animateEmoji(emoji) {
      const duration = Math.random() * 10 + 5; // Random duration between 5 and 15 seconds
      emoji.style.animation = `move-emojis ${duration}s linear infinite`;
    }
  });
  