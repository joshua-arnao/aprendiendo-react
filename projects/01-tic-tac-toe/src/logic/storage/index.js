export const saveGameToStorage = ({ board, turn }) => {
  // Guardar partida
  window.localStorage.setItem('board', JSON.stringify(board));
  window.localStorage.setItem('turn', turn);
};

export const resetGameSotrage = () => {
  window.localStorage.remove('board');
  window.localStorage.remove('turn');
};
