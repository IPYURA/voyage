const quoteURL = "https://dummyjson.com/quotes";
fetch(quoteURL)
  .then((response) => response.json())
  .then((data) => {
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * 31);
    result.querySelector(".quote").innerHTML = data.quotes[random].quote;
    result.querySelector(
      ".author"
    ).innerHTML = ` - ${data.quotes[random].author}`;
  })
  .catch((err) => console.log(err));
//서버에 있는 데이터는 날것으로 사용하지 못한다. 형변환해서 사용해야 한다.
