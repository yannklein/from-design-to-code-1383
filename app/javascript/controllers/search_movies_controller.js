import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["form", "input", "list"]

  connect() {
    console.log("search movies connected!");
  }

  update(event) {
    // console.log(this.formTarget);
    console.log(this.formTarget.action);
    // console.log(event.currentTarget);
    // console.log(this.inputTarget);
    console.log(this.inputTarget.value);
    
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    // http://localhost:3000/movies?query=batmana

    fetch(url, {
      headers: { Accept: "text/plain" }
    })
      .then(response => response.text())
      .then((data) => {
        // data is the partial list.html.erb with the filtered movie list
        console.log(data);
        this.listTarget.innerHTML = data
      })
  }
}
