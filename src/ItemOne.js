import ListOne from './ListOne';

export default function ItemOne({ colors }) {
  return <div>
    {
      colors.map((color, i) => <ListOne color={ color } key={color + 1} />)
    }
  </div>;
}