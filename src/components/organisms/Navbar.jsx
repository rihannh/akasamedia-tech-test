import { useState } from "react";
import SubTitle from "../atoms/SubTitle";

export default function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownVisbility = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <div className='container'>
      <div className='relative flex justify-between py-6'>
        <SubTitle color={true}>U Task</SubTitle>
        <button onClick={dropdownVisbility}>
          <img
            className={`${isDropdownVisible ? "outline outline-offset-2 outline-violet-500" : ""} h-10 w-10 rounded-full duration-100`}
            src='/default-profile-picture.png'
            alt='Profile Pictures'
          />
        </button>
        {isDropdownVisible && (
          <ul className='absolute -bottom-[72px] right-0 space-y-4 divide-y rounded-lg px-5 py-3 shadow-md'>
            <li>Edit Profile</li>
            <li>Logout</li>
          </ul>
        )}
      </div>
    </div>
  );
}
