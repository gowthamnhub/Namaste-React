export function RestaurantCard({ avgRating, cuisines, name, cloudinaryImageId }) {

  return (
    <div className="restaurant-card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt={name} />
      <h4>{name}</h4>
      <p>Cuisines: {cuisines.join(", ")}</p>
      <p>Rating: {avgRating} stars</p>
    </div>
  );
}