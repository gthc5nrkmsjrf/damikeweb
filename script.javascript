window.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.url').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      let value = this.value;

      if (
        !value.startsWith('http://') &&
        !value.startsWith('https://')
      ) {
        value = 'https://' + value;
      }

      document.querySelector('#webframe').src = value;
    }
  });
});