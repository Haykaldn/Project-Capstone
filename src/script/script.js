
  const priceSlider = document.getElementById('priceSlider');
  const hargaValue = document.getElementById('hargaValue');

  priceSlider.addEventListener('input', function () {
    const formatted = parseInt(this.value).toLocaleString('id-ID');
    hargaValue.textContent = `Rp. ${formatted}`;
  });

