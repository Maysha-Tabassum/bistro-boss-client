import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
  const { image, price, recipe, name, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddtoCart = () => {
    if (user && user.email) {
      //sent cart iteam to the database.
      // console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart.`,
            showConfirmButton: false,
            timer: 1500,
          });
          //refetch cart to update the cart items count
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged In!",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page.
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="m-4">
      <div className="card bg-base-100 w-96 shadow-sm ">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0 mt-4 mr-4 px-6 bg-black text-white ">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center ">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={ handleAddtoCart}
              className="btn btn-primary bg-slate-100 border-orange-400 text-black  hover:bg-black hover:text-white border-black  border-0 border-b-4 mt-4"
            >
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
