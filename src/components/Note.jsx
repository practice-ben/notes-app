export default function Note({title, text}) {
    function respond() {
        console.log(title, text)
        const description = 
            `<div className="description">
                <h2 className="title">${title.toString()}</h2>
                <p className="text">${text.toString()}</p>
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