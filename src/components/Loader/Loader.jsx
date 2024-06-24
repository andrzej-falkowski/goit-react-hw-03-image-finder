import { TailSpin } from "react-loader-spinner";
import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.Loader}>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
