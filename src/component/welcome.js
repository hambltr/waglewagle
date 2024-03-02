import { Search } from "react-bootstrap-icons";

function Welcome() {
  return (
    <section>
      <div className="intro">
        <div className="inner_intro">
          <h2>와글와글에 오신 것을 환영합니다!</h2>
          <h3>여러가지 모임을 홍보하고 찾아보세요</h3>
          <div className="search_bar">
            <Search/>
            <form action="/search">
              <input type="text" name="tag" />
              <button type="submit" className="search_btn">검색</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
