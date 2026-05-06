document.querySelector('.url').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    document.querySelector('#webframe').src =
      document.querySelector('.url').value;
  }
});