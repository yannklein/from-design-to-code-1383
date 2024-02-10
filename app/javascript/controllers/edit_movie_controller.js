import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
  static targets = ["form"]
  connect() {
    console.log("edit movie connected")
  }

  showForm() {
    console.log("showForm");
    this.formTarget.classList.toggle("d-none")
  }

  update(event) {
    event.preventDefault()
    const url = `${this.formTarget.action}`
    fetch(url, {
      method: "PATCH",
      headers: { Accept: "text/plain"},
      body: new FormData(this.formTarget)
    })
    .then(response => response.text())
    .then((data) => {
      console.log(data);
      this.element.outerHTML = data
    })
  }
}
