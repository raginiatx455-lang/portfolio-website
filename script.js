function getUserInput() {
    const fullName = document.getElementById('fullName').value.trim();
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const website = document.getElementById('website').value.trim();
    const linkedin = document.getElementById('linkedin').value.trim();
    const photoInput = document.getElementById('photo');

    if (!fullName || !description || !photoInput.files[0]) {
        alert('Please fill in your name, description, and upload a photo.');
        return null;
    }

    const photoURL = URL.createObjectURL(photoInput.files[0]);

    return {
        fullName,
        title: title || 'Professional',
        description,
        email,
        phone,
        website,
        linkedin,
        photoURL
    };
}

function previewPortfolio() {
    const user = getUserInput();
    if (!user) return;

    const preview = document.getElementById('portfolioPreview');
    preview.innerHTML = `
        <div class="portfolio-card">
            <div class="profile-header">
                <img src="${user.photoURL}" alt="${user.fullName}" class="profile-image" />
                <div>
                    <h3 class="profile-name">${user.fullName}</h3>
                    <p class="profile-title">${user.title}</p>
                </div>
            </div>

            <div class="profile-body">
                <p>${user.description}</p>
            </div>

            <div class="contact-list">
                ${user.email ? `<div class="contact-item">Email: ${user.email}</div>` : ''}
                ${user.phone ? `<div class="contact-item">Phone: ${user.phone}</div>` : ''}
                ${user.website ? `<div class="contact-item">Website: <a href="${user.website}" target="_blank" rel="noreferrer">${user.website}</a></div>` : ''}
                ${user.linkedin ? `<div class="contact-item">LinkedIn: <a href="${user.linkedin}" target="_blank" rel="noreferrer">${user.linkedin}</a></div>` : ''}
            </div>
        </div>
    `;

    document.getElementById('previewSection').style.display = 'block';
}

function downloadPortfolio() {
    const user = getUserInput();
    if (!user) return;

    const preview = document.getElementById('portfolioPreview');
    preview.innerHTML = `
        <div class="portfolio-card">
            <div class="profile-header">
                <img src="${user.photoURL}" alt="${user.fullName}" class="profile-image" />
                <div>
                    <h3 class="profile-name">${user.fullName}</h3>
                    <p class="profile-title">${user.title}</p>
                </div>
            </div>

            <div class="profile-body">
                <p>${user.description}</p>
            </div>

            <div class="contact-list">
                ${user.email ? `<div class="contact-item">Email: ${user.email}</div>` : ''}
                ${user.phone ? `<div class="contact-item">Phone: ${user.phone}</div>` : ''}
                ${user.website ? `<div class="contact-item">Website: ${user.website}</div>` : ''}
                ${user.linkedin ? `<div class="contact-item">LinkedIn: ${user.linkedin}</div>` : ''}
            </div>
        </div>
    `;

    const printWindow = window.open('', '_blank', 'width=900,height=700');
    printWindow.document.write(`
        <html>
            <head>
                <title>${user.fullName} Portfolio</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 30px;
                        color: #111827;
                        background: #fff;
                    }
                    .portfolio-card { display: flex; flex-direction: column; gap: 20px; }
                    .profile-header { display: flex; align-items: center; gap: 20px; }
                    .profile-image { width: 130px; height: 130px; border-radius: 50%; object-fit: cover; border: 4px solid #dbeafe; }
                    .profile-name { margin: 0; font-size: 2rem; }
                    .profile-title { margin: 8px 0 0; color: #4b5563; font-weight: bold; }
                    .profile-body { line-height: 1.7; }
                    .contact-list { display: flex; flex-wrap: wrap; gap: 12px; }
                    .contact-item { background: #eff6ff; color: #1d4ed8; border-radius: 999px; padding: 8px 12px; }
                    a { color: #1d4ed8; text-decoration: none; }
                </style>
            </head>
            <body>
                <div class="portfolio-card">
                    <div class="profile-header">
                        <img src="${user.photoURL}" alt="${user.fullName}" class="profile-image" />
                        <div>
                            <h1 class="profile-name">${user.fullName}</h1>
                            <p class="profile-title">${user.title}</p>
                        </div>
                    </div>
                    <div class="profile-body">
                        <p>${user.description}</p>
                    </div>
                    <div class="contact-list">
                        ${user.email ? `<div class="contact-item">Email: ${user.email}</div>` : ''}
                        ${user.phone ? `<div class="contact-item">Phone: ${user.phone}</div>` : ''}
                        ${user.website ? `<div class="contact-item">Website: ${user.website}</div>` : ''}
                        ${user.linkedin ? `<div class="contact-item">LinkedIn: ${user.linkedin}</div>` : ''}
                    </div>
                </div>
            </body>
        </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    document.getElementById('previewSection').style.display = 'block';
}

function resetForm() {
    document.getElementById('fullName').value = '';
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('website').value = '';
    document.getElementById('linkedin').value = '';
    document.getElementById('photo').value = '';
    document.getElementById('portfolioPreview').innerHTML = '';
    document.getElementById('previewSection').style.display = 'none';
}
