export const playSound = (function () {
  const audio = new Audio();

  return (fileName: string) => {
    audio.src = `/audios/${fileName}`;
    audio.play()
      .catch(error => console.error('Error playing audio', error));
  }
})();