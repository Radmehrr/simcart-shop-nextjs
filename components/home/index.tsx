import React, { useEffect, useState } from "react";
import instance from "../../axios-config";
import FilterSimcart from "./filter-simcart";

const HomeSimcart = () => {
  const [simcarts, setSimcarts] = useState([]);
  const [operator, setOperator] = useState("");
  const [simType, setSimType] = useState("");
  const [status, setStatus] = useState("");
  const [rondType, setRondType] = useState("");
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    (async () => {
      const res = await instance.get("/user/simcart", {
        params: {
          ...(operator && {
            category: operator,
          }),
          ...(simType && {
            type: simType,
          }),
          ...(status && {
            status: status,
          }),
          ...(rondType && {
            rondType: rondType,
          }),
          ...(fromPrice && {
            fromPrice,
          }),
          ...(toPrice && {
            toPrice,
          }),
          ...(limit && {
            limit,
          }),
        },
      });
      setSimcarts(res.data);
    })();
  }, [operator, simType, status, rondType, fromPrice, toPrice, limit]);

  console.log(simcarts);

  return (
    <div>
      <FilterSimcart
        setOperator={setOperator}
        setSimType={setSimType}
        setStatus={setStatus}
        setRondType={setRondType}
        setFromPrice={setFromPrice}
        setToPrice={setToPrice}
        setLimit={setLimit}
      />
    </div>
  );
};

export default HomeSimcart;
