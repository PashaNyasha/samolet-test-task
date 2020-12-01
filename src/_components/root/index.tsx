import React from "react";
import { connect } from "react-redux";
import { isAppLoadingSelector } from "../../_reducer/app-module/selectors";
import { ReduxStorageType } from "../../_types/redux-storage-type";
import { Spinner } from "../spinner";
import { Portal } from "./_components/portal";

type PropsType = {
  isLoading: boolean;
};

export const WrappedComponent = ({isLoading}: PropsType) => (
  <Portal prefix="spinner">
    {isLoading && <Spinner />}
  </Portal>
);

const mapStateToProps = (state: ReduxStorageType) => ({
  isLoading: isAppLoadingSelector(state),
});

export const ConnectedRoot = connect(mapStateToProps)(WrappedComponent);