document.getElementById('postButton').addEventListener('click', function() {
  const commentText = document.getElementById('commentInput').value.trim();
  if (commentText) {
    const now = new Date();
    const commentHTML = `
      <div class="comment-item">
        <div class="comment-header">
          <span class="user-name">You</span>
          <span class="comment-time">${now.toLocaleDateString()} ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
        <div class="comment-content">${commentText}</div>
      </div>
    `;
    
    document.getElementById('commentsList').insertAdjacentHTML('afterbegin', commentHTML);
    document.getElementById('commentInput').value = ''; // Kosongkan input
  }
});