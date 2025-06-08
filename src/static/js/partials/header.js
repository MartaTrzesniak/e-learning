document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');

  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      // Przykładowo przekierowanie do strony wyszukiwania z parametrem
      window.location.href = `/search?query=${encodeURIComponent(query)}`;
    }
  });
});
