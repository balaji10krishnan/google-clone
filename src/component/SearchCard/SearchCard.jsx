import classes from "./SearchCard.module.css";
const SearchCard = ({
  title = "Title",
  displayLink = "link.com",
  link = "https://hi.com/",
  snippet = "hello ",
  pagemap = {
    cse_image: [
      {
        src: "https://hi.com/images/home/mb-content-1.png",
      },
    ],
  },
}) => {
  return (
    <div className={classes["header-gap"]}>
      <div>
        <div className={classes["header"]}>
          <div>
            {" "}
            <img src={pagemap?.cse_image?.[0].src} />
          </div>
          <a href={link}>{displayLink}</a>
        </div>
        <a href={link} className={classes["title"]}>
          {title}
        </a>
      </div>
      <div>{snippet}</div>
    </div>
  );
};
export default SearchCard;
