import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../router/Router";
import { userFinder } from "../helper/Help";
import Loading from "../components/Loading";
import { MdOutlineMailOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CgGenderFemale } from "react-icons/cg";
import { CgGenderMale } from "react-icons/cg";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

function OneUserInfo() {
  const [userData, setUserData] = useState([]);
  const { userInfo } = useContext(userContext);
  const { id } = useParams();
  useEffect(() => {
    setUserData(userFinder(userInfo, +id));
  }, [userInfo]);
  console.log(userData);
  if (!userData) return <Loading />;
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center mb-[4rem] ">
        <img
          className="w-[14rem] rounded-full mb-[4rem]"
          src={userData.profile_picture}
        />
        <p className=" flex items-center gap-4 text-[1.6rem] font-bold ">
          <span>
            <CgProfile className="text-[2.3rem]" />
          </span>
          <span>{`${userData.first_name} ${userData.last_name}`}</span>
        </p>
        <p className="flex items-center gap-4 text-[1.6rem] font-bold">
          <span>
            {userData.gender === "female" ? (
              <CgGenderFemale className="text-[2.3rem]" />
            ) : (
              <CgGenderMale className="text-[2.3rem]" />
            )}
          </span>
          <span>{userData.gender}</span>
        </p>
        <p className="flex items-center gap-4 text-[1.6rem] font-bold">
          <span>
            <MdOutlineMailOutline className="text-[2.3rem]" />
          </span>
          <span> {userData.email}</span>
        </p>
        <p className="flex items-center gap-4 text-[1.6rem] font-bold">
          <span>
            <MdOutlinePhone className="text-[2.3rem]" />
          </span>
          <span> {userData.phone}</span>
        </p>
        <p className="flex items-center gap-4 text-[1.6rem] font-bold">
          <span>
            <MdOutlineWorkOutline className="text-[2.3rem]" />
          </span>
          <span> {userData.job}</span>
        </p>
        <p className="flex items-center gap-4 text-[1.6rem] font-bold">
          <span>
            <IoLocationOutline className="text-[2.3rem]" />
          </span>
          <span>{`${userData.country} , ${userData.city} , ${userData.street}`}</span>
        </p>
      </div>
    </>
  );
}

export default OneUserInfo;
