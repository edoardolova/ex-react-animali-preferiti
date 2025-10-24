function Modal({ title, content, show, onClose, onConfirm }) {
    return show && ReactDOM.createPortal(
        <div className="modal-container">
            <div className="modal">
            <h2>{title}</h2>
            {content}
            <div>
                <button onClick={onConfirm}>Conferma</button>
                <button onClick={onClose}>Annulla</button>
            </div>
            </div>
        </div>,
        document.body
    );
}

