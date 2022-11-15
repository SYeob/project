/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './Index.css';
import { Link } from 'react-router-dom';
import Clock from '../../assets/clock.png';
import Timer from '../Timer/Timer';
const Index = (props) => {
  let fourItemArray = [0, 1, 2, 3];

  return (
    <>
      <div className='container'>
        <div className='flex'>
          {/* 카테고리, 더보기 */}
          <h5>{props.indexProduct[0].category}</h5>
          <Link to={props.navData[0].indexLink}>더 보기</Link>
        </div>

        <div className='row'>
          {fourItemArray.map(function (a, i) {
            return (
              <div className='col-md-3' key={i}>
                <div className='hover-wrap'>
                  <button>
                    <Link to={'/detail/' + props.itemData[i].id}>응찰하기</Link>
                  </button>
                </div>
                <img src={'/' + i + '.jpeg'} />
                <div className='text-wrap'>
                  <h5>{props.itemData[i].title}</h5>
                  <p>{props.itemData[i].location}</p>
                  <div className='price-wrap'>
                    <p>현재가</p>
                    <div className='flex'>
                      <p>{props.itemData[i].price}</p>
                      <img src={Clock} className='clockImg' />
                      <h5 className='clock'><Timer/></h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='container'>
        <div className='flex'>
          {/* 카테고리, 더보기 */}
          <h5>{props.indexProduct[1].category}</h5>
          <Link to={props.navData[1].indexLink}>더 보기</Link>
        </div>

        <div className='row'>
          {fourItemArray.map(function (a, i) {
            return (
              <div className='col-md-3' key={i}>
                <div className='hover-wrap'>
                  <button>
                    <Link to={'/detail/' + props.itemData[i + 6].id}>응찰하기</Link>
                  </button>
                </div>
                <img src={'/' + (i + 6) + '.jpeg'} />
                <div className='text-wrap'>
                  <h5>{props.itemData[i + 6].title}</h5>
                  <p>{props.itemData[i + 6].location}</p>
                  <div className='price-wrap'>
                    <p>현재가</p>
                    <div className='flex'>
                      <p>{props.itemData[i + 6].price}</p>
                      <img src={Clock} className='clockImg' />
                      <h5 className='clock'>03:30:12 초</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='container'>
        <div className='flex'>
          {/* 카테고리, 더보기 */}
          <h5>{props.indexProduct[2].category}</h5>
          <Link to={props.navData[2].indexLink}>더 보기</Link>
        </div>

        <div className='row'>
          <div className='col-md-3'>
            <div className='hover-wrap'>
              <button>
                <Link to={'/detail/' + props.itemData[3].id}>응찰하기</Link>
              </button>
            </div>
            <img src={'/' + 3 + '.jpeg'} />
            <div className='text-wrap'>
              <h5>{props.itemData[3].title}</h5>
              <p>{props.itemData[3].location}</p>
              <div className='price-wrap'>
                <p>현재가</p>
                <div className='flex'>
                  <p>{props.itemData[3].price}</p>
                  <img src={Clock} className='clockImg' />
                  <h5 className='clock'>03:30:12 초</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='hover-wrap'>
              <button>
                <Link to={'/detail/' + props.itemData[4].id}>응찰하기</Link>
              </button>
            </div>
            <img src={'/' + 4 + '.jpeg'} />
            <div className='text-wrap'>
              <h5>{props.itemData[4].title}</h5>
              <p>{props.itemData[4].location}</p>
              <div className='price-wrap'>
                <p>현재가</p>
                <div className='flex'>
                  <p>{props.itemData[4].price}</p>
                  <img src={Clock} className='clockImg' />
                  <h5 className='clock'>03:30:12 초</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
