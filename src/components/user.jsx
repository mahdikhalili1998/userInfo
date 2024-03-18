import React, { useContext } from "react";
import Loading from "./Loading";
import { ImLocation } from "react-icons/im";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { userContext } from "../router/Router";

function User() {
  const { data, isLoading } = useContext(userContext);
  // console.log(data);

  if (isLoading) return <Loading />;
  return (
    <div className="grid grid-cols-2 gap-x-[4rem]">
      {data?.data.users.map((item) => (
        <div
          className="flex mb-[4rem] px-[4rem] gap-10 items-center"
          key={item.id}
        >
          <img
            className="w-[10rem] rounded-full"
            src={item.profile_picture}
            alt={item.first_name}
          />
          <div className="flex flex-col items-start justify-left gap-3">
            <p>{`${item.first_name} ${item.last_name}`}</p>
            <div className="flex items-center">
              <span>
                <ImLocation />
              </span>
              <p>{item.country}</p>
            </div>
            <Link
              to={`/user-info/${item.id}`}
              className="flex items-center gap-2"
            >
              More Info
              <span className="mt-px">
                <IoIosArrowDroprightCircle />
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default User;
