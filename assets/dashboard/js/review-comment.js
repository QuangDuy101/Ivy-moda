const reviewsList = document.getElementById('reviewsList');
const searchInput = document.getElementById('searchInput');
const filterRating = document.getElementById('filterRating');

const reviewsPerPage = 5;
let currentPage = 1;

// ✅ Lưu danh sách review gốc trong một mảng để thao tác được
let allReviews = Array.from(document.querySelectorAll('.review-card'));

function renderReviews() {
  const keyword = searchInput.value.toLowerCase();
  const selectedRating = filterRating.value;

  const filtered = allReviews.filter(card => {
    const name = card.querySelector('.user-name').textContent.toLowerCase();
    const comment = card.querySelector('.review-comment').textContent.toLowerCase();
    const stars = card.querySelectorAll('.star-rating .fas.fa-star').length;
    const matchesKeyword = name.includes(keyword) || comment.includes(keyword);
    const matchesRating = selectedRating === 'all' || stars === +selectedRating;
    return matchesKeyword && matchesRating;
  });

  const totalPages = Math.ceil(filtered.length / reviewsPerPage);
  if (currentPage > totalPages) currentPage = totalPages || 1;

  const start = (currentPage - 1) * reviewsPerPage;
  const end = start + reviewsPerPage;

  reviewsList.innerHTML = '';
  filtered.slice(start, end).forEach(card => reviewsList.appendChild(card));
  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const existing = document.getElementById('pagination');
  if (existing) existing.remove();

  const nav = document.createElement('div');
  nav.id = 'pagination';
  nav.style.textAlign = 'center';
  nav.style.marginTop = '20px';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.style.margin = '0 5px';
    btn.disabled = i === currentPage;
    btn.onclick = () => {
      currentPage = i;
      renderReviews();
    };
    nav.appendChild(btn);
  }

  reviewsList.parentElement.appendChild(nav);
}

function approveReview(id) {
  const btn = document.querySelector(`.review-card[data-id="${id}"] .approve-btn`);
  if (btn) {
    btn.textContent = 'Đã phê duyệt';
    btn.disabled = true;
    btn.style.backgroundColor = 'gray';
  }
}

function deleteReview(id) {
  const index = allReviews.findIndex(card => card.dataset.id === id.toString());
  if (index !== -1) {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa đánh giá này?');
    if (confirmDelete) {
      allReviews.splice(index, 1); // Xóa khỏi mảng
      renderReviews();             // Cập nhật hiển thị
    }
  }
}

// Gán các hàm để gọi từ HTML
window.approveReview = approveReview;
window.deleteReview = deleteReview;

// Sự kiện tìm kiếm và lọc
searchInput.addEventListener('input', () => {
  currentPage = 1;
  renderReviews();
});

filterRating.addEventListener('change', () => {
  currentPage = 1;
  renderReviews();
});

// Khởi tạo ban đầu
renderReviews();
