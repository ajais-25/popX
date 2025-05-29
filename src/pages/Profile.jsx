import photo from "../assets/photo.png";

const Profile = () => {
  return (
    <div className="w-full h-screen p-5 flex justify-center items-center">
      <div className="w-[430px] h-full border border-[#F7F8F9]">
        <div className="w-full h-full bg-[#f7f8f9]">
          <div className="bg-[#FFFFFF] p-4 pt-6 shadow-md shadow-gray-200">
            <h2>Account Settings</h2>
          </div>
          <div className="p-6 flex">
            <div className="w-20">
              <img
                alt="profile pic"
                loading="lazy"
                width="100"
                height="100"
                className="rounded-full border-2 border-gray-300"
                src={photo}
              />
              <button
                type="button"
                className="absolute translate-x-14 -translate-y-7 hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-6 w-6 p-1 rounded-full text-white bg-[#6c25ff]"
                >
                  <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z"></path>
                  <path
                    fillRule="evenodd"
                    d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="mx-5">
              <p className="font-medium">Marry Doe</p>
              <p className="text-sm">Marry@Gmail.Com</p>
            </div>
          </div>
          <div className="px-5">
            <p className="text-sm capitalize">
              Lorem ipsum dolor sit amet, consetetur sadip scing elitr. Sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam.
            </p>
          </div>
          <div className="bg-[#f7f8f9] border-b-2 border-t-2 border-dashed h-2/3 my-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
