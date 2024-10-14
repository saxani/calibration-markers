import logo from '../assets/essity_logo_colour.png';

const Image = ({ filename, extension }) => {
  const three = require(`../assets/${filename}@3x.${extension}`);
  const two = require(`../assets/${filename}@2x.${extension}`);
  const one = require(`../assets/${filename}.${extension}`);

  return <img srcSet={`${three} 3x, ${two} 2x, ${one} 1x`} />;
};

export default Image;
