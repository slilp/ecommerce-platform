import React, { useEffect, useState } from "react";
// import SuggestItem from "./suggest";
import SearchProduct from "./search";
import { getParam } from "../../axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Store(props) {
  const [search, setSearch] = useState({});
  const [market, setMarket] = useState({
    marketplaceId : props.match.params.id
  });

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(async () => {

    const res = await getParam(
      "/marketplace/info/" + props.match.params.id,
      {}
    );

    if (res.status == 200) {
      if(res.data.data != null){

        dispatch({
          type: "ADD_SHORTCUT_PAGE",
          payload: {
            page: `/store/${props.match.params.id}`,
            label: res.data.data.marketName
          }
        });

        setMarket(res.data.data);
      }else{
        history.push("/marketplace");
      }
    }

  }, []);

  http: return (
    <div>
      <div className="container mx-auto lg:p-5  lg:w-2/3">
        <img className="lg:h-90 w-full" src={market.backgroundImagePath || ""}></img>

        <div className="flex justify-center lg:flex-row flex-col items-center p-5">
          <div className="p-5 lg:flex-1">
            <h1 className="text-3xl px-5 border-l-4 border-pink-500">
              {market.marketName}
            </h1>
            <p className="text-lg">{market.description}</p>
          </div>
        </div>
        {/* <SuggestItem marketplaceId={market.marketplaceId}></SuggestItem>
        <br></br> */}
        <SearchProduct key={market.marketplaceId} marketplaceId={market.marketplaceId}></SearchProduct>
        <br></br>
      </div>
    </div>
  );
}

export default Store;
