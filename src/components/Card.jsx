const Card = ({ product }) => {
  return (
    <div className="h-[60vw] rounded-lg">
      <div className="h-[70%] overflow-hidden">
        <img src={product.img ?? '/helpfilled.svg'} className="w-full object-cover bg-lowlight" alt="" />
      </div>
      <p className="text-green-500">{product.title}</p>
    </div>
  );
}

export default Card;
