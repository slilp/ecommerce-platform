import React, { Suspense } from "react";
import PrivateRoute from "../route";
const loading = <h1></h1>;

function Content(props) {
  return (
    <div>
      <section>
        <Suspense fallback={loading}>
            <PrivateRoute></PrivateRoute>
        </Suspense>
      </section>
    </div>
  );
}

export default Content;
