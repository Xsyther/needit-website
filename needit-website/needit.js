  // Vote button toggle
  document.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const wasVoted = this.classList.contains('voted');
      const text = this.textContent;
      const match = text.match(/(\d+)/);
      if (!match) return;
      let count = parseInt(match[1]);
      if (wasVoted) {
        this.classList.remove('voted');
        count--;
      } else {
        this.classList.add('voted');
        count++;
      }
      this.textContent = `▲ ${count} helpful`;
    });
  });
