import { userAgent } from "next/server";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchActions } from "./actionSlice";

export default function ActionView() {
  const action = useSelector((state: any) => state.actions);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchActions());
  }, [dispatch]);

  return (
    <div>
      {action.loading && <div>Loading do.. </div>}
      {!action.loading && action.error ? <div>Some error.. </div> : null}
      {console.log("the final", action.actions)}
      {!action.loading &&
        action.actions.map((item: any, key: any) => (
          <div key={key}>
            {item.name} age is {item.age}
          </div>
        ))}
    </div>
  );
}
