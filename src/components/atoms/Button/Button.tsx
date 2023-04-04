type ButtonProps = {
  text: string;
  className: string;
};

const Button = ({ text, className }: ButtonProps) => (
  <button className={className} type="button">
    {text}
  </button>
);

export default Button;
