import React from "react";

interface Props {
  padding: string;
  margin: string;
  children?: React.ReactNode;
}

const Card = (props: Props) => {
  const { padding, children, margin } = props;
  return (
    <article className={`${padding} ${margin} border`}>{children}</article>
  );
};

Card.defaultProps = {
  padding: "p-3",
  margin: "",
};

export default Card;
