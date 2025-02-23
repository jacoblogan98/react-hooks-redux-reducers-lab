export function manageFriends(state, action) {
  switch (action.type) {
    case "friends/add":
      return [...state.friends, action.payload]
    case "friends/remove":
      return state.friends.filter(friend => friend.id !== action.payload)
    default:
      return state
  }

}
