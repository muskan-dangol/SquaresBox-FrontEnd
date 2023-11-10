import Button from "./Button";

function Header() {
  return (
    <div className="bg-blue-100 h-16 w-full flex border-red-500">
      <Button primary className="button is-link m-2 text-lg">
          Add box
        </Button>
    </div>
  );
}

export default Header;
