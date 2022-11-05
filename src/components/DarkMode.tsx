import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useAppDispatch } from "../store/hooks";
import { switchTo } from "../store/mode";
import './DarkMode.scss';


export const DarkMode = () => {
    const dispatch = useAppDispatch();

  return (
    <>
      <div id="darkmode">
        <input type="checkbox" className="checkbox" id="checkbox" onChange={(e) => dispatch(switchTo(e.target.checked ? "dark" : "light"))}/>
        <label htmlFor="checkbox" className="label">
          <BsMoonStarsFill color="white" />
          <BsFillSunFill color="yellow" />
          <div className="ball"></div>
        </label>
      </div>
    </>
  );
};