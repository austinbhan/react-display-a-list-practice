import ColorsItem from './ColorsList';

export default function ColorsList({ colors }) {
  return <div>
    {
      colors.map((color, i) => <ColorsItem color={ color } key={color + i} />)
    }
  </div>;
}