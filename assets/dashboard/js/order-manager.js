
    const searchBox = document.getElementById('searchBox');
    const filterStatus = document.getElementById('filterStatus');
    const sortOption = document.getElementById('sortOption');
    const tableBody = document.getElementById('tableBody');
    const pagination = document.getElementById('pagination');
    const rowsPerPage = 7;
    let currentPage = 1;

    const originalData = [
        { id: 'DH001', shipping: 'Giao nhanh', status: 'Đang xử lý', quantity: 3, total: 450000 },
        { id: 'DH002', shipping: 'Giao tiêu chuẩn', status: 'Đã giao', quantity: 1, total: 150000 },
        { id: 'DH003', shipping: 'Giao nhanh', status: 'Đã hủy', quantity: 2, total: 300000 },
        { id: 'DH004', shipping: 'Giao nhanh', status: 'Đang xử lý', quantity: 2, total: 400000 },
        { id: 'DH005', shipping: 'Giao tiêu chuẩn', status: 'Đã giao', quantity: 5, total: 750000 },
        { id: 'DH006', shipping: 'Giao tiêu chuẩn', status: 'Đã hủy', quantity: 1, total: 100000 },
        { id: 'DH007', shipping: 'Giao nhanh', status: 'Đang xử lý', quantity: 4, total: 600000 },
        { id: 'DH008', shipping: 'Giao tiêu chuẩn', status: 'Đã giao', quantity: 1, total: 200000 },
        { id: 'DH009', shipping: 'Giao nhanh', status: 'Đã giao', quantity: 3, total: 500000 },
        { id: 'DH010', shipping: 'Giao nhanh', status: 'Đang xử lý', quantity: 2, total: 250000 },
        { id: 'DH011', shipping: 'Giao tiêu chuẩn', status: 'Đã hủy', quantity: 2, total: 300000 },
        { id: 'DH012', shipping: 'Giao nhanh', status: 'Đang xử lý', quantity: 1, total: 120000 },
        { id: 'DH013', shipping: 'Giao tiêu chuẩn', status: 'Đã giao', quantity: 3, total: 330000 },
        { id: 'DH014', shipping: 'Giao nhanh', status: 'Đã giao', quantity: 2, total: 400000 },
        { id: 'DH015', shipping: 'Giao tiêu chuẩn', status: 'Đang xử lý', quantity: 4, total: 480000 },
        { id: 'DH016', shipping: 'Giao nhanh', status: 'Đã giao', quantity: 5, total: 900000 },
        { id: 'DH017', shipping: 'Giao nhanh', status: 'Đã hủy', quantity: 1, total: 100000 },
        { id: 'DH018', shipping: 'Giao tiêu chuẩn', status: 'Đang xử lý', quantity: 2, total: 350000 },
        { id: 'DH019', shipping: 'Giao nhanh', status: 'Đã giao', quantity: 3, total: 470000 },
        { id: 'DH020', shipping: 'Giao tiêu chuẩn', status: 'Đã hủy', quantity: 1, total: 90000 },
        { id: 'DH021', shipping: 'Giao tiêu chuẩn', status: 'Đã giao', quantity: 3, total: 310000 },
        { id: 'DH022', shipping: 'Giao nhanh', status: 'Đang xử lý', quantity: 1, total: 200000 },
        { id: 'DH023', shipping: 'Giao nhanh', status: 'Đã giao', quantity: 2, total: 390000 },
        { id: 'DH024', shipping: 'Giao tiêu chuẩn', status: 'Đã hủy', quantity: 1, total: 80000 },
        { id: 'DH025', shipping: 'Giao tiêu chuẩn', status: 'Đã giao', quantity: 4, total: 520000 },
    ];

    function getFilteredSortedRows() {
        const keyword = searchBox.value.toLowerCase();
        const status = filterStatus.value;
        const sort = sortOption.value;

        let filtered = originalData.filter(row => {
            return row.id.toLowerCase().includes(keyword) && (!status || row.status === status);
        });

        if (sort === 'total') {
            filtered.sort((a, b) => a.total - b.total);
        } else if (sort === 'totalDesc') {
            filtered.sort((a, b) => b.total - a.total);
        } else if (sort === 'id') {
            filtered.sort((a, b) => a.id.localeCompare(b.id));
        } else if (sort === 'idDesc') {
            filtered.sort((a, b) => b.id.localeCompare(a.id));
        }

        return filtered;
    }

    function renderTable(page = 1) {
        currentPage = page;
        const rows = getFilteredSortedRows();
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const visibleRows = rows.slice(start, end);

        tableBody.innerHTML = '';
        visibleRows.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
          <td>${row.id}</td>
          <td>${row.shipping}</td>
          <td>${row.status}</td>
          <td>${row.quantity}</td>
          <td>${row.total}</td>
          <td class="action-buttons">
            <button onclick="editOrder('${row.id}')"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="delete" onclick="deleteOrder(this)"><i class="fa-solid fa-trash"></i></button>
          </td>
        `;
            tableBody.appendChild(tr);
        });

        renderPagination(rows.length);
    }

    function renderPagination(totalItems) {
        const totalPages = Math.ceil(totalItems / rowsPerPage);
        let html = '';
        for (let i = 1; i <= totalPages; i++) {
            html += `<button onclick="renderTable(${i})" style="margin:0 5px; padding:6px 12px;border:none; outline:none; border-radius: 5px; ${i === currentPage ? 'background:#f05417;color:white;' : ''}">${i}</button>`;
        }
        pagination.innerHTML = html;
    }

    function editOrder(orderId) {
        alert('Chức năng chỉnh sửa đơn hàng ' + orderId + ' chưa được triển khai.');
    }

    function deleteOrder(button) {
        const row = button.closest('tr');
        const id = row.cells[0].innerText;
        if (confirm('Bạn có chắc chắn muốn xóa đơn hàng ' + id + ' không?')) {
            const index = originalData.findIndex(item => item.id === id);
            if (index > -1) originalData.splice(index, 1);
            renderTable(currentPage);
        }
    }

    searchBox.addEventListener('input', () => renderTable(1));
    filterStatus.addEventListener('change', () => renderTable(1));
    sortOption.addEventListener('change', () => renderTable(1));

    renderTable();
