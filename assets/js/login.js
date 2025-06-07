document.addEventListener('DOMContentLoaded', () => {
  // Lấy các ô input trong .auth__login-content-input
  const emailInput = document.querySelector('.auth__login-content-input input[placeholder="Email"]');
  const passwordInput = document.querySelector('.auth__login-content-input input[placeholder="Mật khẩu"]');
  const loginBtn = document.querySelector('.auth__login-btn');

  // Tạo và chèn phần tử cảnh báo ngay sau từng ô input
  const emailWarning = document.createElement('div');
  emailWarning.className = 'warning-message text-red-500 text-xs mt-1';
  emailInput.insertAdjacentElement('afterend', emailWarning);

  const passwordWarning = document.createElement('div');
  passwordWarning.className = 'warning-message text-red-500 text-xs mt-1';
  passwordInput.insertAdjacentElement('afterend', passwordWarning);

  // Hàm kiểm tra email hợp lệ
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  // Hàm kiểm tra mật khẩu mạnh
  function isStrongPassword(password) {
    const minLength = 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*?_~]/.test(password);
    return password.length >= minLength && hasLetter && hasNumber && hasSpecialChar;
  }

  // Hàm hiển thị/thêm cảnh báo
  function showWarning(input, warningElement, message) {
    input.style.outline = '2px solid #ef4444';
    input.style.border = '1px solid #ef4444';
    warningElement.textContent = message;
    warningElement.style.display = 'block';
  }

  // Hàm xóa cảnh báo
  function clearWarning(input, warningElement) {
    input.style.outline = 'none';
    input.style.border = '1px solid #d1d5db';
    warningElement.textContent = '';
    warningElement.style.display = 'none';
  }

  // Xử lý khi nhập liệu
  emailInput.addEventListener('input', () => {
    if (!isValidEmail(emailInput.value)) {
      showWarning(emailInput, emailWarning, 'Vui lòng nhập đúng định dạng email (ví dụ: example@domain.com)');
    } else {
      clearWarning(emailInput, emailWarning);
    }
  });

  passwordInput.addEventListener('input', () => {
    if (!isStrongPassword(passwordInput.value)) {
      showWarning(passwordInput, passwordWarning, 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ, số và ký tự đặc biệt (!@#$%^&*?_~)');
    } else {
      clearWarning(passwordInput, passwordWarning);
    }
  });

  // Xử lý khi nhấn nút Đăng nhập
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let isValid = true;

    if (!isValidEmail(emailInput.value)) {
      showWarning(emailInput, emailWarning, 'Vui lòng nhập đúng định dạng email (ví dụ: example@domain.com)');
      isValid = false;
    } else {
      clearWarning(emailInput, emailWarning);
    }

    if (!isStrongPassword(passwordInput.value)) {
      showWarning(passwordInput, passwordWarning, 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ, số và ký tự đặc biệt (!@#$%^&*?_~)');
      isValid = false;
    } else {
      clearWarning(passwordInput, passwordWarning);
    }

    if (isValid) {
      alert('Đăng nhập thành công!');
    }
  });
});