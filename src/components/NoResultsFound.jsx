

export default function NoResultsFound() {
  return (
    <div className="no-results">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="Not found"
        className="no-results__image"
      />
      <h2 className="no-results__title">No Results Found</h2>
      <p className="no-results__text">
        We couldn't find any results  <br />
        Try searching with different keywords.
      </p>
    </div>
  );
}