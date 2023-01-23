export default function Note({title, text, id, edit, delet}) {
    function respond() {
        const description = 
            `<div">
                <h2 class="title">${title}</h2>
                <p class="text">${text}</p>
            </div>`
        document.querySelector(".description").innerHTML = description;
    }

    return (
        <div className="note" onClick={respond}>
            <h4 className="note-title">{title}</h4>
            <p className="note-description">
                {
                    text.split(" ").length > 6 
                    ?
                    `${text.split(" ").slice(0, 6).join(" ")}...`
                    :
                    `${text.split(" ").slice(0, 6).join(" ")}`
                }
            </p>
            <div className="controls">
                <div className="delete" onClick={() => delet(id)}>X</div>
                <div className="edit" onClick={edit}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </div>
            </div>
        </div>
    )
}