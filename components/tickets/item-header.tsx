import React from "react";

const ItemHeader = () => {
  return (
    <section>
      <div>
        <div className="flex justify-between mx-5 py-4 text-lg dark:text-gray-900">
          <p>خطای 502</p>
          <p>#5493</p>
        </div>

        <div className="flex justify-between mx-5 text-gray-500">
          <p>ایجاد شده در چهارشنبه ۲ شهریور (۱۴:۴۳)</p>
          <p>●بسته شده</p>
        </div>
      </div>
    </section>
  );
};

export default ItemHeader;
