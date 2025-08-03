const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="m-4">
      <div className="card bg-base-100 w-96 shadow-sm ">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="absolute right-0 mt-4 mr-4 px-6 bg-black text-white ">${price}</p>
        <div className="card-body flex flex-col items-center ">
          <h2 className="card-title">{name}</h2>
          <p>
            {recipe}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-slate-100 border-orange-400 text-black  hover:bg-black hover:text-white border-black  border-0 border-b-4 mt-4">Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
