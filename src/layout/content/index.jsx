import React, { Suspense } from "react";
import PrivateRoute from "../route";
const loading = <h1></h1>;

function Content(props) {
  return (
      <section className="min-h-screen">
        <Suspense fallback={loading}>
            <PrivateRoute></PrivateRoute>
        </Suspense>
      </section>
  );
}

export default Content;
