const Logo = ({
  src,
  width = '100%',
  height = '100%',
  marginRight = 0,
  marginLeft = 0,
}) => {
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
