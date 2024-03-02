import { ChevronCompactDown, ChevronCompactUp } from "react-bootstrap-icons";
// JS로 ChevronCompactUp 처리
function Category() {
  return (
    <section>
      <div className="category_tag_wrap">
        <div className="inner_category_tag_wrap">
          <div className="cat_title">
            <h3>
              카테고리
              <br />
              인기태그
            </h3>
            <div id="bg_amp">
              <p>&amp;</p>
            </div>
          </div>
          <div className="category_tag_container">
            <ul className="categories">
              {/* 나중에 map 반복문 돌릴곳 */}
              <li>
                <a href="#">
                  <span>게임</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>이상한게임</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>map함수</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>돌릴곳</span>
                </a>
              </li>
            </ul>
            <ul className="tags">
              {/* 나중에 map 반복문 돌릴곳 */}
              <li>
                <a href="#">
                  <span>게임</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>map함수</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>돌릴곳</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>map함수</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>돌릴곳</span>
                </a>
              </li>
              
            </ul>
            <button className="collapse_btn">
              <ChevronCompactDown />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
