import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { userLocalStorage } from "../../services/LocalStorage/userLocalStorage";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

export default function Header() {
  const userLogin = userLocalStorage.get();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const links = [
    { name: "Lịch Chiếu", link: "#lichChieu" },
    { name: "Cụm Rạp", link: "#cumRap" },
    { name: "Tin Tức", link: "#tinTuc" },
    { name: "Ứng Dụng", link: "#ungDung" },
  ];
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    userLocalStorage.remove("USER");
    window.location.reload();
  };
  const handleDangKy = () => {
    navigate("/dangky");
  };
  const renderUserLogin = () => {
    const classBtn =
      "bg-transparent ml-3 hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded transition duration-500";
    if (userLogin) {
      return (
        <div className="flex">
          <NavLink to={"/userprofile"}>
            <div className="cursor-pointer flex items-center md:px-2">
              <div className="w-12 h-12 mr-3 md:mb-0 mb-2 hover:scale-110">
                <img
                  className="rounded-full"
                  src={`https://i.pravatar.cc/300?u=${userLogin.taiKhoan}`}
                  alt="..."
                />
              </div>

              <span className="font-medium">{userLogin.hoTen}</span>
            </div>
          </NavLink>
          <button onClick={handleLogout} className={classBtn}>
            <i className="fa fa-sign-out-alt"></i>Đăng Xuất
          </button>
        </div>
      );
    } else {
      return (
        <>
          <button onClick={handleLogin} className={classBtn}>
            <i className="fa fa-sign-in-alt"></i> Đăng Nhập
          </button>
          <button onClick={handleDangKy} className={classBtn}>
            <i className="fa fa-user-plus"></i> Đăng Ký
          </button>
        </>
      );
    }
  };
  return (
    <nav className="bg-white md:opacity-80 shadow-md shadow-black md:fixed z-10  h-82 w-full top-0 left-0">
      <div className="flex items-center justify-between bg-white py-4 px-6 md:px-10">
        <NavLink to={"/"}>
          <img
            style={{ height: 50 }}
            src="../image/headTixLogo.png"
            alt="..."
          />
        </NavLink>

        <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? <CloseOutlined /> : <MenuOutlined />}
        </div>

        <ul
          className={`
            md:flex 
            md:items-center
            md:pb-0 
            pb-12 
            absolute 
            md:static 
            bg-white 
            md:z-auto 
            z-10 
            left-0 
            w-full 
            md:w-auto 
            md:pl-0 
            pl-9 
            transition-all 
            duration-500 
            ease-in 
            ${open ? "top-16 " : "top-[-490px]"}`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          {open ? <div className="md:hidden">{renderUserLogin()}</div> : <></>}
        </ul>

        <div className="hidden md:block">{renderUserLogin()}</div>
      </div>
    </nav>
  );
}
