const Image = ({
  filename,
  extension,
  marginLeft = 0,
  marginRight = 0,
  width = '100%',
  height = '100%',
}) => {
  const three = require(`../assets/${filename}@3x.${extension}`);
  const two = require(`../assets/${filename}@2x.${extension}`);
  const one = require(`../assets/${filename}.${extension}`);

  return (
    <img
      marginLeft={marginLeft}
      marginRight={marginRight}
      width={width}
      height={height}
      srcSet={`${three} 3x, ${two} 2x, ${one} 1x`}
    />
  );
};

export default Image;
