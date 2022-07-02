interface Props {
  onSubmit: Function;
  children: JSX.Element | JSX.Element[];
}

const Form = (props: Props) => {
  const { onSubmit } = props;
  return (
    <form className="p-3">
      {props.children}
      <button type="submit" className="btn btn-primary w-100">
        Continue
      </button>
    </form>
  );
};

export default Form;
