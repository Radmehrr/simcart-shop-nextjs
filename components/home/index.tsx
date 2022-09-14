import React, { useEffect, useState } from "react";
import instance from "../../axios-config";
import FilterSimcart from "./filter-simcart";
import Pagination from "./pagination";
import Simcarts from "./simcarts";

const HomeSimcart = () => {
  const [loading, setLoading] = useState(false);
  const [simcarts, setSimcarts] = useState([]);
  const [operator, setOperator] = useState("");
  const [simType, setSimType] = useState("");
  const [status, setStatus] = useState("");
  const [rondType, setRondType] = useState("");
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [simcartsCount, setSimcartsCount] = useState(0);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await instance.get("/user/simcart", {
        params: {
          page: +currentPage,
          limit,
        },
      });
      setSimcarts(res.data.simcarts);

      setSimcartsCount(res.data.count);
      setLoading(false);
    })();
  }, [currentPage, limit]);

  const searchButton = async () => {
    setLoading(true);

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

    setSimcarts(res.data.simcarts);
    setSimcartsCount(res.data.count);
    setLoading(false);
  };

  return (
    <section>
      <div>
        <FilterSimcart
          setOperator={setOperator}
          setSimType={setSimType}
          setStatus={setStatus}
          setRondType={setRondType}
          setFromPrice={setFromPrice}
          setToPrice={setToPrice}
          setLimit={setLimit}
          searchButton={searchButton}
        />

        <Simcarts simcarts={simcarts} loading={loading} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          simcartPerPage={simcarts.length}
          limit={limit}
        />
      </div>
    </section>
  );
};

export default HomeSimcart;
