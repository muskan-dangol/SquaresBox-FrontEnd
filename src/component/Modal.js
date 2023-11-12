import ReactDOM from "react-dom";

function Modal({ onClose, children, addButton }) {
  return ReactDOM.createPortal(
    <div>
      {/* A gray background behind the modal-content*/}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-200 opacity-70"
      ></div>

      {/* A modal-container */}
      <div className="absolute inset-20 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div onClick={onClose} className="flex justify-end">{addButton}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container") //is a reference to some dom element that is placed inside the index.html file
  );
}

export default Modal;
