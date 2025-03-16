import PropTypes from "prop-types"

interface TextAreaProps {
  id: string;
  placeholder: string;
}

export default function TextArea({ id, placeholder }: TextAreaProps) {
  return (
    <textarea
      className="w-full md:w-full outline-none border-[1px] rounded-[3px] resize-none text-body py-2 px-3"
      id={id}
      required
      placeholder={placeholder}
    >
    </textarea>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
}