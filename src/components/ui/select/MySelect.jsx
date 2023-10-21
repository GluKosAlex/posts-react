export default function MySelect({ defaultOption, options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={evt => onChange(evt.target.value)}
      className='bg-transparent self-start'
    >
      <option disabled value=''>
        {defaultOption}
      </option>
      {options.map(item => (
        <option className='text-black' key={item.value} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
}
