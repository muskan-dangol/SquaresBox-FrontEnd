import { useState } from "react";
import Button from "./component/Button";
import Modal from "./component/Modal";
import DropDown from "./component/SelectColor";

function Header({ onAdd }) {
  const [ShowColorModal, setShowColorModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleClick = () => {
    setShowColorModal(true);
  };

  const color = (currentColor) => {
    setSelectedColor(currentColor);
  };

  const handleAdd = () => {
    if (selectedColor) {
      onAdd(selectedColor);
      handleClose();
    }
  };

  const handleClose = () => {
    setShowColorModal(false);
    setSelectedColor(null);
  };

  const addButton = (
    <div>
      <Button onClick={handleAdd} primary>
        Add Box
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} addButton={addButton}>
      <DropDown onSelect={color} />
    </Modal>
  );

  return (
    <>
      <div className="bg-blue-100 h-16 w-full flex border-red-500">
        <Button
          onClick={handleClick}
          primary
          className="button is-link m-2 text-lg"
        >
          Select Color Box
        </Button>
      </div>
      {ShowColorModal && modal} {/*if show modal is true then display modal */}
    </>
  );
}

export default Header;
