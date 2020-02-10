function speakersReducer(state, action) {
  function updateFavorite(favoriteValue) {
    return state.map(item => {
      if (item.id === action.payload) {
        item.favorite = favoriteValue;
      }

      return item;
    });
  }

  switch (action.type) {
    case "setSpeakerList":
      return action.payload;
    case 'favorite':
      return updateFavorite(true);
    case 'unfavorite':
      return updateFavorite(false);
    default:
      return state;
  }
}

export default speakersReducer;