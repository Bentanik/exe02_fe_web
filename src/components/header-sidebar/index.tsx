import SearchSidebar from "@/components/search-sidebar";

export default function HeaderSidebar() {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <SearchSidebar />
      </div>
      <div>
        <div>
          <figure className="rounded-full overflow-hidden w-7 h-7 flex items-center justify-center">
            <img
              id="avatarButton"
              className="w-7 h-7 rounded-full cursor-pointer"
              src={"/images/avatar.jpg"}
              alt="User dropdown"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
