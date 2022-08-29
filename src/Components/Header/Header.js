import React from 'react';

const Header = () => {
    return (
        <div className=' py-6 bg-white block lg:hidden sticky top-0 z-30 '>
               <button className=' w-8 h-8  hover:bg-transparent bg-transparent  border-0 rounded-none'>
        <label
              for="my-drawer-2"
              tabindex="1"
              class=" drawer-button  "
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/747/747327.png"
                style={{ width: "28px" }}
                alt=""
              />
            </label>
        </button>
        </div>
    );
};

export default Header;