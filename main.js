onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bgMusic');
  if (!audio) return;

  // Auto play saat masuk halaman follower.
  // Catatan: beberapa browser masih bisa block autoplay kalau belum ada gesture.
  audio.currentTime = 0;
  audio.muted = false;

  audio.play().then(() => {
    // autoplay berhasil
  }).catch((err) => {
    // autoplay gagal karena browser block; tetap audio siap jika user klik play di browser UI
    console.warn('Autoplay musik gagal (browser block):', err);
  });
});


