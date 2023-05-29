import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  // console.log( title )

  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      {/*<code>{ JSON.stringify( newMessage ) }</code>*/}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  name: PropTypes.string
};

FirstApp.defaultProps = {
  name: "Rob",
  title: "No hay Título",
  subTitle: "No hay Subtitulo",
};
