function CakeCard({ cake, onViewCake }) {
  return (
    <div className="cake-card">

      <div className="cake-card-image">
        <img
          src={cake.image}
          alt={`${cake.name} Cake`}
        />
      </div>

      <div className="cake-info">

        <div className="cake-top">
          <h3>{cake.name}</h3>

          <span className="rating">
            ★ {cake.rating}
          </span>
        </div>

        <p>{cake.description}</p>

        <div className="cake-bottom">

          <div>
            <small>Starting from</small>
            <h4>₹{cake.price}</h4>
          </div>

          <button onClick={onViewCake}>
            View Cake →
          </button>

        </div>

      </div>

    </div>
  );
}

export default CakeCard;