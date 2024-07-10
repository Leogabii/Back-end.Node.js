//publoc/js/scripts.js


$(document).ready(function() {
    // Función para listar productos
    function loadProducts() {
        $.get('/api/products', function(data) {
            const productList = $('#product-list');
            productList.empty();
            data.forEach(product => {
                const productRow = `
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.descripcion}</td>
                        <td>${product.precio}</td>
                        <td><img src="${product.img}" alt="${product.name}" width="50"></td>
                        <td>${product.codigo}</td>
                        <td>${product.stock}</td>
                        <td>${product.activo ? 'Sí' : 'No'}</td>
                        <td>${product.categoria_id}</td>
                        <td>
                            <a href="/edit.html?id=${product.id}" class="btn btn-warning">Editar</a>
                            <a href="#" class="btn btn-danger" onclick="deleteProduct(${product.id})">Eliminar</a>
                        </td>
                    </tr>
                `;
                productList.append(productRow);
            });
        });
    }

    // Cargar productos al cargar la página
    loadProducts();

    // Obtener parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');








    // Si estamos en la página de edición, cargar los datos del producto
    if (productId && window.location.pathname.includes('edit.html')) {
        $.get(`/api/products`, function(data) {
            const product = data.find(p => p.id == productId);
            if (product) {
                $('#edit-form').attr('action', `/api/products/${product.id}`);
                $('#name').val(product.name);
                $('#descripcion').val(product.descripcion);
                $('#precio').val(product.precio);
                $('#img').val(product.img);
                $('#codigo').val(product.codigo);
                $('#stock').val(product.stock);
                $('#activo').prop('checked', product.activo);
                $('#categoria_id').val(product.categoria_id);
            }
        });
    }
});

