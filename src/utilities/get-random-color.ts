
export const getRandomColorString = (text: string) => {

  const colors = [
    "#ff9c6e",
    "#ff7875",
    "#ffc069",
    "#ffd666",
    "#fadb14",
    "#7bed9f",
    "#55E6C1",
    "#95de64",
    "#5cdbd3",
    "#69c0ff",
    "#85a5ff",
    "#b37feb",
    "#D6A2E8",
    "#ff85c0",
    "#a4b0be",
    "#485460",
    "#596275",
  ];

  let hash = 0;
  for(let i =0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  hash = ((hash % colors.length) + colors.length) % colors.length;

  return colors[hash];
}
