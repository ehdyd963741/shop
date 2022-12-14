// 추천상품 데이터
var purposeData;
purposeData = [
  {
    id: "good010203",
    img: "good_1.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_2.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_3.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_4.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_5.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_6.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_7.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_8.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
];

// 목록 html 을 생성해 주는 함수
function makeList(_data, _tag, _col) {
  // 물품 출력 코드
  let dataTotal = _data.length;
  // 항목당 보여줄 개수
  let col = _col;
  //  만들어질 가로 수
  let row = Math.ceil(dataTotal / col);

  let html = "";
  for (let i = 0, index = 0; i < row; i++) {
    html += `<div class="good-wrap">`;

    for (let j = 0; j < col; j++) {
      if (index < dataTotal) {
        let goodObj = _data[index];
        html += `
    <div class="good-box">
      <a href="${goodObj.link}" class="img-link">
        <img src="images/${goodObj.img}" alt="${goodObj.title}" />
      </a>
      <ul class="good-info">
        <li>`;

        // ${goodObj.option}
        // 옵션 출력하기
        let optArr = goodObj.option.split(","); //<-쉼표를 잘라주는 코드
        for (let k = 0; k < optArr.length; k++) {
          html += `<span class="good-info-option">${optArr[k]}</span>`;
        }

        html += `</li> 
        <li>
            <p class="good-info-title"> ${goodObj.title}( < em > ${goodObj.unit} < /em>)</p >
              <
              /li> <
              li >
              <
              p class = "good-info-price" > < b >${goodObj.price} < /b>원</p >
              <
              button class = "good-cart-add" > 장바구니 < /button> <
              /li> <
              /ul> <
              /div>
              `;
        index++;
      }
    }

    html += ` < /div>`;
  }

  let div = document.querySelector(_tag);
  div.innerHTML = html;
}
// 추천상품출력
makeList(purposeData, ".purpose-wrap", 4);
