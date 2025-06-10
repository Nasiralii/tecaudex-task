export default function Header() {
  return (
    <div className="py-4 border-b border-[#E5E8EB]">
      <div className="container mx-auto flex flex-row justify-between items-center px-1 md:px-2">
        <h2 className="text-xl">Test Task</h2>
        <div className="flex flex-row items-center md:gap-7 gap-2">
          <div className="flex md:w-auto w-32 bg-gray rounded-xl py-3 gap-2 p-2">
            <img src="/assets/images/search-icon.svg" />
            <input
              placeholder="Search"
              className="placeholder:text-[#4D7399] focus:outline-none"
              type="text"
            />
          </div>
          <img
            className="bg-gray p-3 rounded-full"
            src="/assets/images/notificaiton-icon.svg"
          />
          <img
            className="rounded-full"
            src="/assets/images/profile-image.svg"
          />
        </div>
      </div>
    </div>
  );
}
