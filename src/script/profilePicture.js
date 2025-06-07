  const uploadInput = document.getElementById('uploadInput');
    const profileImage = document.getElementById('profileImage');
    const changePicBtn = document.getElementById('changePicBtn');

    const inputs = document.querySelectorAll('.profile-info input, .profile-info select');
    const editBtn = document.getElementById('editBtn');
    const saveBtn = document.getElementById('saveBtn');

    // Enable editing
    editBtn.addEventListener('click', () => {
      inputs.forEach(input => input.disabled = false);
      changePicBtn.disabled = false;
      editBtn.style.display = 'none';
      saveBtn.style.display = 'inline-block';
    });

    // Save data and disable inputs
    saveBtn.addEventListener('click', () => {
      inputs.forEach(input => input.disabled = true);
      changePicBtn.disabled = true;
      saveBtn.style.display = 'none';
      editBtn.style.display = 'inline-block';
      alert('Profile saved successfully! (simulasi)');
    });

    // Ganti foto profil
    uploadInput.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });