export class ContentForm {
    #searchInput;
    #contentInput;
    #form;

    constructor() {
	    // mapping the class attributes to the HTML form input
        this.#form = document.querySelector("#content-form");
        this.#searchInput = document.querySelector("#seo-search");
        this.#contentInput = document.querySelector("#content");

		// listening to the form submit event
        this.#form.addEventListener("submit", (event) => this.#submit(event, this));
    }

    #submit(event, that)
    {

    }
}