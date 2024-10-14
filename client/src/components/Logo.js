const Logo = ({ src, width, height, marginRight = 0, marginLeft = 0 }) => {
  return (
    <img
      src={src}
      style={{
        width: width,
        height: height,
        marginRight: marginRight,
        marginLeft: marginLeft,
      }}
    />
  );
};

export default Logo;
