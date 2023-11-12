function DropDown({ onSelect }) {
  const handleSelect = (e) => {
    onSelect(e.target.value);
  };
  return (
    <>
      {/* <label for="pet-select">Select a color for the box.</label> */}

      <select name="color" id="color-select" onChange={handleSelect}>
        <option value="">Select a color for the box.</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Yellow">Yellow</option>
        <option value="Blue">Blue</option>
        <option value="Black">Black</option>
        <option value="Gray">Gray</option>
      </select>
    </>
  );
}

export default DropDown;
