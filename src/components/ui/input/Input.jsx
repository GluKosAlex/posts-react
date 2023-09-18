import './Input.css'

export default function Input({ className: classList = '', ...props }) {
  return <input className={`${classList} input`} {...props} />;
}

