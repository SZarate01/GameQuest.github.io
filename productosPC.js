document.addEventListener('DOMContentLoaded', function() {
  var productList = document.querySelector('.product-list');
  var productContainer = document.getElementById('product-container');

  productList.addEventListener('click', function(event) {
    var target = event.target;

    if (target.tagName === 'LI') {
      var category = target.getAttribute('data-category');

      if (category) {
        showProducts(category);
      }
    }
  });
  
  function showProducts(category) {
    var products = [];
  
    if (category === 'pc') {
      products = [
        { image: 'tarjetas_RAM.png', text: 'Tarjetas RAM' },
        { image: 'ventiladores.png', text: 'Ventiladores' },
        { image: 'juegosPC.png', text: 'Juegos' },
        { image: 'perifericos.png', text: 'Periféricos' },
        { image: 'tarjeta_grafica.png', text: 'Tarjetas Gráficas' },
        { image: 'tarjeta_madre.png', text: 'Tarjetas Madre' }
      ];
    } else if (category === 'playstation') {
      products = [
        { image: 'nodisponible.png', text: 'Capturadoras' },
        { image: 'nodisponible.png', text: 'Juegos' },
        { image: 'nodisponible.png', text: 'Repuestos' },
        { image: 'nodisponible.png', text: 'Mandos' },
        { image: 'nodisponible.png', text: 'Almacenamiento' },
        { image: 'nodisponible.png', text: 'Limpiadores' }
      ];
    } else if (category === 'xbox') {
      products = [
        { image: 'nodisponible.png', text: 'Capturadoras' },
        { image: 'nodisponible.png', text: 'Juegos' },
        { image: 'nodisponible.png', text: 'Repuestos' },
        { image: 'nodisponible.png', text: 'Mandos' },
        { image: 'nodisponible.png', text: 'Almacenamiento' },
        { image: 'nodisponible.png', text: 'Limpiadores' }
      ];
    } else if (category === 'nintendo') {
      products = [
        { image: 'nodisponible.png', text: 'Repuestos' },
        { image: 'nodisponible.png', text: 'Juegos' },
        { image: 'nodisponible.png', text: 'Capturadoras' },
        { image: 'nodisponible.png', text: 'Consolas' },
        { image: 'nodisponible.png', text: 'Joycons' },
        { image: 'nodisponible.png', text: 'Amiibos' }
      ];
    } else if (category === 'mercancia') {
      products = [
        { image: 'nodisponible.png', text: 'Figuras' },
        { image: 'nodisponible.png', text: 'Gorros' },
        { image: 'proximamente.png', text: 'Proximamente' },
        { image: 'nodisponible.png', text: 'Camisas' },
        { image: 'nodisponible.png', text: 'Polos' },
        { image: 'nodisponible.png', text: 'Chaquetas'}
      ];
    }
  
    productContainer.innerHTML = '';
  
    var row = document.createElement('div');
    row.className = 'product-row';
  
    for (var i = 0; i < products.length; i++) {
      var productBox = document.createElement('div');
      productBox.className = 'product-box';
  
      var productImage = document.createElement('img');
      productImage.src = products[i].image;
      productImage.classList.add('zoom-image');
  
      var productText = document.createElement('div');
      productText.textContent = products[i].text;
  
      productImage.onclick = function() {
        window.location.href = 'nueva_pagina.html';
      };
  
      if (i < 3) {
        row.appendChild(productBox);
      } else {
        var rowIndex = Math.floor(i / 3);
        var rowContainer = productContainer.getElementsByClassName('product-row')[rowIndex];
        if (!rowContainer) {
          rowContainer = document.createElement('div');
          rowContainer.className = 'product-row';
          productContainer.appendChild(rowContainer);
        }
        rowContainer.appendChild(productBox);
      }
  
      productBox.appendChild(productImage);
      productBox.appendChild(productText);
    }
  
    productContainer.appendChild(row);
  }  
});
