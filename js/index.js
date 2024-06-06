const showButton = $('#show');
const hideButton = $('#hide');
const image = $('#image-container');
const title = $('h1');

hideButton.on('click', () => {
  image.hide();
  title.text('¡No tenemos ninguna imagen!');
});
showButton.on('click', () => {
  image.show();
  title.text('¡Mira la siguiente imagen!');
});
