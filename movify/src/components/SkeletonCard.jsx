export default function SkeletonCard() {
  return (
    <div className="card skeleton-card">
      <div className="skeleton-image shimmer"></div>
      <div className="card--content">
        <div className="skeleton-title shimmer"></div>
        <div className="skeleton-text shimmer"></div>
        <div className="skeleton-text shimmer short"></div>
        <div className="skeleton-desc shimmer"></div>
      </div>
    </div>
  );
}