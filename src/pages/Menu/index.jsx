import "./index.css";

const menuImages = [
  "https://picsum.photos/id/684/120/700",
  "https://picsum.photos/id/685/120/700",
  "https://picsum.photos/id/686/120/700",
  "https://picsum.photos/id/687/120/700",
  "https://picsum.photos/id/688/120/700",
  "https://picsum.photos/id/689/120/700",
  "https://picsum.photos/id/690/120/700",
  "https://picsum.photos/id/691/120/700",
  "https://picsum.photos/id/692/120/700",
  "https://picsum.photos/id/693/120/700",
  "https://picsum.photos/id/694/120/700",
  "https://picsum.photos/id/695/120/700",
];

const Menu = () => {
  return (
    <>
        <div className="menuList">
        <ul className="menuRow">
          {menuImages.map((item) => (
            <li key={item} className="menuItem">
              <img className="menu-img" src={item} alt="" />
            </li>
          ))}
        </ul>
      </div>

    </>
  );
};

export default Menu;
