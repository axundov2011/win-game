
export const getImageUrl = (id) =>
  `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=Miqdad%20ibn%20Amr&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url&iiurlwidth=600&format=json&origin=*-${id}` +
  `&facialHairProbability=100` +
  `&facialHair=beardMajestic,beardMedium,beardLight` +
  `&top=turban,hat,shortFlat,shortWaved,theCaesar,sides` +
  `&accessoriesProbability=0`;
export const shuffle = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

export const getTotalExp = (team) => {
    return team.reduce((sum, pokemon) => sum + pokemon.base_experience, 0);
}