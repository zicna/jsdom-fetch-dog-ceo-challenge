console.log("%c HI", "color: firebrick");
//***************************************************************************** */
//* Challenge 1

document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const dogImageCntainer = document.getElementById("dog-image-container");
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const dogBreeds = document.getElementById("dog-breeds");
  const breedDropdown = document.getElementById("breed-dropdown");

  let imgs = fetch(imgUrl)
    .then(function (response) {
      return response.json();
    })
    .then((json) => {
      itterateOverImages(json["message"]);
    });

  function itterateOverImages(json) {
    for (msg of json) {
      createImage(msg);
    }
  }

  function createImage(msg) {
    let imgTag = document.createElement("img");
    imgTag.src = msg;
    dogImageCntainer.appendChild(imgTag);
  }
  //***************************************************************************** */
  //* Challenge 2

  let breeds;
  fetch(breedUrl)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      breeds = json["message"];
      itterateOverBreed(breeds);
      // console.log(breeds);
    });
  function itterateOverBreed(msg) {
    for (breed in msg) {
      // if()
      let li = document.createElement("li");
      li.innerHTML = breed;
      li.addEventListener("click", () => {
        li.style.color = "red";
      });
      dogBreeds.appendChild(li);
    }
  }
  //   console.log( `${breedDropdown.options[breedDropdown.selectedIndex].value == false}`)
  breedDropdown.addEventListener("change", (event) => {
    // let value = breedDropdown.options[breedDropdown.selectedIndex].value;
    // debugger
    let selected = event.target.options[event.target.selectedIndex].value;
    // console.log(selected);
    // console.log(breeds)
    dogBreeds.innerHTML = ""

    for (breed in breeds) {
      //   debugger
      if (breed[0] === selected) {
        let li = document.createElement("li");
        li.innerHTML = breed;
        li.addEventListener("click", () => {
          li.style.color = "red";
        });
        dogBreeds.appendChild(li);
      }
    }
  });
});
