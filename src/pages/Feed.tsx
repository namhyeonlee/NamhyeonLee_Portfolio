import { useState } from "react";
import content from "data/contents.json";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

interface IContent {
  id: string;
  date: string;
  title: string;
  content: string;
  img: string;
  tag: string[];
  like: boolean;
}

const Feed = () => {
  const [feedContents, setFeedContents] = useState<IContent[]>(content.feedContents);
  return (
    <div className="feedWrap">
      {feedContents.map((row) => (
        <div className="feed">
          <div className="avatarWrap">
            <a className="avatar">
              <img src="/images/feed6.jpeg" />
            </a>
          </div>
          <div className="feedContentWrap">
            <div className="feedName">
              <p className="name">Namhyeon Lee ✨</p>
              <p className="date">{row.date}</p>
            </div>
            <ul className="tagsWrap">
              {row.tag.map((tag) => (
                <li className="tag">{tag}</li>
              ))}
            </ul>
            <div className="feedContent">
              <div className="title">{row.title}</div>
              <div className="content">{row.content}</div>
              <div className="feedImg">
                <img src={`/images/${row.img}.jpeg`} />
              </div>
              <div className="feedFooter">
                <a onClick={() => setFeedContents(feedContents.map((feed) => (feed.id === row.id ? { ...feed, like: !feed.like } : feed)))}>
                  {row.like ? <FavoriteIcon style={{ color: "#fff", fontSize: "30px" }} /> : <FavoriteBorderIcon style={{ color: "#fff", fontSize: "30px" }} />}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Feed;
