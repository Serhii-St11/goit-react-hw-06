import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../Redux/filtersSlice";
import clsx from "clsx";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <div className={clsx(css.container)}>
      <p className={clsx(css.text)}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
        className={clsx(css.input)}
      />
    </div>
  );
};

export default SearchBox;
