import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

function Header() {
  const [ShowColorModal, setShowColorModal] = useState(false);

  const handleClick = () => {
    setShowColorModal(true);
  };

  const handleClose = () => {
    setShowColorModal(false);
  };

  const addButton = (
    <div>
      <Button onClick={handleClose} primary>
        Add Box
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} addButton={addButton}>
      <p>This is my modal.</p>
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
      <div className="p-5 m-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
          tellus id risus malesuada convallis. Fusce molestie orci vitae ipsum
          pharetra, in pellentesque diam molestie. Fusce tincidunt enim sed
          vestibulum ornare. Nullam eros ipsum, ultrices ut metus id, dapibus
          tempus odio. Suspendisse bibendum, augue eget consequat fringilla,
          nisl augue eleifend lectus, sed congue libero urna eget lorem. Aliquam
          ullamcorper sodales ipsum lobortis elementum. Vestibulum ornare
          aliquet urna, sed lacinia turpis rutrum et. Maecenas nec orci a ligula
          euismod elementum in cursus metus.
        </p>
      </div>
    </>
  );
}

export default Header;
