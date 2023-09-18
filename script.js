// import { dataInfo } from "./data.js";

// const data = JSON.parse(dataInfo);
// console.log(data);
// const content = document.querySelector(".content");

// data.forEach(({ id, name, age, url }) => {
//     const div = document.createElement("div");
//     div.classList.add("card");
//     div.style.display = `inline-block`;
//     div.style.marginRight = `10px`;
//     content.appendChild(div);

//     const img = document.createElement("img");
//     img.classList.add("card-top");
//     img.src = url;
//     img.width = 300;
//     div.appendChild(img);

//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");
//     div.appendChild(cardBody);

//     const idPara = document.createElement("p");
//     idPara.classList.add("card-text");
//     idPara.textContent = `id: ${id}`;
//     cardBody.appendChild(idPara);

//     const title = document.createElement("h5");
//     title.classList.add("card-title");
//     title.textContent = name;
//     cardBody.appendChild(title);

//     const subtitle = document.createElement("h6");
//     subtitle.classList.add("card-subtitle");
//     subtitle.textContent = `Age: ${age}`;
//     cardBody.appendChild(subtitle);
// });
//_____________________________________________________________________________________________________

async function fetchData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Не удалось получить данные из data.json');
        }

        const data = await response.json();
        const productBox = document.querySelector('.product_box'); // Обратите внимание, что я исправил селектор на '.product_box'

        data.forEach(({ name, image, price, color, size, quantity }) => {
            const productEl = `
                <div class="product">
                    <button class="btn_del">X</button>
                    <div class="content">
                        <img class="product_img" src="${image}" alt="${name}">
                        <div class="product_desc">
                            <h2 class="product_name">${name}</h2>
                            <p class="product_price">Price: <span>${price}</span></p>
                            <p class="product_color">Color: ${color}</p>
                            <p class="product_size">Size: ${size}</p>
                            <div class="product_qty">
                                <label class="input_label">Quantity</label>
                                <input type="text" class="input_quantity" value="${quantity}"/>  
                            </div>
                        </div>
                    </div>
                </div>`;

            productBox.insertAdjacentHTML('beforeend', productEl);
        });
    
        const btns = document.querySelectorAll('.btn_del');
        btns.forEach (el => {
            el.addEventListener('click', () => {
                const product = el.closest('.product');
                product.remove();
            });
        });  
    } catch (error) {
        console.error(error);
    }
}

// Вызов функции для загрузки данных и создания элементов на странице
fetchData();


// HomeWork В блоке Featured Items небходимо реализовать шаблон товаров.

// Для этого необходимо создать json формат данных по всем товарам.

// Из этого файла сформировать блок Featured Items.



// async function fetchData() { 
//     try {
//         const response = await fetch('data.json');
//         if (!response.ok) {
//             throw new Error('Не удалось получить данные из data.json');
//         }

//         const data = await response.json();
//         const featuredItems = document.querySelector('.featured-items'); // Выбор блока Featured Items

//         data.forEach(({ name, image, price, color, size, quantity }) => {
//             const productEl = `
//                 <div class="product">
//                     <button class="btn_del">Удалить</button>
//                     <div class="content">
//                         <img class="product_img" src="${image}" alt="${name}">
//                         <div class="product_desc">
//                             <h2 class="product_name">${name}</h2>
//                             <p class="product_price">Price: <span>${price}</span></p>
//                             <p class="product_color">Color: ${color}</p>
//                             <p class="product_size">Size: ${size}</p>
//                             <div class="product_qty">
//                                 <label class="input_label">Quantity</label>
//                                 <input type="text" class="input_quantity" value="${quantity}"/>  
//                             </div>
//                         </div>
//                     </div>
//                 </div>`;

//             featuredItems.insertAdjacentHTML('beforeend', productEl);
//         });

//         const btns = document.querySelectorAll('.btn_del');
//         btns.forEach(el => {
//             el.addEventListener('click', () => {
//                 const product = el.closest('.product');
//                 product.remove();
//             });
//         });
//     } catch (error) {
//         console.error(error);
//     }
// }

// // Вызов функции для загрузки данных и создания товаров на странице
// fetchData();


