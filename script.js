
window.GWITY = {
  quickGuide: (e) => {
    e.preventDefault();
    const q = e.target.querySelector('input').value.trim();
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    const tips = q ? `We'll tailor a plan for: "${q}".` : "We'll tailor a plan for you.";
    alert(`Thanks! ${tips} Book a free call in the Contact section.`);
    return false;
  },
  sendMessage: (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get('name');
    const email = data.get('email');
    const msg = data.get('message');
    // Replace with your backend or form service endpoint
    window.location.href = `mailto:hello@gwity.example?subject=Inquiry from ${encodeURIComponent(name)}&body=Email: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(msg)}`;
    return false;
  }
};
document.getElementById('year').textContent = new Date().getFullYear();
