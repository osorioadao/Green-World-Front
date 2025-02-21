import PropTypes from "prop-types"

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  addClassName: string;
}

export default function Input({ id, type, placeholder, autoComplete, addClassName }: InputProps) {
  return (
    <div>
      <input
        id={id}
        className={`text-body p-3 outline-none border-[1px] rounded-[3px] ${addClassName} `}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete} />
    </div>
  )
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  addClassName: PropTypes.string,
}