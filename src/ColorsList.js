import ColorsItem from './ColorsItem';

export default function ColorsList({ colors }) {
  return <div>
    {
      colors.map((color, i) => <ColorsItem color={color} key={color + i} />)
    }
  </div>;
}