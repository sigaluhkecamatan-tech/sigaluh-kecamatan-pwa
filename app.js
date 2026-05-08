const serviceDetails = {
  'Surat Keterangan': {
    title: 'Surat Keterangan',
    description: 'Layanan penerbitan surat keterangan untuk berbagai keperluan administrasi masyarakat.',
    requirements: ['✓ Fotokopi KTP', '✓ Fotokopi KK', '✓ Surat permohonan', '✓ Waktu proses: 1-3 hari kerja', '✓ Biaya: Gratis/Sesuai ketentuan']
  },
  'Data Keluarga': {
    title: 'Data Keluarga',
    description: 'Administrasi data keluarga dan informasi kependudukan untuk keperluan berbagai dokumen penting.',
    requirements: ['✓ Dokumen identitas (KTP/Paspor)', '✓ Surat permohonan', '✓ Fotokopi dokumen pendukung', '✓ Waktu proses: 2-5 hari kerja', '✓ Pelayanan online dan offline tersedia']
  },
  'Surat Tanah': {
    title: 'Surat Tanah',
    description: 'Penerbitan dan verifikasi surat tanah untuk keperluan jual-beli, hibah, dan transaksi tanah lainnya.',
    requirements: ['✓ Sertifikat tanah asli atau fotokopi', '✓ KTP pemilik tanah', '✓ Surat permohonan yang ditandatangani', '✓ Waktu proses: 5-10 hari kerja', '✓ Konsultasi gratis dengan petugas']
  },
  'Izin Usaha': {
    title: 'Izin Usaha',
    description: 'Perizinan usaha tingkat kecamatan untuk mendukung aktivitas bisnis dan UMKM di wilayah Sigaluh.',
    requirements: ['✓ Fotokopi KTP pemilik usaha', '✓ Fotokopi NPWP atau NIB', '✓ Bukti kepemilikan/sewa lokasi usaha', '✓ Rencana bisnis singkat', '✓ Waktu proses: 3-7 hari kerja']
  },
  'Pencatatan Sipil': {
    title: 'Pencatatan Sipil',
    description: 'Layanan pencatatan peristiwa penting seperti kelahiran, pernikahan, perceraian, dan kematian.',
    requirements: ['✓ Dokumen pendukung sesuai jenis peristiwa', '✓ Identitas pribadi yang valid', '✓ Surat permohonan', '✓ Kesaksian (jika diperlukan)', '✓ Waktu proses: 1-5 hari kerja']
  },
  'Mediasi Sengketa': {
    title: 'Mediasi Sengketa',
    description: 'Bantuan mediasi untuk penyelesaian sengketa antarpihak dengan pendampingan petugas kecamatan.',
    requirements: ['✓ Permohonan mediasi dari salah satu pihak', '✓ Dokumen-dokumen yang relevan', '✓ Kesiapan para pihak untuk mediasi', '✓ Proses mediasi: fleksibel sesuai kesepakatan', '✓ Biaya: Gratis untuk masyarakat']
  }
};

function navigateTo(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add('active');
  }
  const navMenu = document.getElementById('navMenu');
  if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
  window.scrollTo(0, 0);
}

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

function showServiceDetail(serviceName) {
  const service = serviceDetails[serviceName];
  if (!service) return;
  const modal = document.getElementById('serviceModal');
  document.getElementById('serviceTitle').textContent = service.title;
  document.getElementById('serviceDescription').textContent = service.description;
  let requirementsHTML = '<h4 style="color: #1e3a8a; margin-top: 1.5rem; margin-bottom: 0.5rem;">Persyaratan & Prosedur:</h4><ul style="margin-left: 1.5rem; line-height: 1.8;">';
  service.requirements.forEach(req => {
    requirementsHTML += `<li>${req}</li>`;
  });
  requirementsHTML += '</ul>';
  document.getElementById('serviceRequirements').innerHTML = requirementsHTML;
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('serviceModal');
  modal.style.display = 'none';
}

window.addEventListener('click', (event) => {
  const modal = document.getElementById('serviceModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[placeholder="Nama Anda"]').value;
    const email = contactForm.querySelector('input[placeholder="Email Anda"]').value;
    const subject = contactForm.querySelector('input[placeholder="Subjek"]').value;
    alert(`Terima kasih ${name}!\n\nPesan Anda telah diterima.\nTim kami akan segera menghubungi Anda di ${email}.`);
    contactForm.reset();
  });
}

window.addEventListener('load', () => {
  navigateTo('beranda');
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => {
        console.log('Service Worker berhasil didaftarkan');
      })
      .catch(error => {
        console.log('Registrasi Service Worker gagal:', error);
      });
  }
});
