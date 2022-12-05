const formElement = document.querySelector("form");

const onSubmit = (event) => {
  event.preventDefault();
  const input = event.target.elements.input.value;

  const params = new URLSearchParams();
  params.set("q", input);
  const url = `https://api.tvmaze.com/search/shows?${params.toString()}`;

  const resultsElement = document.querySelector(".results");
  if (resultsElement) {
    resultsElement.remove();
  }

  const newResultsElement = document.createElement("div");
  newResultsElement.classList.add("results");

  const parser = new DOMParser();

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((data) => {
        const show = data.show;

        const resultElement = document.createElement("div");
        resultElement.classList.add("result");

        const imageElement = document.createElement("img");
        imageElement.src = show.image ? show.image.medium : "https://via.placeholder.com/100x200?text=text+here";
        resultElement.appendChild(imageElement);

        const descriptionElement = document.createElement("div");
        descriptionElement.classList.add("description");
        resultElement.appendChild(descriptionElement);

        const headingElement = document.createElement("h2");
        headingElement.textContent = show.name;
        descriptionElement.appendChild(headingElement);

        const htmlElement = parser.parseFromString(show.summary, "text/html");
        descriptionElement.appendChild(htmlElement.body.firstChild);

        const linkElement = document.createElement("a");
        linkElement.textContent = "Show Details";
        linkElement.href = show._links.self.href;
        linkElement.target = "_blank";
        descriptionElement.appendChild(linkElement);

        if (show.genres.length > 0) {
          const labelElement = document.createElement("label");
          labelElement.textContent = "Genres:";
          descriptionElement.appendChild(labelElement);

          const genresElement = document.createElement("p");
          genresElement.textContent = show.genres.join(" | ");
          descriptionElement.appendChild(genresElement);
        }

        newResultsElement.appendChild(resultElement);
      });

      document.body.appendChild(newResultsElement);
    });
};

formElement.addEventListener("submit", onSubmit);
