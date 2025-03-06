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
        className={`w-full text-body p-2 outline-none border-[1px] rounded-[3px] ${addClassName} `}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete} />
         <p className="invisible peer-invalid:visible ...">Please provide a valid email address.</p>
    </div>
  )
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  addClassName: PropTypes.string,
  onchange: PropTypes.func,
}