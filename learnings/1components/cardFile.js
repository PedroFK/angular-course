class CardNews extends HTMLElement {
  constructor() {
    super(); //method used to call a method in a parent class (HTMLElement)
    const shadow = this.attachShadow({mode: "open" })
    shadow.innerHTML = "<h1>Hello World</h1>"
  }
}

customElements.define('card-news', CardNews)