const bioToggle = document.getElementById('bioToggle');
const bioMore = document.getElementById('bioMore');

bioToggle.addEventListener('click', () => {
  const isOpen = bioToggle.getAttribute('aria-expanded') === 'true';
  bioToggle.setAttribute('aria-expanded', String(!isOpen));
  bioMore.hidden = isOpen;
  bioToggle.firstChild.textContent = isOpen ? 'อ่านเพิ่มเติมเกี่ยวกับฉัน ' : 'ย่อข้อมูลเกี่ยวกับฉัน ';
});

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ใส่ลิงก์ Google Drive ของคุณในสองบรรทัดนี้
const driveLinks = {
  certificate: '',
  activity: ''
};
document.querySelectorAll('[data-link]').forEach(link => {
  const url = driveLinks[link.dataset.link];
  if (url) link.href = url;
  else {
    link.addEventListener('click', event => {
      event.preventDefault();
      alert('กรุณาใส่ลิงก์ Google Drive ในไฟล์ script.js ก่อนเผยแพร่เว็บไซต์');
    });
  }
});
