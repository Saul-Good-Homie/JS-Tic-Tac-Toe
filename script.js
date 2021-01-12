// Player Factory function
const Player = (name) => {
  const getName = () => name;

  return { getName };
};
