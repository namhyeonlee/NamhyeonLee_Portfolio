import TabList from "components/common/TabList";
import Feed from "pages/Feed";

const MainPage = () => {
  return (
    <div className="container">
      <div className="contents">
        <div className="profileWrap">
          <div className="background">
            <img className="gif" src="/images/coding.gif" />
            <div className="avatar">
              <img src="/images/NamhyeonLee.jpeg" />
            </div>
          </div>
        </div>
        <div className="contentsWrap">
          <div className="description">
            <p className="name">Namhyeon Lee 👩🏻‍💻</p>
            <p className="brief">
              I am proficient in JavaScript, HTML, CSS, and frontend frameworks like React and Next.js. With two years of industry experience, I am skilled in both frontend and backend development using Node.js, Java, and MySQL. I am
              familiar with agile methodologies, version control systems like Git, and have the ability to develop full-stack applications.
            </p>
          </div>
          <TabList titles={["Feed", "About", "Links", "Guestbook"]}>
            <Feed />
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </TabList>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
