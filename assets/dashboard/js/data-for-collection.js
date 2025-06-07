const collections = [
    {
        "id": "1",
        "name": "URBAN PASSION",
        "description": "Giữa nhịp sống tất bật của đô thị, hình ảnh người phụ nữ hiện đại vẫn luôn nổi bật – tự tin và đầy khí chất. Từ cảm hứng ấy, IVY moda ra mắt BST Urban Passion để đồng hành cùng hành trình đầy cảm hứng và khát khao khẳng định dấu ấn riêng của phái đẹp giữa dòng chảy không ngừng của cuộc sống.",
        "image": "abc",
        "products": ["1", "2", "3", "4"]
    },
    {
        "id": "2",
        "name": "SHE MOVES",
        "description": "Giống như những chuyến tàu không ngừng lăn bánh giữa lòng thành phố, người phụ nữ hiện đại cũng luôn tiến về phía trước – theo đuổi đam mê, vượt qua thử thách và khẳng định dấu ấn cá nhân mỗi ngày. Lấy cảm hứng từ chính những hành trình ấy, IVY moda ra mắt bộ sưu tập “She Moves” – làn gió mới trong dòng thời trang công sở hiện đại, mang tinh thần tự do và bản lĩnh của phái đẹp.",
        "image": "abc",
        "products": ["1", "2", "3", "4"]
    },
    {
        "id": "3",
        "name": "SUMMER TINT",
        "description": "Mở đầu mùa nghỉ lễ rực rỡ, IVY moda ra mắt bộ sưu tập Summer Tint như một bản hòa ca, mang theo sắc thái tươi mới và thư thái của mùa nghỉ dưỡng. Lấy cảm hứng từ những khoảnh khắc rực rỡ của mùa hè, BST lựa chọn hai gam màu chủ đạo: vàng và trắng để khéo léo chuyển tải tinh thần tự do và lạc quan vào từng thiết kế.",
        "image": "abc",
        "products": ["1", "2", "3", "4"]
    },
    {
        "id": "4",
        "name": "LEAFLINE",
        "description": "Lấy cảm hứng từ hình ảnh chiếc lá mảnh mai, thanh thoát, từng đường cắt may trong BST Leafline đều được trau chuốt gọn gàng, mang đến những trang phục vừa tôn dáng, vừa dễ ứng dụng trong môi trường công sở.",
        "image": "abc",
        "products": ["1", "2", "3", "4"]
    },
    {
        "id": "5",
        "name": "DẠ VŨ",
        "description": "Như một giai điệu nhẹ nhàng len lỏi giữa cuộc sống hối hả, những thiết kế trong BST lần này được IVY moda mang đến các quý cô công sở hiện đại như một người bạn đồng hành - vừa thanh lịch, chỉn chu, vừa thoải mái để cùng nàng tự tin sải bước suốt cả ngày. Từng thiết kế đều sở hữu đường cắt may tối giản nhưng đầy dụng ý để làm nổi bật những chi tiết ren, hoa điểm xuyết trên nền vải, làm nên những bộ trang phục lãng mạn mà không kém phần sắc sảo, quyến rũ.",
        "image": "abc",
        "products": ["1", "2", "3", "4"]
    },
    {
        "id": "6",
        "name": "ROSIE CRUSH",
        "description": "Vẻ đẹp của sắc hồng không chỉ nằm ở sự ngọt ngào mà còn ở cách gam màu ấy khơi gợi nét quyến rũ ở phái đẹp. Với BST Rosie Crush, IVY moda đã khéo léo đưa sức hút độc bản ấy vào từng thiết kế, tạo nên nét chấm phá đầy tinh tế cho tủ đồ của quý cô công sở hiện đại. Từ gam pastel dịu nhẹ đến sắc magenta quyến rũ, Rosie Crush vừa mang vẻ e ấp, ngọt ngào, vừa có chút say mê, lãng mạn như mang theo mọi cung bậc cảm xúc của màu hồng. Được may từ chất vải mềm nhẹ, thoáng mát, mỗi thiết kế ấy đều nâng niu dáng vẻ yêu kiều của nàng, tôn lên đường nét một cách tự nhiên và tinh tế nhất.",
        "image": "abc",
        "products": ["1", "2", "3", "4"]
    },
    {
        "id": "7",
        "name": "BLUE SONATA",
        "description": "Lấy cảm hứng từ những bản nhạc du dương và sắc xanh bất tận của bầu trời, BST Blue Sonata mở ra một không gian đầy chất thơ và tinh tế. Hãy cùng IVY moda khám phá ngay bản giao hưởng màu xanh mát. Để mang đến cảm giác dịu mát, mới mẻ cho mùa Xuân Hè 2025, BST lần này của IVY moda lựa chọn sắc xanh dương làm chủ đạo, đồng thời kết hợp cùng các tông màu trung tính như nâu và trắng để tạo nên một bảng màu vừa thời thượng, vừa mang tính ứng dụng cao cho quý cô công sở.",
        "image": "abc",
        "products": ["1", "2", "3", "4"]
    },
    {
        "id": "8",
        "name": "LILAS DREAM",
        "description": "Lấy cảm hứng từ những đóa hoa xuân nở rộ, BST lần này thể hiện tinh thần tôn vinh tính nữ qua loạt thiết kế nhã nhặn dành riêng cho các quý cô công sở hiện đại! Giờ đây, vẻ đẹp của người phụ nữ không chỉ thể hiện qua đường nét uyển chuyển mà còn đến từ cảm giác tự tin, thoải mái khi nàng được khoác lên mình những bộ cánh xinh đẹp nhất. Với gam tím chủ đạo được làm mới với đủ sắc thái từ nhẹ nhàng đến những tông trầm sâu lắng, các thiết kế trong BST Lilas Dream mang phong cách tối giản nhưng vẫn đem đến dấu ấn khó phai nhờ phom dáng chỉn chu và đường may vô cùng tinh xảo.",
        "image": "abc",
        "products": ["1", "2", "3", "4"]
    },
]