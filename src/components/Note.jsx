export default function Note({title, text}) {
    function respond() {
        const description = 
            `<div">
                <h2 class="title">${title.toString()}</h2>
                <p class="text">${text.toString()}</p>
            </div>`
        document.querySelector(".description").innerHTML = description;
    }
    return (
        <div className="note" onClick={respond}>
            <h4 className="note-title">{title}</h4>
            <p className="note-description">
                {text}
            </p>
        </div>
    )
}