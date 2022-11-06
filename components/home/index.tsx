import React, { useEffect, useState } from "react";
import instance from "../../axios-config";
import Filters from "./filters";
import Pagination from "./pagination";
import Simcarts from "./simcarts";
import { RootState } from "../../stores/store";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { appActions } from "../../stores/appSlice";

const HomeSimcart = () => {
  const dispatch = useAppDispatch();
  const simcarts = useAppSelector((state: RootState) => state.simcarts);
  const [loading, setLoading] = useState(false);
  const [operator, setOperator] = useState("");
  const [simType, setSimType] = useState("");
  const [status, setStatus] = useState("");
  const [rondType, setRondType] = useState("");
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");
  const [precode, setPreCode] = useState("");
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
      dispatch(appActions.addSimcarts(res.data.simcarts));

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
        ...(precode && {
          precode,
        }),
        ...(limit && {
          limit,
        }),
      },
    });

    dispatch(appActions.addSimcarts(res.data.simcarts));
    setSimcartsCount(res.data.count);
    setLoading(false);
  };

  return (
    <section>
      <div>
        <header className="relative flex items-end justify-center h-screen mb-4 overflow-hidden mx-4 rounded-xl">
          <div className="relative z-10 p-2 text-white bg-purple-50 bg-opacity-50 rounded-xl">
            <Filters
              setOperator={setOperator}
              setSimType={setSimType}
              setStatus={setStatus}
              setRondType={setRondType}
              setFromPrice={setFromPrice}
              setToPrice={setToPrice}
              setPreCode={setPreCode}
              setLimit={setLimit}
              searchButton={searchButton}
            />
          </div>
          <video
            loop
            autoPlay
            muted
            className="absolute w-auto min-w-full min-h-full max-w-none"
          >
            <source
              src="/video/pexels-mikhail-nilov-7535106.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </header>

        <Simcarts simcarts={simcarts} loading={loading} />

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          dataPerPage={simcarts.length}
          limit={limit}
        />
      </div>
    </section>
  );
};

export default HomeSimcart;
