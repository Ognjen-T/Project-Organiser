const AddBtn = document.querySelector("#AddBtn");
const ProjectWindow = document.querySelector("#Projects");
var ProgressScore = 67;

function getProgressColor(score) {
    if (score <= 33) return "#ef4444";   // crvena
    if (score <= 66) return "#f5b82e";   // žuta
    return "#22c55e";                    // zelena
}

AddBtn.addEventListener("click", () => {
    // Kreiramo Project-Item
    const div = document.createElement("div");
    div.classList.add("Project-Item");

        // Kreiramo ProgressBar
        const LeftInnerDiv = document.createElement("div");
        LeftInnerDiv.classList.add("LeftInnerDiv");
            const ProgressBar = document.createElement("div");
            ProgressBar.classList.add("ProgressBar");
            ProgressBar.dataset.progress = ProgressScore;
            ProgressBar.style.setProperty("--progress", ProgressScore);
            ProgressBar.style.setProperty("--color", getProgressColor(ProgressScore));
        LeftInnerDiv.appendChild(ProgressBar);
        div.appendChild(LeftInnerDiv);

        // Kreiramo Header za Projekat
        const RightInnerDiv = document.createElement("div");
        RightInnerDiv.classList.add("RightInnerDiv");

    // Dodajemo Project Item u Projects div
    ProjectWindow.appendChild(div);
});