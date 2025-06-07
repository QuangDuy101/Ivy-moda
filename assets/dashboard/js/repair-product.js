document.getElementById("editProductForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn submit mặc định trước

  // Lấy giá trị
  const fields = {
    productName: document.getElementById("productName").value.trim(),
    productCode: document.getElementById("productCode").value.trim(),
    productPrice: document.getElementById("productPrice").value,
    productCategory: document.getElementById("productCategory").value,
    productMaterial: document.getElementById("productMaterial").value.trim(),
    productColor: document.getElementById("productColor").value.trim(),
    productSize: document.getElementById("productSize").value.trim(),
    productStatus: document.getElementById("productStatus").value,
    productQuantity: document.getElementById("productQuantity").value,
    productImage: document.getElementById("productImage").files,
    productDescription: document.querySelector(".tox-edit-area iframe")?.contentDocument?.body?.innerText?.trim()
  };

  // Xóa thông báo lỗi cũ
  Object.keys(fields).forEach(id => {
    const errorElement = document.getElementById(`error-${id}`);
    if (errorElement) errorElement.innerText = "";
  });

  let isValid = true;

  // Kiểm tra từng trường
  if (!fields.productName) {
    showError("productName", "Vui lòng nhập tên sản phẩm");
    isValid = false;
  }

  if (!fields.productCode) {
    showError("productCode", "Vui lòng nhập mã sản phẩm");
    isValid = false;
  }

  if (!fields.productPrice || parseFloat(fields.productPrice) <= 0) {
    showError("productPrice", "Giá sản phẩm phải là số dương");
    isValid = false;
  }

  if (fields.productCategory === "Chọn danh mục") {
    showError("productCategory", "Vui lòng chọn danh mục");
    isValid = false;
  }

  if (!fields.productMaterial) {
    showError("productMaterial", "Vui lòng nhập chất liệu");
    isValid = false;
  }

  if (!fields.productColor) {
    showError("productColor", "Vui lòng nhập màu sắc");
    isValid = false;
  }

  if (!fields.productSize) {
    showError("productSize", "Vui lòng nhập kích cỡ");
    isValid = false;
  }

  if (!fields.productQuantity || parseInt(fields.productQuantity) <= 0) {
    showError("productQuantity", "Số lượng phải là số dương");
    isValid = false;
  }

  if (!fields.productImage || fields.productImage.length === 0) {
    showError("productImage", "Vui lòng chọn ảnh sản phẩm");
    isValid = false;
  }

  if (!fields.productDescription) {
    showError("productDescription", "Vui lòng nhập mô tả sản phẩm");
    isValid = false;
  }

  // Nếu hợp lệ thì cho submit
  if (isValid) {
    alert("Thêm sản phẩm thành công");
    this.submit(); // Gửi form nếu không có lỗi
    window.location.href = "manage-product.html";
  }

  function showError(id, message) {
    const errorDiv = document.getElementById(`error-${id}`);
    if (errorDiv) {
      errorDiv.innerText = message;
    }
  }
});

/**
   * Initiate TinyMCE Editor
   */

  const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

  tinymce.init({
    selector: 'textarea.tinymce-editor',
    plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
    editimage_cors_hosts: ['picsum.photos'],
    menubar: 'file edit view insert format tools table help',
    toolbar: "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
    autosave_ask_before_unload: true,
    autosave_interval: '30s',
    autosave_prefix: '{path}{query}-{id}-',
    autosave_restore_when_empty: false,
    autosave_retention: '2m',
    image_advtab: true,
    link_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_class_list: [{
        title: 'None',
        value: ''
      },
      {
        title: 'Some class',
        value: 'class-name'
      }
    ],
    importcss_append: true,
    file_picker_callback: (callback, value, meta) => {
      /* Provide file and text for the link dialog */
      if (meta.filetype === 'file') {
        callback('https://www.google.com/logos/google.jpg', {
          text: 'My text'
        });
      }

      /* Provide image and alt text for the image dialog */
      if (meta.filetype === 'image') {
        callback('https://www.google.com/logos/google.jpg', {
          alt: 'My alt text'
        });
      }

      /* Provide alternative source and posted for the media dialog */
      if (meta.filetype === 'media') {
        callback('movie.mp4', {
          source2: 'alt.ogg',
          poster: 'https://www.google.com/logos/google.jpg'
        });
      }
    },
    height: 600,
    image_caption: true,
    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
    noneditable_class: 'mceNonEditable',
    toolbar_mode: 'sliding',
    contextmenu: 'link image table',
    skin: useDarkMode ? 'oxide-dark' : 'oxide',
    content_css: useDarkMode ? 'dark' : 'default',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
  });