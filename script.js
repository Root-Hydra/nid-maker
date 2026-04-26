const canvas = document.getElementById('idCardCanvas');
const ctx = canvas.getContext('2d');

// ব্যাকগ্রাউন্ড টেমপ্লেট লোড করা (আপনার দেওয়া ইমেজটি এখানে সোর্স হিসেবে দিন)
const template = new Image();
template.src = 'nid_template.png'; // আপনার ইমেজ ফাইলটির নাম এখানে দিন

function generateCard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(template, 0, 0, 600, 360);

    // ফন্ট স্টাইল সেট করা
    ctx.fillStyle = "black";
    ctx.font = "bold 16px Arial";

    // ইনপুট থেকে ডেটা নেওয়া
    const name = document.getElementById('name').value;
    const nameEng = document.getElementById('nameEng').value;
    const father = document.getElementById('father').value;
    const mother = document.getElementById('mother').value;
    const dob = document.getElementById('dob').value;
    const idNo = document.getElementById('idNo').value;

    // টেক্সট ড্র করা (আপনার টেমপ্লেট অনুযায়ী পজিশন অ্যাডজাস্ট করতে হতে পারে)
    ctx.fillText(name, 210, 115);
    ctx.fillText(nameEng, 210, 155);
    ctx.fillText(father, 210, 195);
    ctx.fillText(mother, 210, 235);
    ctx.fillText(dob, 330, 275);
    
    ctx.fillStyle = "red";
    ctx.font = "bold 18px Arial";
    ctx.fillText(idNo, 330, 315);

    // ছবি লোড করা
    const photo = document.getElementById('photoInput').files[0];
    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                ctx.drawImage(img, 40, 95, 130, 150); // ছবির পজিশন ও সাইজ
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(photo);
    }
}

// ডাউনলোড ফাংশন
document.getElementById('downloadBtn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'ID_Card.png';
    link.href = canvas.toDataURL();
    link.click();
});
