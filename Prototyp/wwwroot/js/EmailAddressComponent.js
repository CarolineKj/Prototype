export function initializeEmailAddressComponent(inputId, spanId) {
    let inputElement = document.querySelector("#" + inputId);
    if (inputElement) {
        inputElement.addEventListener("input", (e) => {
            console.log("input JavaScript");
            let input = e.target;
            var hiddenSpan = document.getElementById(spanId);
            hiddenSpan.innerHTML = input.value;
            input.style.width = (hiddenSpan.getBoundingClientRect().width + 5) + "px";
        });

        inputElement.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        console.log("new input JavaScript");
        var hiddenSpan = document.getElementById(spanId);
        hiddenSpan.innerHTML = inputElement.value;
        inputElement.style.width = (hiddenSpan.getBoundingClientRect().width + 5) + "px";
    }
}
