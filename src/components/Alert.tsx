import React from "react";
import { connect } from "react-redux";

export const AlertBase = ({ id, message, status }: any) => {
  return (
    <div key={id}>
      <p>
        {message}
        {status}
      </p>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  alerts: state.alerts,
});

// const mapDispatchToProps = {

// }

export const Alert = connect(mapStateToProps, null)(AlertBase);
