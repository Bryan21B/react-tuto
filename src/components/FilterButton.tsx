import type { FilterType } from "../App";
interface FilterButtonProps {
  name: FilterType;
  isPressed: boolean;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

const FilterButton = ({ name, isPressed, setFilter }: FilterButtonProps) => {
  return (
    <button
      type="button"
      className="m-3"
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span className="sr-only">Show </span>
      <span>{name}</span>
      <span className="sr-only"> tasks</span>
    </button>
  );
};

export default FilterButton;
