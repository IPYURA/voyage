//브라우저가 인식할 수 있게 json()이라는 메서드를 써야 한다.
fetch("student.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += `
      <h2>${student.name}</h2>
      <ul>
        <li>전공: ${student.major}</li>
        <li>전공: ${student.grade}</li>
      </ul>
      <hr/>
      `;
    });
    document.querySelector("#result").innerHTML = output;
  })
  .catch((err) => console.log(err));
//배열 형태가 된 데이터를 불러왔다.
