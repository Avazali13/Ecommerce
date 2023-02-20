import style from './Forapp.css'
import { getdata } from "./api/data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar, delshop, minus, plus, shop } from "./store/expense/expense-slice";

function Forapp() {
  const dispatch = useDispatch();
  async function data() {
    const samir = await getdata.Fetchdata();
    dispatch(addCar(samir));
  }

  useEffect(() => {
    data();
  },[]);

  async function basket(product) {
    const avaz = await getdata.createcart(product);
    dispatch(shop(avaz));
  }

  async function del(product) {
    const ops = await getdata.Deletecart(product);
    dispatch(delshop(ops));
  }

  const { cart } = useSelector((product) => product.shop);
  const { baskext } = useSelector((product) => product.shop);

  return (
    <div style={{display:"flex"}} className="App">
    <div className='main'>
    {cart.map((element, index) => (
        <div  key={index}>
          <img src={element.img[0]} alt="" />
          <p>{element.count}</p>
          <p onClick={() => basket(element)}>sebete at</p>
          <p onClick={() => del(element)}>sebette sil</p>
          <p onClick={() => dispatch(plus(element))}>art</p>
        </div>
      ))}
    </div>
      <div className='rightbag'>
        {baskext.map((e, i) => (
          <div  key={i}>
            <img
              key={i}
              style={{ width: 100, height: 100 }}
              src={e.img[0]}
              alt=""
            />
          <p>{e.count}</p>

            <p onClick={() => del(e)}>sebette sil</p>
            <p onClick={() => dispatch(plus(e))}>art</p>
            <p onClick={() => dispatch(minus(e))}>azalma</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forapp;
