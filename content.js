let BeansImages = [
    "https://people.com/thmb/YtxE-tasdl1-RWw2dOt9DxvnA0k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/gettyimages-173652175-2000-5418a94083a34888886e11bf7895fd22.jpg",
    "https://thecozycook.com/wp-content/uploads/2022/04/Baked-Beans-f.jpg",
    "https://images.heb.com/is/image/HEBGrocery/000120104-1",
    "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2011/2/21/1298289384198/Baked-beans-007.jpg?width=465&quality=85&dpr=1&s=none",
    "https://sweetcsdesigns.com/wp-content/uploads/2021/05/slow-cooker-baked-beans-Recipe-Picture-1-720x540.jpg"
];




const imgs = document.getElementsByTagName("img")
for (let i =0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * BeansImages.length);
    imgs[i].src = BeansImages[randomImg];

}

const headers = document.getElementsByTagName("h2");
for (let i = 0; i < headers.length; i++) {
    headers[i].innerText = "Beans";
}
const paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerText = "Beans";
}
const header = document.getElementsByTagName("h1");
for (let i = 0; i < header.length; i++) {
    header[i].innerText = "Beans";
}
const header3 = document.getElementsByTagName("h3");
for (let i = 0; i < header3.length; i++) {
    header3[i].innerText = "Beans";
}
const span = document.getElementsByTagName("span");
for (let i = 0; i < span.length; i++) {
    span[i].innerText = "Beans";
}