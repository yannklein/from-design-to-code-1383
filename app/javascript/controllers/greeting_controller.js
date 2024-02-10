import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="greeting"
export default class extends Controller {
  static targets = ["message"]

  connect() {
    // console.log("Hi everyone!")
  }

  showMessage() {
    // console.log("show")
    this.messageTarget.classList.remove("d-none")
  }
}
