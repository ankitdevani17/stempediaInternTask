import { useDispatch } from "react-redux";

function ComponentB() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch({ type: "SET_VALUE", payload: event.target.value });
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter your input"
      />
    </div>
  );
}

export default ComponentB;
