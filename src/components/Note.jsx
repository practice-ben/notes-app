export default function Note({title, text}) {
    return (
        <div className="note">
            <h4 className="note-title">{title}</h4>
            <p className="note-description">
                {text}
            </p>
        </div>
    )
}