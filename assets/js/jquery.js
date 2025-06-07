// Add Favorite
$(() => {
  $(".product-item .inner-meta .inner-favorite i").click((e) => {
    $(e.target).toggleClass("favorite-active")
  })
})
// End Add Favorite

// Change Icon Box Filter
const $boxFilter = $(".box-filter");
if ($boxFilter.length) {
  $boxFilter.find("li a").on("click", function () {
    $(this).toggleClass("active");
  });
}
// End Change Icon Box Filter

// Cart Detail
const $boxCartDetail = $(".cart-detail");
if ($boxCartDetail.length) {
  // Cập nhật số lượng và giá
  const updateQuantity = () => {
    const listInputNumber = $boxCartDetail.find(".quantity input");
    const listNumber = [];

    listInputNumber.each(function () {
      const number = parseInt($(this).val()) || 0;
      listNumber.push(number);
    });

    const totalProduct = listNumber[0] + listNumber[1];
    const totalPrice = listNumber[0] * 1790000 + listNumber[1] * 1790000;

    $boxCartDetail.find(".inner-title span").html(`${totalProduct} Sản Phẩm`);
    $boxCartDetail.find(".cart-summary-item div").html(totalProduct);
    $boxCartDetail.find(".inner-total-price").each(function () {
      $(this).html(totalPrice.toLocaleString("vi-VN") + "đ");
    });
  };

  // Xử lý click nút tăng số lượng
  $boxCartDetail.find(".section-5-up").on("click", function () {
    const $parent = $(this).closest(".quantity");
    const $input = $parent.find("input");
    let number = parseInt($input.val()) || 0;
    $input.val(number + 1);
    updateQuantity();
  });

  // Xử lý click nút giảm số lượng
  $boxCartDetail.find(".section-5-down").on("click", function () {
    const $parent = $(this).closest(".quantity");
    const $input = $parent.find("input");
    let number = parseInt($input.val()) || 0;
    if (number > 0) {
      $input.val(number - 1);
    }
    updateQuantity();
  });
}
// End Cart Detail

// Open Box Filter Mobile
const $buttonFilterMobile = $(".inner-button-filter");

if ($buttonFilterMobile.length) {
  const $overlayFilter = $(".overlay-filter");
  const $boxFilter = $(".box-filter");

  $buttonFilterMobile.on("click", function () {
    $boxFilter.addClass("active");
    $overlayFilter.addClass("active");
  });

  $overlayFilter.on("click", function () {
    $boxFilter.removeClass("active");
    $overlayFilter.removeClass("active");
  });
}

// End Open Box Filter Mobile