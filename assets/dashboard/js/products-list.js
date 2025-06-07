const products = [
  {
    name: "Pleated Denim Dress - Đầm cổ đức",
    price: "1.890.000đ",
    image: "assets/images/PleatedDenimDress.webp",
  },
  {
    name: "Petal Breeze Dress - Đầm voan hoa dáng Midi",
    price: "1.590.000đ",
    image: "./assets/images/Petal Breeze Dress - Đầm voan hoa dáng Midi.webp",
  },
  {
    name: "Flower Accent Dress - Đầm xòe Oganza",
    price: "1.590.000đ ",
    image: "./assets/images/Flower Accent Dress - Đầm xòe Oganza.webp",
  },
  {
    name: "Floral Tencel Shirt - Áo Sơ Mi Tencel hoa nổi",
    price: "990.000đ",
    image: "./assets/images/Floral Tencel Shirt - Áo Sơ Mi Tencel hoa nổi.webp",
  },
  {
    name: "Chân váy ren 2 lớp",
    price: "1.390.000đ",
    image: "./assets/images/Chân váy ren 2 lớp.jpg",
  },
  {
    name: "Áo khoác Twill dáng lửng",
    price: "1.490.000đ",
    image: "./assets/images/Áo khoác Twill dáng lửng.webp",
  },
  {
    name: "Đầm hai dây nhún ngực",
    price: "1.690.000đ",
    image: "./assets/images/Đầm hai dây nhún ngực.webp",
  },
  {
    name: "Áo kiểu Ladies",
    price: "1.540.000đ",
    image: "./assets/images/Áo kiểu Ladies.webp",
  },
  {
    name: "Sunpetal Dress – Đầm Tencel hoa vàng pastel",
    price: "1.590.000đ",
    image: "./assets/images/Đầm Tencel hoa vàng pastel.webp",
  },
  {
    name: "Áo thun basic trơn",
    price: "699.000đ",
    image: "./assets/images/Áo thun basic trơn.webp",
  },
  {
    name: "Áo sơ mi Bamboo Regular tay ngắn",
    price: "990.000đ",
    image: "./assets/images/Áo sơ mi Bamboo Regular tay ngắn.jpg",
  },
  {
    name: "Áo thun trơn Regular",
    price: "650.000đ",
    image: "./assets/images/Áo thun trơn Regular.jpg",
  },
  {
    name: "Áo vest Sophia Elegance",
    price: "1.690.000đ",
    image: "./assets/images/Áo vest Sophia Elegance.webp",
  },
  {
    name: "Quần shorts Tweed kẻ",
    price: "790.000đ",
    image: "./assets/images/Quần shorts Tweed kẻ.webp",
  },
  {
    name: "Áo kiểu Ladies",
    price: "1.540.000đ",
    image: "./assets/images/Áo kiểu Ladies.webp",
  },
  {
    name: "Quần ống suông xẻ tà",
    price: "1.090.000đ",
    image: "./assets/images/Quần ống suông xẻ tà.webp",
  },
  {
    name: "Áo thun khuy cài",
    price: "750.000đ",
    image: "./assets/images/Áo thun khuy cài.webp",
  },
  {
    name: "Áo peplum phối ren",
    price: "1.490.000đ",
    image: "./assets/images/peplum.webp",
  },
  {
    name: "Áo tuytsi phối tweed",
    price: "1.290.000đ",
    image: "./assets/images/Parisian Charm Blazer – Áo tuytsi phối tweed.webp",
  },
  {
    name: "Chân váy bút chì cạp cách điệu",
    price: "1.490.000đ",
    image: "./assets/images/Áo khoác Twill dáng lửng.webp",
  },
  {
    name: "Áo vest Sophia Elegance",
    price: "1.690.000đ",
    image: "./assets/images/Áo vest Sophia Elegance.webp",
  },
  {
    name: "Áo sơ mi Bamboo Regular tay ngắn",
    price: "990.000đ",
    image: "./assets/images/Áo sơ mi Bamboo Regular tay ngắn1.jpg",
  },
  {
    name: "Áo sơ mi Bamboo Regular tay ngắn",
    price: "990.000đ",
    image: "./assets/images/Áo sơ mi Bamboo Regular tay ngắn2.jpg ",
  },
];

let currentPage = 1;
let itemsPerPage = 10;
let filteredProducts = [...products];

const container = document.getElementById("productContainer");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("searchInput");
const itemsPerPageSelect = document.getElementById("itemsPerPage");

function renderProducts() {
  container.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  let pageItems;
  if (itemsPerPage >= filteredProducts.length) {
    pageItems = filteredProducts;
  } else {
    pageItems = filteredProducts.slice(start, end);
  }

  if (pageItems.length === 0) {
    container.innerHTML =
      "<p class='text-muted'>Không tìm thấy sản phẩm nào.</p>";
    return;
  }

  pageItems.forEach((product, index) => {
    const col = document.createElement("div");
    col.className = "col-md-6 mb-3";
    col.innerHTML = `
                      <div class="card h-100" style="margin-bottom: 0px;">
                        <div class="row g-0">
                          <div class="col-auto">
                            <img src="${product.image}" alt="${
      product.name
    }" class="img-fluid rounded-start product-thumb" style="width: 200px; height: 100%; object-fit: cover;" />
                          </div>
                          <div class="col">
                            <div class="card-body d-flex flex-column justify-content-between h-100">
                              <div>
                                <h6 class="card-title mb-1">${product.name}</h6>
                                <p class="mb-1 text-muted">Mã: SP0${
                                  index + 1
                                }</p>
                                <p class="mb-1">Giá: <strong>${
                                  product.price
                                }</strong></p>
                                <p class="mb-1">Trạng thái: <span class="badge bg-success">Còn hàng</span></p>
                                <p class="mb-2 text-muted">Danh mục: Thời trang</p>
                              </div>
                              <div class="d-flex justify-content-end gap-2">
                                <a href="edit-product.html" class="btn btn-sm btn-outline-warning" title="Sửa"><i class="bi bi-pencil"></i></a>
                                <a href="#" class="btn btn-sm btn-outline-danger inner-remove" title="Xóa"><i class="bi bi-trash"></i></a>
                                <a href="details-product.html" class="btn btn-sm btn-outline-info" title="Chi tiết"><i class="bi bi-eye"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    `;
    container.appendChild(col);
  });

  renderPagination();
}

function renderPagination() {
  pagination.innerHTML = "";

  if (itemsPerPage >= filteredProducts.length) return; // Không phân trang nếu hiển thị hết

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.className = `page-item ${i === currentPage ? "active" : ""}`;
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.addEventListener("click", function (e) {
      e.preventDefault();
      currentPage = i;
      renderProducts();
    });
    pagination.appendChild(li);
  }
}

searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(keyword)
  );
  currentPage = 1;
  renderProducts();
});

itemsPerPageSelect.addEventListener("change", function () {
  const value = this.value;
  if (value === "all") {
    itemsPerPage = filteredProducts.length;
  } else {
    itemsPerPage = parseInt(value);
  }
  currentPage = 1;
  renderProducts();
});

renderProducts();

// Delete Product in Product List
// const productList = document.querySelector("#productContainer");
// if (productList) {
//   productList.addEventListener("click", (event) => {
//     if (event.target.closest(".inner-remove")) {
//       const confirmed = confirm("Bạn có chắc chắn muốn xóa không?");

//       if (confirmed) {
//         const item = event.target.closest(".col-md-6");
//         productList.removeChild(item);
//       }
//     }
//   });
// }
$(document).ready(function () {
  const $productList = $("#productContainer");

  if ($productList.length) {
    $productList.on("click", ".inner-remove", function (event) {
      event.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
      if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        $(this).closest(".col-md-6").remove();
      }
    });
  }
});



