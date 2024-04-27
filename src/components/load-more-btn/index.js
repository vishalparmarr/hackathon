import React from 'react';
import LoadMore from '@svg/load-more';

const LoadMoreBtn = ({handleLoadMore}) => {
  return (
    <div className={`portfolio__load-more text-center`}>
      <button
        id="tp-load-more"
        type="button"
        onClick={handleLoadMore}
        className="tp-load-more-btn load-more mt-30 mb-50"
      >
        <LoadMore />
        Load more Post
      </button>
    </div>
  );
};

export default LoadMoreBtn;