import type { UserProfileCardProps } from "../../types";
//  product - Product object containing:
// id, name, price, description, inStock and optional imageUrl.

//    showDescription - Optional boolean.
//    If true, displays the product description.
//    Defaults to false.

//    showStockStatus - Optional boolean.
//    If true, displays stock availability.
//    Defaults to false.

//    onAddToCart - Optional callback function.
//    If provided an "Add to Cart" button will be rendered.

//    children - Optional nested content rendered below product details.
function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <section className="flex flex-col items-center mt-20 bg-gray-50 w-100 m-auto p-10 rounded-lg">
      <div className="flex items-center gap-[40px]">
        {user.avatarUrl && (
          <img src={user.avatarUrl} alt={user.name} className="w-30 h-30" />
        )}

        <div className="flex flex-col gap-[10px] text-center">
          <p className="text-xl font-semibold">{user.name}</p>
          {showEmail && <p className="opacity-50 text-md">{user.email}</p>}
          {showRole && <p className="opacity-50 text-md">{user.role}</p>}
        </div>
      </div>

      {children && <p className="p-2">{children}</p>}

      {onEdit && (
        <button
          onClick={function () {
            onEdit(user.id);
          }}
          className=" text-white bg-blue-500  hover:bg-blue-600 w-90 rounded-md pt-2 pb-2 mt-4"
        >
          Edit Profile
        </button>
      )}
    </section>
  );
}

export default UserProfileCard;
