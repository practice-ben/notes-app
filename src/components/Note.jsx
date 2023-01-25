export default function Note({title, text, id, edit, delet, shown}) {
    function showDescription() {
        const description = 
            `<div">
                <h2 class="title">${title}</h2>
                <p class="text">${text}</p>
            </div>`
        const descriptionContainer = document.querySelector(".description");
        descriptionContainer.innerHTML = description;
        shown();
    }

    return (
        <div className="note" onClick={showDescription}>
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
                <div className="delete" onClick={() => {
                    delet(id)
                    shown(true)
                    }}
                >
                    X
                </div>
                <div className="edit" onClick={() => {
                    edit(id)
                    shown(true)
                }}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </div>
            </div>
        </div>
    )
}