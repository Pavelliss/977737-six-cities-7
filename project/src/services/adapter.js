function adaptOfferToClient(offer) {
  const adaptedOffer = Object.assign(
    {},
    offer,
    {
      host: {
        avatarUrl: offer.host.avatar_url,
        id: offer.host.id,
        isPro: offer.host.is_pro,
        name: offer.host.name,
      },
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      maxAdults: offer.max_adults,
      previewImage: offer.preview_image,
    },
  );

  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
}

function adartCommentToClient(comment) {
  const adaptedComment = Object.assign(
    {},
    comment,
    {
      user: {
        id: comment.user.id,
        isPro: comment.user.is_pro,
        name: comment.user.name,
        avatarUrl: comment.user.avatar_url,
      },
    },
  );

  delete adaptedComment.user.is_pro;
  delete adaptedComment.user.avatar_url;

  return adaptedComment;
}

export {adaptOfferToClient, adartCommentToClient};
